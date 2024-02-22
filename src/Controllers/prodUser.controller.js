const ProductionUserService = require("../Services/prodUser.service");
var productionUserService = new ProductionUserService();
const auth = require("../Middlewares/auth");

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(422).json({
        success: false,
        data: [],
        message: ["Username and Password are mandatory!"],
      });
    }

    const response = await productionUserService.signup(req);
    if (response) {
      return res.status(200).json({
        success: true,
        data: [],
        message: ["User created successfully"],
      });
    }

    return res.status(404).json({
      uccess: false,
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

const login = async (req, res) => {
  try {
    const response = await productionUserService.login(req);
    if (response) {
      const accessToken = await auth.createToken(response._id);
      return res.status(200).json({
        success: true,
        data: { accessToken },
        message: ["User created successfully"],
      });
    }

    return res.status(404).json({
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

module.exports = { signup, login };
