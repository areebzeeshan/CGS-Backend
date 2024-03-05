const SalesUserService = require("../Services/salesUser.service");
const salesUserService = new SalesUserService();
const auth = require("../Middlewares/auth");

const signup = async (req, res) => {
  console.log("enter into sales signup");
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(422).json({
        success: false,
        data: [],
        message: ["Username and Password are mandatory!"],
      });
    }

    const salesUser = await salesUserService.signup(req);
    if (salesUser) {
      return res.status(200).json({
        success: true,
        data: [],
        message: ["User created successfully"],
      });
    }

    return res.status(422).json({
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
    const salesUser = await salesUserService.login(req);
    if (salesUser) {
      const accessToken = await auth.createToken(salesUser._id);
      return res.status(200).json({
        success: true,
        data: { accessToken },
        message: ["successfully logged in"],
      });
    }

    return res.status(422).json({
      success: false,
      data: [],
      message: ["username or password is incorrect"],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message],
    });
  }
};

const deleteSalesUser = async (req, res) => {
  try {
    const delete_sales_user = await salesUserService.deleteSalesUser(req);
    if (delete_sales_user) {
      return res.status(200).json({
        success: true,
        message: ["successfully deleted"],
      });
    }
    return delete_sales_user;
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: [],
      message: [error.message]
    })
  }
};

module.exports = { signup, login, deleteSalesUser };
