const EmployeeService = require("../Services/employee.service");
var employeeService = new EmployeeService();

const testFunc = () => {
  console.log("Test api is running.........");
};

const submit = async (req, res) => {
  try {
    // const {id, name, joiningDate, fathersName, cnic, email, phone, reference, address, emergencyPhone, username, password} = req.body;

    const employee = await employeeService.submit(req);

    if (employee) {
      return res.status(200).json({
        success: true,
        data: [employee],
        message: ["Employee created successfully"],
      });
    }

    return res.status(422).json({
      success: false,
      data: [],
      message: ["something went wrong, please try again!"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const fetchingFormData = async (req, res) => {
  try {
    const employee = await employeeService.getAllEmployees();

    if (employee) {
      return res.status(200).json({
        success: true,
        data: [employee],
        message: ["Employee fetched successfully"],
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const employeeHistory = async (req, res) => {
  try {
    const employeeHistory = await employeeService.employeeHistory(req);
    if (employeeHistory) {
      return res.status(200).json({
        success: true,
        data: [employeeHistory],
        message: ["Employe History posted successfully"],
      });
    }

    return res.status(422).json({
      success: false,
      data: [],
      message: ["Something went wrong please try again!"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const fetchingEmployeeHistory = async (req, res) => {
  try {
    console.log(req.params.id);
    const empHistData = await employeeService.getEmployeeHistory();

    if (empHistData) {
      return res.status(200).json({
        success: true,
        data: [empHistData],
        message: ["Employee History fetched successfully"],
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const getEmployeeData = async (req, res) => {
  try {
    const employeeData = await employeeService.getEmployeeData(req);
    if (employeeData) {
      return res.status(200).json({
        success: true,
        data: [employeeData],
        message: ["Employee History fetched successfully"],
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const addRecord = async (req, res) => {
  try {
    const employeeHistory = await employeeService.addRecord(req);
    if (employeeHistory) {
      return res.status(200).json({
        success: true,
        data: [employeeHistory],
        message: ["Employe History posted successfully"],
      });
    }

    return res.status(422).json({
      success: false,
      data: [],
      message: ["Something went wrong please try again!"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

module.exports = {
  submit,
  fetchingFormData,
  employeeHistory,
  fetchingEmployeeHistory,
  getEmployeeData,
  testFunc,
  addRecord,
};
