import { config } from 'dotenv';

import express from 'express';
import router from './routes/web.js';
// const { default: configViewEngine } = require('./config/viewEngine');
import configViewEngine from './config/viewEngine.js'
import mysql from 'mysql2';


config();
const app = express()
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
// Config view engine
configViewEngine(app);





app.use(router);

const connection = mysql.createConnection({
      host: process.env.DATABASE_HOST, // Or your Docker host IP
      user: process.env.DATABASE_USER, // Or your defined user
      password: process.env.DATABASE_PASSWORD, // Or your defined password
      database: process.env.DATABASE_NAME, // If you created one
      port: process.env.DATABASE_PORT,
    });

connection.query(
  'SELECT * FROM Users',
  function (err, results, fields) {
    console.log(">>> Result: " ,results); // results contains rows returned by server
    console.log(">>> Fields: " ,fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
