const UserService = require('../services/user-service');

class UserController {
  async registration(req, res, next) {
    try {
      const {email, password} = req.body;
      const userData = await UserService.registration(email, password);
      res.cookies('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

      return res.json(userData);
    } catch (e) {
      console.log(e);
    }

  }

  async login(req, res, next) {
    try {

    } catch (e) {
      console.log(e);
    }

  }

  async logout(req, res, next) {
    try {

    } catch (e) {
      console.log(e);
    }

  }

  async activateLink(req, res, next) {
    try {

    } catch (e) {
      console.log(e);
    }

  }

  async refreshToken(req, res, next) {
    try {

    } catch (e) {
      console.log(e);
    }

  }

  async getUsers(req, res, next) {
    try {
      res.json(['123', '345']);
    } catch (e) {
      console.log(e);
    }

  }
}

module.exports = new UserController();
