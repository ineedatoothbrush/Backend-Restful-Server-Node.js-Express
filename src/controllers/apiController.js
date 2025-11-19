const User = require('../models/user')
const { UploadSingleFile, UploadMultipleFiles } = require('../services/fileService')

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
        const { userId, email, name, city } = req.body;
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

const postUploadFileApi = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    UploadSingleFile(req.files.sampleFile, res);
}
const postUploadMultipleFileApi = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    UploadMultipleFiles(req.files.sampleFile, res);
}

module.exports = {
    getUsersApi,
    postNewUserApi,
    putUserApi,
    deleteUserApi,
    postUploadFileApi,
    postUploadMultipleFileApi
}