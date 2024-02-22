const mongoose = require('mongoose');

const salesUserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

const salesUserModel = mongoose.model("Sales User", salesUserSchema);

module.exports = salesUserModel;

