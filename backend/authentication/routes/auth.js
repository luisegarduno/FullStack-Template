const pool = require('../connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = function auth(app, logger) {

  function generateAccessToken(user) {
    const token = jwt.sign({ user: user }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    return token;
  }

  function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }

  {/*
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(400).send("Cannot find user");
    }
    try {
      if (await bcrypt.compare(password, user.rows[0].password)) {
        const token = generateAccessToken(user.rows[0]);
        res.json({ token: token });
      } else {
        res.send("Not Allowed");
      }
    } catch {
      res.status(500).send();
    }
  });
*/}

  // POST /user/login
  app.post("/login", (req, res) => {
    console.log("/user/login --> ", req.body.email, req.body.password);
    // obtain a connection from our pool of connections
    pool.getConnection(function (err, connection) {
      if (err) {
        // if there's an issue obtaining a connection, release the connection instance & log the error
        logger.error("Problem obtaining MySQL connection", err);
        res.status(400).send("Problem obtaining MySQL connection");
      } else {
        // if there's no issue obtaining a connection, execute query & release connection
        const email = req.body.email;
        const hashpass = req.body.password;

        // Hash password
        const saltRounds = 10;
        bcrypt.hash(hashpass, saltRounds, function (err, hash) {
          connection.query(
            "SELECT u.password, u.id FROM `fullstack`.`user` u WHERE u.email = ?",
            [email],
            function (err, rows, fields) {
              if (err) {
                // if there's an error w/ the query, release the connection instance & log the error
                connection.release();
                res.status(400).json({
                  data: [],
                  error: "MySQL error",
                });
              } else {
                bcrypt.compare(
                  hashpass,
                  rows[0].password,
                  function (err, result) {
                    console.log(
                      "Email:",
                      email,
                      "\tPassword:",
                      hashpass,
                      "\nSavedHash:",
                      rows[0].password
                    );
                    if (result) {
                      const token = generateAccessToken(email);
                      res
                        .status(201)
                        .json({ token: token, userID: rows[0].id });
                      console.log(
                        "Correct! Hash matches w/ plain text (UserID:",
                        rows[0].id,
                        ")\nToken:",
                        token
                      );
                    } else {
                      logger.error("Invalid email/password: \n", err);
                      res.status(400).json({
                        data: [],
                        error: "MySQL error",
                        //message: "Wrong Credentials!"
                      });
                      //res.send({message: "Wrong Credentials"})
                    }
                  }
                );
              }
            }
          );
        });
      }
    });
  }); 
};
