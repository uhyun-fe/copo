// set server

// https://api.upbit.com/v1/market/all 참고 (코인명 리스트 조회)

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");

const { host, user, copo_port, password, database } = require("./config");
// const UserController = require("./routes/user/UserController");

// const upload = multer();

const app = express();
app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const pool = mysql.createPool({
   host,
   port: copo_port,
   user,
   password,
   database,
});

pool.getConnection((err, connection) => {
   if (!err) {
      // UserController(app, pool, upload);
      console.log("connect");
      // app.get("/user", (req, res) => {
      //    console.log(req.body);
      pool.query("SELECT * FROM users", (error, rows, fields) => {
         if (error) throw error;
         console.log("info is : ", rows);
         // res.send(rows);
      });
      // });
   }
   console.log(err);
   // connection.release();
});

const port = Number(process.env.PORT) || 5000;

app.listen(port, () => {
   console.log(`App listening on port ${port}...`);
});
