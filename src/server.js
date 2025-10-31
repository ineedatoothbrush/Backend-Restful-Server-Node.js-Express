require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const connection = require('./config/database');

configViewEngine(app);
app.use('/', webRoute);

//test connection

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})