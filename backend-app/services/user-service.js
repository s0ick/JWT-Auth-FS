const bcrypt = require('bcrypt');
const uuid = require('uuid');

const UserModel = require('../models/user-model');
const UserDto = require('../dtos/user-dto');

const EmailService = require('./email-service');
const TokenService = require('./token-service');

class UserService {
  async registration(email, password) {
    const condidate = await UserModel.findOne({email});

    if (condidate) {
      throw new Error(`User with this email (${email}) already exists`);
    }

    const hashPassword = bcrypt.hash(password, 3);
    const activationLink = uuid.v4();

    const user = await UserModel.create({email, password: hashPassword, activationLink});
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({...userDto});

    await EmailService.sendActivationEmail(email, activationLink);
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto
    };
  }
}

module.exports = new UserService();
