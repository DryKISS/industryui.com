/**
 * Auth utils
 */

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10)
}

export const validatePassword = (user, password) => {
  return bcrypt.compareSync(password, user.password)
}

export const generateToken = (data, secret) => {
  return jwt.sign(data, secret, { expiresIn: '14d' });
}

export const validateToken = (token, secret) => {
  return jwt.verify(token, secret)
}