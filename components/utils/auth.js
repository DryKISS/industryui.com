/**
 * Auth utils
 */

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const hashPassword = password => {
  return bcrypt.hashSync(password, 10)
}

export const validatePassword = (user, password) => {
  return bcrypt.compareSync(password, user.password)
}

export const generateToken = (data, config) => {
  return jwt.sign(data, config.secret, { expiresIn: '14d' })
}

export const validateToken = (token, config) => {
  return jwt.verify(token, config.secret)
}

export const getUserFromToken = (headers, config) => {
  if (!headers.Authorization) {
    return null
  }

  const token = headers.Authorization.split(' ')[1]

  if (!token) {
    return null
  }

  const decoded = validateToken(token, config)

  if (!decoded || !decoded.user) {
    return null
  }

  return decoded.user
}
