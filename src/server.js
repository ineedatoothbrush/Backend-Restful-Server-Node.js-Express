require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const webRouteAPI = require('./routes/api');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');

// default options
app.use(fileUpload());

app.use(express.json()); // Used to parse JSON bodies 
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);
app.use('/', webRoute);
app.use('/v1/api/', webRouteAPI);

; (async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>>>>>> Error connect to db:", error)
    }
})()

