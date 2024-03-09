const ProjectService = require("../Services/project.service");
const projectService = new ProjectService();

const submit = async (req, res) => {
  try {
    const response = await projectService.submit(req);
    if (response) {
      return res.status(200).json({
        success: true,
        data: [response],
        message: ["Project Posted Successfully"],
      });
    }

    return res.status(422).json({
      success: false,
      data: [],
      message: [error.message],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const getProjects = async (req, res) => {
  try {
    const response = await projectService.getProjects();
    if (response) {
      return res.status(200).json({
        success: true,
        data: [response],
        message: ["Projects fetched successfully"],
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

const searchProject = async (req, res) => {
  try {
    const response = await projectService.searchProject(req);
    if (response) {
      return res.status(200).json({
        success: true,
        data: [response],
        message: ["Projects searched successfully"],
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

module.exports = { submit, getProjects, searchProject };
