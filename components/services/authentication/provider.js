/**
 * Authentication - Providers - User
 * Provides context, state and hooks into managing a user
 *
 * @see https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/
 */

// React
import React, { useContext, useEffect, useState } from 'react'

// Next
import Router from 'next/router'

// Axios
import axios from 'axios'

// UI
import ConfigContext from '../config/context'
import decodeToken from '../../utils/auth/decodeToken'
import hashPassword from '../../utils/auth/hashPassword'
import validateToken from '../../utils/auth/validateToken'
import UserContext from '../authentication/context'

const UserProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const { config } = useContext(ConfigContext)

  const { apiConfig, jwtConfig } = config

  useEffect(() => {
    const bearerToken = window.localStorage.getItem('bearerToken')

    if (bearerToken) {
      try {
        const tokenData = validateToken(bearerToken, jwtConfig)
        if (tokenData.user) {
          setUser(tokenData.user)
        }
      } catch (e) {
        // Invalid token
        window.localStorage.removeItem('bearerToken')
        setAccessToken(null)
        setUser(null)
      }

      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }, [])

  const signIn = async (provider, username, password, callback) => {
    let user, token
    try {
      const { data } = await axios.post(
        `${apiConfig.authURL}/login`,
        { email: username, password },
        {
          headers: {
            'Content-Type': 'application/json',
            ...apiConfig.headers
          }
        }
      )
      token = data.token
      const tokenData = decodeToken(token)
      user = tokenData.user
    } catch (err) {
      const { error } = err.response.data
      callback(new Error(error))
    }

    const isAuthed = user && token
    if (isAuthed) {
      setUser(user)
      window.localStorage.setItem('bearerToken', token)
      setAccessToken(token)
      Router.push('/dashboard')
    }
  }

  const switchAccount = async (accountId, callback) => {
    let user, newToken
    const token = window.localStorage.getItem('bearerToken')

    try {
      const { data } = await axios.post(
        `${apiConfig.authURL}/switch-account`,
        { accountId },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
          }
        }
      )
      newToken = data.token
      const tokenData = decodeToken(newToken)
      user = tokenData.user
    } catch (err) {
      const error = err.response?.data?.error || 'Error switching account'
      callback(error)
    }

    const isAuthed = user && newToken
    if (isAuthed) {
      setUser(user)
      window.localStorage.setItem('bearerToken', newToken)
      setAccessToken(newToken)
      Router.push('/dashboard')
    }
  }

  const registerContext = async (
    nameFirst,
    nameLast,
    email,
    password,
    marketing,
    birthday,
    callback
  ) => {
    let user, token

    try {
      const { data } = await axios.post(
        `${apiConfig.authURL}/register`,
        {
          nameFirst,
          nameLast,
          email,
          password,
          marketing,
          birthday
        },
        {
          headers: {
            'Content-Type': 'application/json',
            ...apiConfig.headers
          }
        }
      )
      token = data.token
      const tokenData = decodeToken(token)
      user = tokenData.user
    } catch (err) {
      const { error } = err.response.data
      callback(new Error(error))
    }

    const isAuthed = user && token
    if (isAuthed) {
      setUser(user)
      window.localStorage.setItem('bearerToken', token)
      setAccessToken(token)
      Router.push('/dashboard')
    }
  }

  const signOut = async () => {
    window.localStorage.removeItem('bearerToken')
    window.localStorage.removeItem('active-notifications')

    setAccessToken(null)
    setUser(null)
  }

  // TODO - remove after converting all pages to new user roles
  const authorise = (condition) => {
    if (!condition(user)) {
      Router.push('/account/sign-in')
      return false
    }
    return true
  }

  return (
    !isLoading && (
      <UserContext.Provider
        value={{
          accessToken,
          authorise,
          hashPassword,
          signIn,
          registerContext,
          signOut,
          switchAccount,
          user
        }}
      >
        {children}
      </UserContext.Provider>
    )
  )
}

export default UserProvider
