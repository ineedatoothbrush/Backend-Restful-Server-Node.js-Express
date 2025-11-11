const Customer = require('../models/Customer');
const aqp = require('api-query-params');
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

const GetAllCustomer = async (query) => {
    try {
        const { filter, skip, limit, sort, projection } = aqp.default(query);

        const searchFilter = filter || {};
        searchFilter.deleted = { $ne: true };

        console.log(">>>>>> searchFilter:", searchFilter);
        let result = await Customer.find(searchFilter)
            .skip(skip)
            .limit(limit)
            .sort(sort)
            .select(projection)
            .exec();

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