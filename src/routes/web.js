const express = require('express');
const router = express.Router();
const { getHomePage, getDaominhduc, getDucDao, postNewUser, getNewUser, getUpdatePage } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/daominhduc', getDaominhduc)
router.get('/DucDao', getDucDao)
router.post('/create-user', postNewUser)
router.get('/CreateUser', getNewUser)
router.get('/update', getUpdatePage)

module.exports = router;