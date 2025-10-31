const connection = require('../config/database')

const getAllUsers = async () => {
    let [result, field] = await connection.query(
        `select * from Users`
    );
    return result;
}
module.exports = {
    getAllUsers
};