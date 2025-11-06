const express = require('express');
const routerAPI = express.Router();
const { getUsersApi, postNewUserApi } = require('../controllers/apiController');

routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postNewUserApi);

module.exports = routerAPI;