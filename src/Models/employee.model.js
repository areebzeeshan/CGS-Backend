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
    StartDate: {
      type: String,
      required: true,
    },
    EndDate: {
      type: String
    },
    salary: {
      type: Number,
      required: true,
    },
    shift: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const employeeSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    joiningDate: {
      type: Date,
      required: true,
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
      type: String
    },
    address: {
      type: String,
      required: true,
    },
    emergencyPhone: {
      type: Number,
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
