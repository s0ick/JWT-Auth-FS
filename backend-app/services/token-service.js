const jwt = require('jsonwebtoken');
const TokenModel = require('../models/token-model');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {expiresIn: '30m'});
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {expiresIn: '30d'});

    return {
      accessToken, refreshToken
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await TokenModel.findOne({user: userId});

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    return await TokenModel.create({user: userId, refreshToken});
  }
}

module.exports = new TokenService();
