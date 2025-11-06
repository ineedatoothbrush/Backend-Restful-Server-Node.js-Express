const User = require('../models/user')

const getUsersApi = async (req, res) => {
    let result = await User.find({});
    return res.status(200).json({
        users: result
    });
}

const postNewUserApi = async (req, res) => {
    let { email, name, city } = req.body;
    let user = await User.create({ email, name, city });
    return res.status(200).json({
        data: user
    });
}

module.exports = {
    getUsersApi,
    postNewUserApi
}