const connection = require('../config/database')

let users = [];

const getHomePage = (req, res) => {
    return res.render('home.ejs')
}
const getDaominhduc = (req, res) => {
    res.render('sample.ejs')
}
const getDucDao = (req, res) => {
    res.send('<h1>Duc Dao</h1>')
}
const postNewUser = (req, res) => {
    console.log(">>>: ", req.body.myname)
    const { email, myname, city } = req.body;
    const query = 'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)';
    connection.query(query, [email, myname, city], (err, result) => {
        if (err) {
            return res.status(500).send('Error adding user');
        }
        res.send('User added successfully');
    });
}
module.exports = {
    getHomePage,
    getDaominhduc,
    getDucDao,
    postNewUser
};