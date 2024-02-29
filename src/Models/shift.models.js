const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        required: true
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

const shiftModel = mongoose.model("Shift", shiftSchema);

module.exports = shiftModel;