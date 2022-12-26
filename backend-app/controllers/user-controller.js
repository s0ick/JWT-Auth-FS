const {validationResult} = require('express-validator');

const UserService = require('../services/user-service');
const ApiError = require('../exceptions/api-error');

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()){
        return next(ApiError.BadRequest('Error on validation', errors.array()));
      }

      const {email, password} = req.body;
      const userData = await UserService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

      return res.json(userData);
    } catch (e) {
      next(e);
    }

  }

  async login(req, res, next) {
    try {
      const {email, password} = req.body;
      const userData = await UserService.login(email, password)
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

      return res.json(userData);
    } catch (e) {
      next(e);
    }

  }

  async logout(req, res, next) {
    try {

    } catch (e) {
      next(e);
    }

  }

  async activateLink(req, res, next) {
    try {
      const activationLink = req.params.link;
      await UserService.activate(activationLink);
      return res.redirect(process.env.APP_URL);
    } catch (e) {
      next(e);
    }

  }

  async refreshToken(req, res, next) {
    try {

    } catch (e) {
      next(e);
    }

  }

  async getUsers(req, res, next) {
    try {
      res.json(['123', '345']);
    } catch (e) {
      next(e);
    }

  }
}

module.exports = new UserController();
