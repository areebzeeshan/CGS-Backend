const Alloted = require("../Models/alloted.models");
const { uploadOnCloudinary } = require("../Helper/cloudinary");

class AllotedService {
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

      const alloted = new Alloted({
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

      await alloted.save();

      return alloted;
    } catch (error) {
      throw error;
    }
  }

  async getAlloted() {
    try {
      const response = await Alloted.find();
      return response;
    } catch (error) {
      throw error;
    }
  }

  async searchAlloted(req) {
    try {
      const { id } = req.params;
      const response = await Alloted.findOne({ id: id });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateAlloted(req) {
    try {
      const { id } = req.params;

      const updateData = {
        ...req.body,
      };

      if (req.file) {
        const uploadedAttachmentUrl = await uploadOnCloudinary(req.file.path);
        updateData.attachments = uploadedAttachmentUrl;
      }
      const response = await Alloted.findOneAndUpdate({ id: id }, updateData, {
        new: true,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AllotedService;
