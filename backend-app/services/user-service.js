const bcrypt = require('bcrypt');
const uuid = require('uuid');

const UserModel = require('../models/user-model');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');

const EmailService = require('./email-service');
const TokenService = require('./token-service');

class UserService {
  async registration(email, password) {
    const condidate = await UserModel.findOne({email});

    if (condidate) {
      throw ApiError.BadRequest(`User with this email (${email}) already exists`);
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();

    const user = await UserModel.create({email, password: hashPassword, activationLink});
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({...userDto});

    await EmailService.sendActivationEmail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    };
  };

  async activate(activationLink) {
    const user = await UserModel.findOne({activationLink});

    if (!user) {
      throw ApiError.BadRequest('User not found');
    }

    user.isActivate = true;
    await user.save();
  };

  async login(email, password) {
    const user = await UserModel.findOne({email});

    if (!user) {
      throw ApiError.BadRequest('User not found');
    }

    const isEqualPass = await bcrypt.compare(password, user.password);

    if (!isEqualPass) {
      throw ApiError.BadRequest('Invalid password');
    }

    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({...userDto});
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    };
  };

  async logout(refreshToken) {
    return await TokenService.removeToken(refreshToken);
  };

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFormDataBase = await TokenService.findToken(refreshToken);

    if (!userData || !tokenFormDataBase) {
      throw ApiError.UnauthorizedError();
    }

    const user = await UserModel.findById(userData.id);

    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({...userDto});
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    };
  };

  async getAllUsers() {
   return await UserModel.find();
  };
}

module.exports = new UserService();
