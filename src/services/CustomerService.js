const Customer = require('../models/Customer');
const CreateCustomer = async (data) => {
    try {
        let customer = await Customer.create({
            name: data.name,
            address: data.address,
            phone: data.phone,
            email: data.email,
            image: data.image,
            description: data.description
        });
        return customer;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    CreateCustomer
}