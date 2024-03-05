const ProductionUser = require("../Models/productionUser.models");
const { helperService } = require("../Helper/helper");

class ProductionUserService {
  async signup(req) {
    try {
      const { username, password } = req.body;
      const hashPassword = await helperService.encryptPassword(password);
      const production_user = new ProductionUser({
        username: username,
        password: hashPassword,
      });
      await production_user.save();

      return production_user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(req) {
    try {
      const { username, password } = req.body;
      const production_user = await ProductionUser.findOne({ username });
      if(production_user && (await helperService.comparePassword(password, production_user.password))){
        return production_user;
      }

      return false;
    } catch (error) {
        throw new Error(error);
    }
  }

  async deleteProductionUser(req) {
    try {
      const { username } = req.params;
      const deletedProdUser = await ProductionUser.findOneAndDelete({
        username: username,
      });
      if (!deletedProdUser) {
        throw new Error("User not found");
      }
      return deletedProdUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ProductionUserService;
