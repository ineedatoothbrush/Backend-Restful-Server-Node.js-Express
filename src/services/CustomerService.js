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
const CreateManyCustomer = async (data) => {
    try {
        let customer = await Customer.insertMany(data);
        return customer;
    } catch (error) {
        throw error;
    }
}

const DeleteManyCustomer = async (ids) => {
    try {
        let result = await Customer.delete({ _id: { $in: ids } });
        return result;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    CreateCustomer,
    CreateManyCustomer,
    DeleteManyCustomer
}