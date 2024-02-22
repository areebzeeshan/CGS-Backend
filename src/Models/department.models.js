const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
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

const departmentModel = mongoose.model("Department", departmentSchema);

module.exports = departmentModel;