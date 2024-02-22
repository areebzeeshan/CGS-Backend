const mongoose = require('mongoose');

const ProjNatureSchema = new mongoose.Schema({
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
        required: true,
        unique: true
    },
});

const ProjNatureModel = mongoose.model("Project Nature", ProjNatureSchema);

module.exports = ProjNatureModel;