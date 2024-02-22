const departmentModel = require("../Models/department.models");
const platformModel = require("../Models/platform.models");
const ProjNatureModel = require("../Models/projNature.models");

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
        value: value
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
        value: value
      });
      await add_department.save();

      return add_department;
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
}

module.exports = Dropdowns;
