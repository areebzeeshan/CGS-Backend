const Review = require("../Models/review.models");
const { uploadOnCloudinary } = require("../Helper/cloudinary");

class ReviewService {
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

      const review = new Review({
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

      await review.save();

      return review;
    } catch (error) {
      throw error;
    }
  }

  async getReview() {
    try {
      const response = await Review.find();
      return response;
    } catch (error) {
      console.log("fetching review error : ", error);
      throw error;
    }
  }

  async searchReview(req) {
    try {
      const { id } = req.params;
      const response = await Review.findOne({ id: id });
      return response;
    } catch (error) {
      console.log("fetching review error : ", error);
      throw error;
    }
  }

  async updateReview(req) {
    try {
      const { id } = req.params;

      const updateData = {
        ...req.body,
      };

      if (req.file) {
        const uploadedAttachmentUrl = await uploadOnCloudinary(req.file.path);
        updateData.attachments = uploadedAttachmentUrl;
      }
      const response = await Review.findOneAndUpdate({ id: id }, updateData, {
        new: true,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ReviewService;
