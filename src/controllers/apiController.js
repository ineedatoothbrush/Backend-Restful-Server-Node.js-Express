const User = require('../models/user')

const getUsersApi = async (req, res) => {
    let result = await User.find({});
    return res.status(200).json({
        users: result
    });
}

module.exports = {
    getUsersApi
}