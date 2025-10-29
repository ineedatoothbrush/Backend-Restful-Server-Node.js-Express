const express = require('express')
const app = express()
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/daominhduc', (req, res) => {
    // res.send('Hello Dao Minh Duc!')
    res.render('sample.ejs')
})

app.get('/DucDao', (req, res) => {
    res.send('<h1>Duc Dao</h1>')
})


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})