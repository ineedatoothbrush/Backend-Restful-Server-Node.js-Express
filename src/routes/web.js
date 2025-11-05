const express = require('express');
const router = express.Router();
const { getHomePage, postNewUser, getNewUser, getUpdatePage, postUpdatePage, getDeletePage, postDeletePage } = require('../controllers/homeController')

router.get('/', getHomePage)
router.post('/create-user', postNewUser)
router.get('/CreateUser', getNewUser)
router.get('/update/:id', getUpdatePage)
router.post('/update-user/:id', postUpdatePage)
router.get('/delete/:id', getDeletePage)
router.post('/delete-user/:id', postDeletePage)

module.exports = router;