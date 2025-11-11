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

const GetAllCustomer = async (limit, page, name) => {
    try {
        let result = null;
        const query = { deleted: { $ne: true } };
        if (limit && page && name) {
            let offset = (page - 1) * limit;
            result = await Customer.find({ "name": { $regex: '.*' + name + '.*' } }).limit(limit).skip(offset);
        } else {
            result = await Customer.find(query);
        }
        return result;
    } catch (error) {
        throw error;
    }
}
module.exports = {
    CreateCustomer,
    CreateManyCustomer,
    DeleteManyCustomer,
    GetAllCustomer
}