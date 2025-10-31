const connection = require('../config/database')

let users = [];

const getHomePage = (req, res) => {
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            console.log(">>>>>> result = ", results);
            users = results;
            // results contains rows returned by server
            res.send(JSON.stringify(users))
        }
    );
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