const Progress = require("../Models/progress.models");
const { uploadOnCloudinary } = require("../Helper/cloudinary");

class ProgressService {
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

      const progress = new Progress({
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

      await progress.save();

      return progress;
    } catch (error) {
      throw error;
    }
  }

  async getProgress() {
    try {
      const response = await Progress.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async searchProgress(req) {
    try {
      const { id } = req.params;
      const response = await Progress.find({ id: id });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateProgress(req) {
    try {
      const { id } = req.params;

      const updateData = {
        ...req.body,
      };

      if (req.file) {
        const uploadedAttachmentUrl = await uploadOnCloudinary(req.file.path);
        updateData.attachments = uploadedAttachmentUrl;
      }
      const response = await Progress.findOneAndUpdate({ id: id }, updateData, {
        new: true,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProgressService;
