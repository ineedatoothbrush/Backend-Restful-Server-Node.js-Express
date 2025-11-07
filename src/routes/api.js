const express = require('express');
const routerAPI = express.Router();
const {
    getUsersApi,
    postNewUserApi,
    putUserApi,
    deleteUserApi,
    postUploadFileApi,
    postUploadMultipleFileApi,
} = require('../controllers/apiController');

const {
    postNewCustomerApi
} = require('../controllers/CustomerController');

routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postNewUserApi);
routerAPI.put('/users/:userId', putUserApi);
routerAPI.delete('/users/:id', deleteUserApi);

routerAPI.post('/file', postUploadFileApi);
routerAPI.post('/files', postUploadMultipleFileApi);

routerAPI.post('/customers', postNewCustomerApi);

module.exports = routerAPI;