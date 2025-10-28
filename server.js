const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/daominhduc', (req, res) => {
    res.send('Hello Dao Minh Duc!')
})

app.get('/DucDao', (req, res) => {
    res.send('<h1>Duc Dao</h1>')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})