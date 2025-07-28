
import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const configViewEngine = (app) => {
    // CONFIG
    app.set('views', path.join(__dirname, '../views'))
    app.set('view engine', 'ejs')
    app.use(express.static(path.join(__dirname, 'public'))); 
}

export default configViewEngine;