const { UploadSingleFile } = require('../services/fileService');
const { CreateCustomer, CreateManyCustomer, DeleteManyCustomer, GetAllCustomer } = require('../services/CustomerService');
const Customer = require('../models/customer');


module.exports = {
    postNewCustomerApi: async (req, res) => {

        let { name, address, phone, email, image, description } = req.body;

        let imageURL = '';
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        } else {
            let result = await UploadSingleFile(req.files.image);
            imageURL = result;
            console.log(">>>>>> Uploaded image path:", imageURL);
        }

        let data = {
            name,
            address,
            phone,
            email,
            image: imageURL,
            description
        };

        let customer = await CreateCustomer(data);

        return res.status(200).json({
            data: customer
        });
    },
    postManyCustomerApi: async (req, res) => {
        let customer = await CreateManyCustomer(req.body.customer);
        return res.status(200).json({
            data: customer
        });
    },
    getCustomersApi: async (req, res) => {
        try {
            let result = await GetAllCustomer(req.query);
            return res.status(200).json({
                EC: 0,
                data: result
            });
        } catch (error) {
            console.error("Lỗi khi lấy danh sách customers:", error);
            res.status(500).send('Lỗi máy chủ');
        }
    },
    putCustomerApi: async (req, res) => {
        try {
            const { userId } = req.params;
            const { name, address, phone, email, description } = req.body;
            let customer = await Customer.updateOne({ _id: userId }, { name, address, phone, email, description });
            return res.status(200).json({
                message: "Cập nhật customer thành công",
                data: customer
            });
        } catch (error) {
            console.error("Lỗi khi cập nhật customer:", error);
            res.status(500).send('Lỗi máy chủ');
        }
    },
    deleteCustomerApi: async (req, res) => {
        try {
            const userId = req.body.id;
            console.log(">>>>>> ID customer cần xóa:", userId);
            let customer = await Customer.deleteOne({ _id: userId });
            return res.status(200).json({
                message: "Xóa customer thành công",
                data: customer
            });
        } catch (error) {
            console.error("Lỗi khi xóa customer:", error);
            res.status(500).send('Lỗi máy chủ');
        }
    },
    deleteManyCustomerApi: async (req, res) => {
        try {
            let customer = await DeleteManyCustomer(req.body.ids);
            console.log(">>>>>> Kết quả xóa nhiều customer:", customer);
            return res.status(200).json({
                message: "Xóa nhiều customer thành công",
                data: customer
            });
        } catch (error) {
            console.error("Lỗi khi xóa nhiều customer:", error);
            res.status(500).send('Lỗi máy chủ');
        }
    }
};