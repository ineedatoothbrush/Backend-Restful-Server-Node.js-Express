const connection = require('../config/database')

const getAllUsers = async () => {
    let [result, field] = await connection.query(
        `select * from Users`
    );
    return result;
}
const getUserbyId = async () => {

}
module.exports = {
    getAllUsers
};