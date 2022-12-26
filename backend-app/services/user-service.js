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

  };
}

module.exports = new UserService();
