const ProgressService = require("../Services/progress.service");
const progressService = new ProgressService();

const submit = async (req, res) => {
  try {
    const response = await progressService.submit(req);
    if (response) {
      return res.status(200).json({
        succes: true,
        data: [response],
        message: ["Progress submitted successfully!"],
      });
    }

    return res.status(422).json({
      succes: false,
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

const getProgress = async (req, res) => {
  try {
    const response = await progressService.getProgress();
    if (response) {
      return res.status(200).json({
        succes: 200,
        data: [response],
        message: ["Progress fetched successfully!"],
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

const searchProgress = async (req, res) => {
  try {
    const response = await progressService.searchProgress(req);
    if (response) {
      return res.status(200).json({
        succes: 200,
        data: [response],
        message: ["Progress searched successfully!"],
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

module.exports = { submit, getProgress, searchProgress };
