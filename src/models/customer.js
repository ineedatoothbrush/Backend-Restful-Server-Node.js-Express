const mongoose = require("mongoose");
var mongoose_delete = require('mongoose-delete');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
}, {
    timestamps: true
}
)
customerSchema.plugin(mongoose_delete, { deletedAt: true });
const customer = mongoose.model('customer', customerSchema);

module.exports = customer;