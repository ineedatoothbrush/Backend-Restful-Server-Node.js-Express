const express = require('express');
const routerAPI = express.Router();
const { getUsersApi, postNewUserApi, putUserApi, deleteUserApi } = require('../controllers/apiController');

routerAPI.get('/users', getUsersApi);
routerAPI.post('/users', postNewUserApi);
routerAPI.put('/users/:userId', putUserApi);
routerAPI.delete('/users/:id', deleteUserApi);

module.exports = routerAPI;