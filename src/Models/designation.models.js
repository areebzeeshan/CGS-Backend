const mongoose = require('mongoose');

const designationSchema = new mongoose.Schema({
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

const designationModel = mongoose.model("Designation", designationSchema);

module.exports = designationModel;