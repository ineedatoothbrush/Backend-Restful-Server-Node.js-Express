const connection = require('../config/database')
const { getAllUsers, getUserbyId } = require('../services/CRUDService')
let users = [];

const getHomePage = async (req, res) => {
    let result = await getAllUsers();
    return res.render('home.ejs', { users: result })
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
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    const currentUser = await getUserbyId(userId)
    if (currentUser) {
        res.render('update.ejs', { user: currentUser });
    } else {
        // Xử lý trường hợp không tìm thấy user với ID đó
        console.log("Không tìm thấy user với ID:", userId);
        res.status(404).send('User not found');
    }
}
const postUpdatePage = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, myname, city } = req.body;
        const sql = 'UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?';
        const params = [email, myname, city, id];
        await connection.execute(sql, params);
        res.redirect('/');
    } catch (error) {
        // Luôn xử lý lỗi
        console.error("Lỗi khi cập nhật user:", error);
        res.status(500).send('Lỗi máy chủ');
    }
}
module.exports = {
    getHomePage,
    postNewUser,
    getNewUser,
    getUpdatePage,
    postUpdatePage
};