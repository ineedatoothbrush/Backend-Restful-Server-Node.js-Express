const express = require('express');
const routerAPI = express.Router();
const { getUsersApi } = require('../controllers/apiController');

routerAPI.get('/', (req, res) => {
    res.send('Welcome to the API v1');
});
routerAPI.get('/qwe', (req, res) => {
    res.status(201).json({
        message: 'This is the qwe endpoint of API v1'
    });
});
routerAPI.get('/users', getUsersApi);
module.exports = routerAPI;