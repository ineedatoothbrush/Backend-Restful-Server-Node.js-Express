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

const putUserApi = async (req, res) => {
    try {
        const { userId } = req.params;
        const { email, name, city } = req.body;
        let user = await User.updateOne({ _id: userId }, { email, name, city })
        return res.status(200).json({
            data: user
        });
    } catch (error) {
        // Luôn xử lý lỗi
        console.error("Lỗi khi cập nhật user:", error);
        res.status(500).send('Lỗi máy chủ');
    }
}

const deleteUserApi = async (req, res) => {
    try {
        const { id } = req.params;
        let user = await User.deleteOne({ _id: id });
        return res.status(200).json({
            data: user
        });
    } catch (error) {
        // Luôn xử lý lỗi
        console.error("Lỗi khi cập nhật user:", error);
        res.status(500).send('Lỗi máy chủ');
    }
}

module.exports = {
    getUsersApi,
    postNewUserApi,
    putUserApi,
    deleteUserApi
}