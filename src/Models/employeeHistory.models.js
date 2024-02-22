const mongoose = require('mongoose');

const employeeHistorySchema = new mongoose.Schema({
    department: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },    
    StartDate: {
        type: String,
        required: true
    },
    EndDate: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    shift: {
        type: String,
        required: true
    },
}, {timestamps: true});

const employeeHistory = mongoose.model("Employee History", employeeHistorySchema);

module.exports = employeeHistory;