const express = require('express');
const routerAPI = express.Router();
const {
    getUsersApi,
    postNewUserApi,
    putUserApi,
    deleteUserApi,
    postUploadFileApi,
    postUploadMultipleFileApi
} = require('../controllers/apiController');

const {
    postNewCustomerApi,
    postManyCustomerApi,
    getCustomersApi,
    putCustomerApi,
    deleteCustomerApi,
    deleteManyCustomerApi
} = require('../controllers/CustomerController');

routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postNewUserApi);
routerAPI.put('/users/:userId', putUserApi);
routerAPI.delete('/users/:id', deleteUserApi);

routerAPI.post('/file', postUploadFileApi);
routerAPI.post('/files', postUploadMultipleFileApi);

routerAPI.get('/customers', getCustomersApi);
routerAPI.post('/customers', postNewCustomerApi);
routerAPI.post('/customers-many', postManyCustomerApi);
routerAPI.put('/customers/:userId', putCustomerApi);
routerAPI.delete('/customers', deleteCustomerApi);
routerAPI.delete('/customers-many', deleteManyCustomerApi);


module.exports = routerAPI;