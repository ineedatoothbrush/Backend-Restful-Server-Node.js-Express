require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const connection = require('./config/database');

app.use(express.json()); // Used to parse JSON bodies 
app.use(express.urlencoded()); //Parse URL-encoded bodies

configViewEngine(app);
app.use('/', webRoute);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})