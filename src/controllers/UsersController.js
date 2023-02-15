import UserModel from "../models/User";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";

class UsersController {
  @TryCatchErrorDecorator
  static async index(req, res) {
    const users = await UserModel.find().select("_id name email");
    res.json(users);
  }

  @TryCatchErrorDecorator
  static async saveBinance(req, res) {
    const users = await UserModel.findOneAndUpdate(req.body.user_id, {$set: {api_key_binance: req.body.key, api_secret_binance: req.body.secret}});
    res.json(users);
  }

  @TryCatchErrorDecorator
  static async saveKraken(req, res) {
    const users = await UserModel.findOneAndUpdate(req.body.user_id, {$set: {api_keys_kraken: req.body.key, api_secret_kraken: req.body.secret}});
    res.json(users);
  }

  @TryCatchErrorDecorator
  static async saveKucoin(req, res) {
    const users = await UserModel.findOneAndUpdate(req.body.user_id, {$set: {api_keys_kucoin: req.body.key, api_secret_kucoin: req.body.secret, api_password_kucoin: req.body.password }});
    res.json(users);
  }


}

export default UsersController;
