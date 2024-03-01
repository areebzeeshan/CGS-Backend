const Employee = require("../Models/employee.model");
const { Types } = require("mongoose");

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
      const employee = await Employee.findOne({ id: id });
      return employee;
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

  async updateEmployee(req) {
    try {
      const { id } = req.params;
      const objectId = Types.ObjectId.isValid(id) ? new Types.ObjectId(id) : id;
      const updatedData = req.body;

      const allowedFields = {
        name: updatedData.name,
        joiningDate: updatedData.joiningDate,
        fathersName: updatedData.fathersName,
        cnic: updatedData.cnic,
        email: updatedData.email,
        phone: updatedData.phone,
        reference: updatedData.reference,
        address: updatedData.address,
        emergencyPhone: updatedData.emergencyPhone,
        username: updatedData.username,
        password: updatedData.password,
      };

      const updatedEmployee = await Employee.findByIdAndUpdate(
        objectId,
        allowedFields,
        { new: true }
      );

      if (!updatedEmployee) {
        throw new Error("Employee not found");
      }

      return updatedEmployee;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = EmployeeService;
