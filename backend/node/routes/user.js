const pool = require('../connection')
const bcrypt = require('bcrypt')

module.exports = function user(app, logger) {

    // GET /user/
    app.get('/user/', (req, res) => {
        console.log(req.query.username)
        // Obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // If there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var username = req.query.username
                // If there is no issue obtaining a connection, execute query and release connection
                connection.query("SELECT * FROM `project`.`user` u WHERE u.username = ?", [username], (err, rows) => {
                    connection.release();
                    if (err) {
                        logger.error("Error while fetching values: \n", err);
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        res.status(200).json(rows)
                    }
                });
            }
        });
    });

    // POST /user/create
    app.post('/user/create', (req, res) => {
        console.log("CHECK:", req.body.username, req.body.password, req.body.email);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there's an issue obtaining a connection, release the connection instance & log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                const username = req.body.username
                const email = req.body.email
                const hashpass = req.body.password

                // Hash the password
                const saltRounds = 10;
                bcrypt.hash(hashpass, saltRounds, function(err, hash) {
                    connection.query('INSERT INTO `project`.`user` (username, password, email) VALUES(?, ?, ?)',[username, hash, email], function (err, rows) {
                        if (err) { 
                            // if there's an error w/ the query, release the connection instance & log the error
                            connection.release()
                            logger.error("Error while creating account (email, password, username): \n", err); 
                            res.status(400).json({
                                "data": [],
                                "error": "MySQL error"
                            })
                        } else{
                            res.status(201).json({
                                "data": rows
                            });
                        }
                    });
                })
            }
        });
    });

    // POST /user/login
    app.post('/user/login', (req, res) => {
        console.log(req.body.username, req.body.password);
        // obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
            // if there is an issue obtaining a connection, release the connection instance and log the error
            logger.error('Problem obtaining MySQL connection',err)
            res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // if there is no issue obtaining a connection, execute query and release connection
                const username = req.body.username
                const hashpass = req.body.password

                connection.query('SELECT u.password, u.userID FROM `project`.`user` u WHERE u.username = ?', [username], function (err, rows) {
                    if (err) { 
                        // if there's an error w/ the query, release the connection instance & log the error
                        connection.release()
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        bcrypt.compare(hashpass, rows[0].password, function (err, result) {
                            if(err){
                                connection.release()
                                logger.error("Error while logging in w/ user: \n", err); 
                                res.status(400).json({
                                    "data": [],
                                    "error": "MySQL error"
                                })
                            }
                            if(result){
                                console.log("Username:", username, "\tPassword:", hashpass, "\tSavedHash:", rows[0].password)
                                console.log("Correct! Hash matches w/ plain text (UserID:", rows[0].userID, ")")

                                connection.query('SELECT IF(EXISTS(SELECT * FROM `project`.`user` u WHERE u.username = ? AND u.password = ?), (SELECT u.username AS result FROM `project`.`user` u WHERE u.password = ?), 0) AS result', [username, rows[0].password, rows[0].password], function (err2, rows2) {
                                    connection.release()
                                    if (err2) {
                                        logger.error("Error while executing Query");
                                        res.status(400).json({
                                            "data": [],
                                            "error": "MySQL error"
                                        })
                                    } else {
                                        res.status(201).json(rows2[0].result);
                                    }
                                });
                            }
                            else {
                                connection.release()
                                logger.error("Error while logging in w/ user: \n", err); 
                                res.status(401).json({
                                    "data": [],
                                    "error": "Invalid Credentials",
                                    "message": "Wrong Credentials!"
                                })
                            }
                        })
                    }
                })
            }
        });
    });

    // GET /user/:userID
    app.get('/user/:userID', (req, res) => {
        console.log(req.params.userID)
        // Obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // If there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var userID = req.params.userID
                // If there is no issue obtaining a connection, execute query and release connection
                connection.query('SELECT * FROM `project`.`user` u WHERE u.userID = ?', [userID], function (err, rows) {
                    // If there is an error with the query, release the connection instance and log the error
                    connection.release()
                    if (err) {
                        logger.error("Error while fetching values: \n", err);
                        res.status(400).json({
                            "data": [],
                            "error": "Error obtaining values"
                        })
                    } else {
                        res.status(200).json({
                            "data": rows
                        });
                    }
                });
            }
        });
    });

    // PUT /user/
    app.put('/user/', async(req, res) => {
        console.log(req.body.password,req.body.username);
        // Obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // if there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // If there is no issue obtaining a connection, execute query and release connection
                let password = req.body.password
                let username = req.body.username
                connection.query('UPDATE `project`.`user` u SET u.password = ? WHERE u.username = ?', [password, username], function(err, result) {
                    // If there is an error with the query, release the connection instance and log the error
                    connection.release()
                    if (err) throw err
                    res.end(JSON.stringify(result))
                });
            }
        });
    });

    // PUT /user/:userID/updateEmail
    app.put('/user/:userID/updateEmail', (req, res) => {
        console.log(req.params.userID,req.body.email);
        // Obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // If there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // If there is no issue obtaining a connection, execute query and release connection
                var userID = req.params.userID
                var email = req.body.email
                connection.query("UPDATE `project`.`user` u SET u.email = ? WHERE u.userID = ?", [email, userID], (err, rows) => {
                    // If there is an error with the query, release the connection instance and log the error
                    connection.release()
                    if (err) {
                        logger.error("Error while executing Query: \n", err);
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        res.status(200).json(rows)
                    }
                });
            }
        });
    });

    // DELETE /user/:userID
    app.delete('/user/:userID', (req, res) => {
        console.log(req.params.userID);
        // Ibtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // If there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // If there is no issue obtaining a connection, execute query and release connection
                var userID = req.params.userID
                connection.query("DELETE FROM user WHERE userID = ?", [userID], (err, rows) => {
                    // If there is an error with the query, release the connection instance and log the error
                    connection.release()
                    if (err) {
                        logger.error("Error while executing Query: \n", err);
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        res.status(200).json(rows)
                    }
                });
            }
        });
    });

}
