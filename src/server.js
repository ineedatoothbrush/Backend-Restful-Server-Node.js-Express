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
const cors = require('cors');

// default options
app.use(fileUpload());

app.use(express.json()); // Used to parse JSON bodies 

const corsOptions = {
    origin: 'http://localhost:3000', // Chỉ cho phép yêu cầu từ origin này
    optionsSuccessStatus: 200,
    allowedHeaders: "Content-Type, Authorization" // Một số trình duyệt cũ (IE11) cần cái này
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);
app.use('/', webRoute);
app.use('/v1/api/', webRouteAPI);


app.use(cors(corsOptions));
; (async () => {
    try {
        await connection();
        app.listen(port, '0.0.0.0', () => {
            console.log(`Backend app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>>>>>> Error connect to db:", error)
    }
})()

