/**
 * Utils - Auth - Validate Password
 */

import bcrypt from 'bcryptjs'

const validatePassword = (user, password) => {
  return bcrypt.compareSync(password, user.password)
}

export default validatePassword
