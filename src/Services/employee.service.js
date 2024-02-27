const Employee = require("../Models/employee.model");

class EmployeeService {
  async submit(req) {
    try {
      const {
        id,
        name,
        joiningDate,
        fathersName,
        cnic,
        email,
        phone,
        reference,
        address,
        emergencyPhone,
        username,
        password,
        history,
      } = req.body;
      const employee = new Employee({
        id: id,
        name: name,
        joiningDate: joiningDate,
        fathersName: fathersName,
        cnic: cnic,
        email: email,
        phone: phone,
        reference: reference,
        address: address,
        emergencyPhone: emergencyPhone,
        username: username,
        password: password,
        history: history,
      });
      await employee.save();
      return employee;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllEmployees() {
    try {
      const employee = await Employee.find();
      return employee;
    } catch (error) {
      throw new Error(error);
    }
  }

  // async employeeHistory(req) {
  //   try {
  //     const { department, designation, StartDate, EndDate, salary, shift } =
  //       req.body;
  //     const employee_history = new employeeHistory({
  //       department: department,
  //       designation: designation,
  //       StartDate: StartDate,
  //       EndDate: EndDate,
  //       salary: salary,
  //       shift: shift,
  //     });
  //     await employee_history.save();

  //     return employee_history;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }

  // async getEmployeeHistory() {
  //   try {
  //     const empistData = await employeeHistory.find();

  //     return empistData;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }

  async getEmployeeData(req) {
    try {
      const { id } = req.params;
      const employees = await Employee.findOne({ id: id });
      return employees;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addRecord(req) {
    try {
      const { id } = req.params;
      const {
        department,
        designation,
        StartDate,
        EndDate,
        salary,
        shift,
        bank,
        accountNumber,
      } = req.body;
      const employee_history = await Employee.findOneAndUpdate(
        { id: id },
        {
          $push: {
            history: {
              department,
              designation,
              StartDate,
              EndDate,
              salary,
              shift,
              bank,
              accountNumber,
            },
          },
        },
        { new: true }
      );
      await employee_history.save();
      return employee_history;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = EmployeeService;
