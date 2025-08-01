import connection from "../config/database.js"



export const getHome = (req, res) => {
    let users = [];
    connection.query(
        'SELECT * FROM Users',
        function (err, results, fields) {
            users = results;
            console.log(">>> Check users: ", users);
            console.log(">>> Result: " ,results);
            // res.send(JSON.stringify(users));
        }
        
    );
    res.render('sample.ejs');
    
}

export const getABC = (req, res) => {
    res.send('Hello World! in abc site')
} 

export const test = (req, res) => {
    res.send('<h1>Hello in test site</h1>')
}