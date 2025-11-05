const mongoose = require("mongoose");

const kittySchema = new mongoose.Schema({
    name: String
})
const Kitten = mongoose.model("Duc Dao", kittySchema);


module.exports = Kitten;