/**
 * Auth utils
 */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export var hashPassword = function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
};
export var validatePassword = function validatePassword(user, password) {
  return bcrypt.compareSync(password, user.password);
};
export var generateToken = function generateToken(data, config) {
  return jwt.sign(data, config.secret, {
    expiresIn: '14d'
  });
};
export var validateToken = function validateToken(token, config) {
  return jwt.verify(token, config.key, {
    algorithms: ['RS512']
  });
};
export var decodeToken = function decodeToken(token) {
  return jwt.decode(token);
};
export var getUserFromToken = function getUserFromToken(headers, config) {
  if (!headers.Authorization) {
    return null;
  }

  var token = headers.Authorization.split(' ')[1];

  if (!token) {
    return null;
  }

  var decoded = validateToken(token, config);

  if (!decoded || !decoded.user) {
    return null;
  }

  return decoded.user;
};
//# sourceMappingURL=auth.js.map