require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./routes/web');
const connection = require('./config/database');
const mongoose = require("mongoose");

app.use(express.json()); // Used to parse JSON bodies 
app.use(express.urlencoded()); //Parse URL-encoded bodies

configViewEngine(app);
app.use('/', webRoute);

const kittySchema = new mongoose.Schema({
    name: String
})
const Kitten = mongoose.model("Kitten", kittySchema);
const cat = new Kitten({ name: 'Dao Minh Duc' });
cat.save();

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

