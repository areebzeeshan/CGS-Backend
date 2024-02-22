const Project = require("../Models/projects.model");
// import { uploadOnCloudinary } from "../Helper/cloudinary";
const {uploadOnCloudinary} = require('../Helper/cloudinary');

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
      
      // Assuming you are using multer for file upload and the file is available in req.file
      const { path } = req.file;

      // Upload the file to Cloudinary
      const cloudinaryResponse = await uploadOnCloudinary(path);

      // Once the file is uploaded, construct the project object with the Cloudinary URL
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
        attachments: cloudinaryResponse.url, // Use the Cloudinary URL here
      });

      // Save the project to the database
      await project.save();

      return project;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getProjects() {
    try {
      const response = await Project.find();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ProjectService;
