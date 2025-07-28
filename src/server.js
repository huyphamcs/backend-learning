import { config } from 'dotenv';

import express from 'express';
import router from './routes/web.js';
// const { default: configViewEngine } = require('./config/viewEngine');
import configViewEngine from './config/viewEngine.js'



config();
const app = express()
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
// Config view engine
configViewEngine(app);


app.use(router);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
