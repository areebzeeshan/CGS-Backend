const Completed = require("../Models/completed.models");
const { uploadOnCloudinary } = require("../Helper/cloudinary");

class CompletedService {
  async submit(req) {
    try {
      const {
        id,
        title,
        startDate,
        deliveryDate,
        platform,
        department,
        nature,
        status,
        profile,
        salesPerson,
        amount,
        clientName,
        description,
      } = req.body;

      const attachments = req.file;
      console.log("request......", req.file);

      const uploadedAttachmentUrl = await uploadOnCloudinary(attachments.path);

      const completed = new Completed({
        id,
        title,
        startDate,
        deliveryDate,
        platform,
        department,
        nature,
        status,
        profile,
        salesPerson,
        amount,
        clientName,
        description,
        attachments: uploadedAttachmentUrl,
      });

      await completed.save();

      return completed;
    } catch (error) {
      throw error;
    }
  }

  async getCompleted() {
    try {
      const response = await Completed.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async searchCompleted(req) {
    try {
      const { id } = req.params;
      const response = await Completed.findOne({ id: id });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CompletedService;
