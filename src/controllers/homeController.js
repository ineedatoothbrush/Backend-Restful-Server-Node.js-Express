const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')
let users = [];

const getHomePage = async (req, res) => {
    let result = await getAllUsers();
    console.log(">>> check row:", result)
    return res.render('home.ejs', { users: result })
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
    res.redirect('/');
}
module.exports = {
    getHomePage,
    getDaominhduc,
    getDucDao,
    postNewUser,
    getNewUser
};