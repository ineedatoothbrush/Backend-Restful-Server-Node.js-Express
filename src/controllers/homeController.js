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
module.exports = {
    getHomePage,
    getDaominhduc,
    getDucDao
};