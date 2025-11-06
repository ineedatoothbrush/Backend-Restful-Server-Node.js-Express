const express = require('express');
const routerAPI = express.Router();
const { getUsersApi, postNewUserApi, putUserApi } = require('../controllers/apiController');

routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postNewUserApi);
routerAPI.put('/users/:userId', putUserApi);

module.exports = routerAPI;