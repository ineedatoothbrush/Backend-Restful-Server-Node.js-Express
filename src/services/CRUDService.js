const connection = require('../config/database')

const getAllUsers = async () => {
    let [result, field] = await connection.query(
        `select * from Users`
    );
    return result;
}
const getUserbyId = async (id) => {
    let [result, field] = await connection.query(
        `SELECT * FROM Users WHERE id = ?`,
        [id]
    );
    return result[0];
}
module.exports = {
    getAllUsers,
    getUserbyId
};