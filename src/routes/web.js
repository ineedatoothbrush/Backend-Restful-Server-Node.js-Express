const express = require('express');
const router = express.Router();
const { getHomePage, postNewUser, getNewUser, getUpdatePage, postUpdatePage } = require('../controllers/homeController')

router.get('/', getHomePage)
router.post('/create-user', postNewUser)
router.get('/CreateUser', getNewUser)
router.get('/update/:id', getUpdatePage)
router.post('/update-user/:id', postUpdatePage)

module.exports = router;