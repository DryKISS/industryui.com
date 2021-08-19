/**
 *  Utils - Auth - Validate Token
 */

import jwt from 'jsonwebtoken'

const validateToken = (token, config) => {
  return jwt.verify(token, config.key, { algorithms: ['RS512'] })
}

export default validateToken
