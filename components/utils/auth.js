/**
 * Auth utils
 */

import bcrypt from 'bcryptjs'

export const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10)
}

export const validatePassword = (user, password) => {
  return bcrypt.compareSync(password, user.password)
}

