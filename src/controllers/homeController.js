export const getHome = (req, res) => {
    res.render('sample.ejs')
}

export const getABC = (req, res) => {
    res.send('Hello World! in abc site')
} 

export const test = (req, res) => {
    res.send('<h1>Hello in test site</h1>')
}