const express = require('express');
const router = express.Router();
const { getHomePage, getDaominhduc, getDucDao } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/daominhduc', getDaominhduc)
router.get('/DucDao', getDucDao)

module.exports = router;