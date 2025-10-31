const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.get('/daominhduc', (req, res) => {
    // res.send('Hello Dao Minh Duc!')
    res.render('sample.ejs')
})

router.get('/DucDao', (req, res) => {
    res.send('<h1>Duc Dao</h1>')
})

module.exports = router;