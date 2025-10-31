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
const getNewUser = (req, res) => {
    res.render('CreateUser.ejs')
}
const postNewUser = async (req, res) => {

    const { email, myname, city } = req.body;
    let [result, fields] = await connection.query(
        'INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, myname, city]
    );
    res.send('User added successfully');
}
module.exports = {
    getHomePage,
    getDaominhduc,
    getDucDao,
    postNewUser,
    getNewUser
};