const { UploadSingleFile } = require('../services/fileService');
const { CreateCustomer } = require('../services/CustomerService');

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
    }
};