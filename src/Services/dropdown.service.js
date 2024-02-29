const departmentModel = require("../Models/department.models");
const platformModel = require("../Models/platform.models");
const ProjNatureModel = require("../Models/projNature.models");
const shiftModel = require("../Models/shift.models");
const designationModel = require("../Models/designation.models");
const bankModel = require('../Models/bank.models');

class Dropdowns {
  async projectNature(req) {
    try {
      const { id, label, value } = req.body;

      const project_nature = new ProjNatureModel({
        id: id,
        label: label,
        value: value,
      });
      await project_nature.save();

      return project_nature;
    } catch (error) {
      throw new Error(error);
    }
  }

  async platform(req) {
    try {
      const { id, label, value } = req.body;
      const add_platform = new platformModel({
        id: id,
        label: label,
        value: value,
      });
      await add_platform.save();

      return add_platform;
    } catch (error) {
      throw new Error(error);
    }
  }

  async department(req) {
    try {
      const { id, label, value } = req.body;
      const add_department = new departmentModel({
        id: id,
        label: label,
        value: value,
      });
      await add_department.save();

      return add_department;
    } catch (error) {
      throw new Error(error);
    }
  }

  async shift(req) {
    try {
      const { id, label, value } = req.body;
      const add_shift = new shiftModel({
        id: id,
        label: label,
        value: value,
      });
      await add_shift.save();

      return add_shift;
    } catch (error) {
      throw new Error(error);
    }
  }

  async designation(req) {
    try {
      const { id, label, value } = req.body;
      const add_designation = new designationModel({
        id: id,
        label: label,
        value: value,
      });
      await add_designation.save();

      return add_designation;
    } catch (error) {
      throw new Error(error);
    }
  }

  async designation(req) {
    try {
      const { id, label, value } = req.body;
      const add_bank = new bankModel({
        id: id,
        label: label,
        value: value,
      });
      await add_bank.save();

      return add_bank;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getProjectNature() {
    try {
      const getPrjNat = await ProjNatureModel.find();
      return getPrjNat;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPlatform() {
    try {
      const getPlat = await platformModel.find();
      return getPlat;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getDepartment() {
    try {
      const getDepart = await departmentModel.find();
      return getDepart;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getShift() {
    try {
      const getShift = await shiftModel.find();
      return getShift;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getDesignation() {
    try {
      const getShift = await designationModel.find();
      return getShift;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getBank() {
    try {
      const getShift = await bankModel.find();
      return getShift;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Dropdowns;
