const { helperService } = require("../Helper/helper");
const User = require("../Models/user.model");
const generateToken = require("../Middlewares/auth");

class UserService {
  async signup(req) {
    try {
      const { username, password } = req.body;
      const hashPassword = await helperService.encryptPassword(password);
      const user = new User({
        username: username,
        password: hashPassword,
      });
      await user.save();
      const token = await generateToken.createToken(user._id);
      return { user, token };
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(req) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (
        user &&
        (await helperService.comparePassword(password, user.password))
      ) {
        const token = await generateToken.createToken(user._id);
        return { user, token };
      }
      return false;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(req) {
    try {
      const { username } = req.params;
      const deletedUser = await User.findOneAndDelete({ username: username });
      if (!deletedUser) {
        throw new Error("User not found");
      }
      return deletedUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserService;
