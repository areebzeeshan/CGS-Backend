const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    label: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        unique: true,
        required: true
    },
}, {timestamps: true});

const bankModel = mongoose.model("Bank", bankSchema);

module.exports = bankModel;