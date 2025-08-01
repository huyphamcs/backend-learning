import { config } from 'dotenv';
import mysql from 'mysql2';
config();

// const connection = mysql.createConnection({
//     host: process.env.DATABASE_HOST, // Or your Docker host IP
//     user: process.env.DATABASE_USER, // Or your defined user
//     password: process.env.DATABASE_PASSWORD, // Or your defined password
//     database: process.env.DATABASE_NAME, // If you created one
//     port: process.env.DATABASE_PORT,
// });

const connection = mysql.createPool({
    host: process.env.DATABASE_HOST, // Or your Docker host IP
    user: process.env.DATABASE_USER, // Or your defined user
    password: process.env.DATABASE_PASSWORD, // Or your defined password
    database: process.env.DATABASE_NAME, // If you created one
    port: process.env.DATABASE_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default connection;