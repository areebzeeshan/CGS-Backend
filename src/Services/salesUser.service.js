const SalesUser = require("../Models/salesuser.models");
const { helperService } = require("../Helper/helper");

class SalesUserService {
  async signup(req) {
    try {
      const { username, password } = req.body;
      const hashPassword = await helperService.encryptPassword(password);
      const sales_user = new SalesUser({
        username: username,
        password: hashPassword,
      });
      await sales_user.save();

      return sales_user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(req) {
    try {
      const { username, password } = req.body;
      const sales_user = await SalesUser.findOne({ username });
      if(sales_user && (await helperService.comparePassword(password, sales_user.password))){
        return sales_user;
      }

      return false;
    } catch (error) {
        throw new Error(error);
    }
  }
}

module.exports = SalesUserService;
