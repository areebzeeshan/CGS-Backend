const CompletedService = require("../Services/completed.service");
const completedService = new CompletedService();

const submit = async (req, res) => {
  try {
    const response = await completedService.submit(req);
    if (response) {
      return res.status(200).json({
        success: true,
        data: [response],
        message: ["Completed submitted successfully!"],
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

const getCompleted = async (req, res) => {
  try {
    const response = await completedService.getCompleted();
    if (response) {
      return res.status(200).json({
        success: 200,
        data: [response],
        message: ["Completed fetched successfully!"],
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

const searchCompleted = async (req, res) => {
  try {
    const response = await completedService.searchCompleted(req);
    if (response) {
      return res.status(200).json({
        success: 200,
        data: [response],
        message: ["Completed searched successfully!"],
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

const updateCompleted = async (req, res) => {
  try {
    const response = await completedService.updateCompleted(req);
    if (response) {
      return res.status(200).json({
        success: 200,
        data: [response],
        message: ["Completed updated successfully!"],
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

module.exports = { submit, getCompleted, searchCompleted, updateCompleted };
