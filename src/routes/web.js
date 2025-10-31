const express = require('express');
const router = express.Router();
const { getHomePage, getDaominhduc, getDucDao, postNewUser } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/daominhduc', getDaominhduc)
router.get('/DucDao', getDucDao)
router.post('/create-user', postNewUser)

module.exports = router;