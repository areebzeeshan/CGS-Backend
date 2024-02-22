const mongoose = require('mongoose');

const platformSchema = new mongoose.Schema({
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

const platformModel = mongoose.model("Platform", platformSchema);

module.exports = platformModel;