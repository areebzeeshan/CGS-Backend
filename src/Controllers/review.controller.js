const ReviewService = require("../Services/review.service");
const reviewService = new ReviewService();

const submit = async (req, res) => {
  try {
    const response = await reviewService.submit(req);
    if (response) {
      return res.status(200).json({
        success: true,
        data: [response],
        message: ["Review submitted successfully!"],
      });
    }

    return res.status(422).json({
      success: false,
      data: [],
      message: ["Something went wrong please try again!"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const getReview = async (req, res) => {
  try {
    const response = await reviewService.getReview();
    if (response) {
      return res.status(200).json({
        success: 200,
        data: [response],
        message: ["Review fetched successfully!"],
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const searchReview = async (req, res) => {
  try {
    const response = await reviewService.searchReview(req);
    if (response) {
      return res.status(200).json({
        success: 200,
        data: [response],
        message: ["Review searched successfully!"],
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const updateReview = async (req, res) => {
  try {
    const response = await reviewService.updateReview(req);
    if (response) {
      return res.status(200).json({
        success: 200,
        data: [response],
        message: ["Review updated successfully!"],
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

module.exports = { submit, getReview, searchReview, updateReview };
