/**
 * Utils - Auth - Get User from Token
 */

import validateToken from './validateToken'

const getUserFromToken = (headers, config) => {
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

export default getUserFromToken
