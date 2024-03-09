const Project = require("../Models/projects.model");
const { uploadOnCloudinary } = require("../Helper/cloudinary");

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
      } = req.body;

      // Assuming attachments is an array of files, we will handle each file separately
      const attachments = req.file; // get the file from request
      console.log("request......", req.file);

      const uploadedAttachmentUrl = await uploadOnCloudinary(attachments.path);

      const project = new Project({
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
        attachments: uploadedAttachmentUrl, // Assign uploaded attachment URL
      });

      // Save the project to the database
      await project.save();

      return project;
    } catch (error) {
      throw error;
    }
  }

  async getProjects() {
    try {
      const response = await Project.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async searchProject(req) {
    try {
      const { id } = req.params;
      const response = await Project.findOne({ id: id });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProjectService;
