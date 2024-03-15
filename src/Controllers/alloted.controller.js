const AllotedService = require("../Services/alloted.service");
const allotedService = new AllotedService();

const submit = async (req, res) => {
  try {
    const response = await allotedService.submit(req);
    if (response) {
      return res.status(200).json({
        success: true,
        data: [response],
        message: ["Alloted submitted successfully!"],
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

const getAlloted = async (req, res) => {
  try {
    const response = await allotedService.getAlloted();
    if (response) {
      return res.status(200).json({
        success: true,
        data: [response],
        message: ["Alloted fetched successfully!"],
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

const searchAlloted = async (req, res) => {
  try {
    const response = await allotedService.searchAlloted(req);
    if (response) {
      return res.status(200).json({
        success: true,
        data: [response],
        message: ["Alloted searched successfully!"],
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

const updateAlloted = async (req, res) => {
  try {
    const response = await allotedService.updateAlloted(req);
    if (response) {
      return res.status(200).json({
        success: true,
        data: [response],
        message: ["Alloted updated successfully!"],
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

module.exports = { submit, getAlloted, searchAlloted, updateAlloted };
