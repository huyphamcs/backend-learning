import { config } from 'dotenv';

import express from 'express';
import router from './routes/web.js';
// const { default: configViewEngine } = require('./config/viewEngine');
import configViewEngine from './config/viewEngine.js'
import connection from './config/database.js';


config();
const app = express()
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
// Config view engine
configViewEngine(app);

// Declare router
app.use(router);



// connection.query(
//   'SELECT * FROM Users',
//   function (err, results, fields) {
//     console.log(">>> Result: " ,results); // results contains rows returned by server
//     console.log(">>> Fields: " ,fields); // fields contains extra meta data about results, if available
//   }
// );

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
