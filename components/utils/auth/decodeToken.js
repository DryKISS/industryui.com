/**
 * Utils - Auth - Decode Token
 */

import jwt from 'jsonwebtoken'

const decodeToken = (token) => {
  return jwt.decode(token)
}

export default decodeToken
