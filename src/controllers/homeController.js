const getHomePage = (req, res) => {
    res.send("Hello anh duc dep trai")
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