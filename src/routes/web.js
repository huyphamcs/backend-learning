

import express from 'express';
const router = express.Router()


router.get('/', (req, res) => {
    res.render('sample.ejs')
})

router.get('/abc', (req, res) => {
    res.send('Hello World! in abc site')
})

router.get('/test', (req, res) => {
    res.send('<h1>Hello in test site</h1>')
})

export default router;          