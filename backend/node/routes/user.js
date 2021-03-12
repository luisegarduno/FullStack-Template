const pool = require('../connection')

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
                connection.query("SELECT * FROM `CHANGEME`.`user` u WHERE u.username = ?", [username], (err, rows) => {
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
        console.log(req.body.username, req.body.password, req.body.email);
        // Obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
                // If there is an issue obtaining a connection, release the connection instance and log the error
                logger.error('Problem obtaining MySQL connection',err)
                res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                var username = req.body.username
                var password = req.body.password
                var email = req.body.email
                // If there is no issue obtaining a connection, execute query
                connection.query('INSERT INTO `CHANGE-ME`.`user` (username, password, email) VALUES(?, ?, ?)',[username, password, email], function (err, rows, fields) {
                    if (err) { 
                        // If there is an error with the query, release the connection instance and log the error
                        connection.release()
                        logger.error("Error while creating user: \n", err); 
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else{
                        res.status(200).json({
                            "data": rows
                        });
                    }
                });
            }
        });
    });

    // POST /user/login
    app.post('/user/login', (req, res) => {
        console.log(req.body.username,req.body.password);
        // Obtain a connection from our pool of connections
        pool.getConnection(function (err, connection){
            if(err){
            // If there is an issue obtaining a connection, release the connection instance and log the error
            logger.error('Problem obtaining MySQL connection',err)
            res.status(400).send('Problem obtaining MySQL connection'); 
            } else {
                // If there is no issue obtaining a connection, execute query and release connection
                const username = req.body.username
                const password = req.body.password
                connection.query('SELECT IF(EXISTS(SELECT * FROM `CHANGE-ME`.`user` u WHERE u.username = ? AND u.password = ?), (SELECT u.username AS result FROM `CHANGE-ME`.`user` u WHERE u.password = ?), 0) AS result', [username, password, password], function (err, rows, fields) {
                    // If there is an error with the query, release the connection instance and log the error
                    connection.release()
                    if (err) {
                        logger.error("Error while executing Query");
                        res.status(400).json({
                            "data": [],
                            "error": "MySQL error"
                        })
                    } else {
                        res.status(200).send(rows[0].result);
                    }
                });
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
                connection.query('SELECT * FROM `CHANGE-ME`.`user` u WHERE u.userID = ?', [userID], function (err, rows, fields) {
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
                connection.query('UPDATE `CHANGE-ME`.`user` u SET u.password = ? WHERE u.username = ?', [password, username], function(err, result, fields) {
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
                connection.query("UPDATE `CHANGE-ME`.`user` u SET u.email = ? WHERE u.userID = ?", [email, userID], (err, rows) => {
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
