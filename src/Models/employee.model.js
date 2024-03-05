const mongoose = require("mongoose");

const employeeHistorySchema = new mongoose.Schema(
  {
    department: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    shift: {
      type: String,
      required: true,
    },
    bank: {
      type: String, 
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const employeeSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    joiningDate: {
      type: String,
      required: true,
    },
    EndDate: {
      type: String
    },
    fathersName: {
      type: String,
      required: true,
    },
    cnic: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    reference: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true,
    },
    emergencyPhone: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    history: [employeeHistorySchema],
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
