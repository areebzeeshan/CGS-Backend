const mongoose = require('mongoose');

const productionUserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
}, {timestamps: true});

const productionUserModel = mongoose.model("Production User", productionUserSchema);

module.exports = productionUserModel;