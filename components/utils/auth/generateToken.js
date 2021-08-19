/**
 * Utils - Auth - Generate Token
 */

import jwt from 'jsonwebtoken'

const generateToken = (data, config) => {
  return jwt.sign(data, config.secret, { expiresIn: '14d' })
}

export default generateToken
