const Project = require("../Models/projects.model");

class ProjectService {
  async submit(req) {
    try {
      const {
        id,
        title,
        startDate,
        deleiveryDate,
        platform,
        department,
        nature,
        profile,
        salesPerson,
        amount,
        clientName,
        description,
        attachments,
      } = req.body;
      const project = new Project({
        id: id,
        title: title,
        startDate: startDate,
        deleiveryDate: deleiveryDate,
        platform: platform,
        department: department,
        nature: nature,
        profile: profile,
        salesPerson: salesPerson,
        amount: amount,
        clientName: clientName,
        description: description,
        attachments: attachments,
      });
      await project.save();
      return project;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getProjects () {
    try {
      const response = await Project.find();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ProjectService;
