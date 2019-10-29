/**
 * Authentication - Providers - User
 *
 * Provides context, state and hooks into managing a user
 *
 * @see https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/
 */

// React
import React, { useEffect, useState } from 'react'

// Next
import Router from 'next/router'

// UI
import { Api, UserContext, validateToken } from '../../../'

export const UserProvider = ({ children, jwtConfig }) => {
  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

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

  const signIn = async (provider, username, password) => {
    const {
      data: { user, token }
    } = await Api.post('auth', { username, password })

    if (user && token) {
      setUser(user)
      window.localStorage.setItem('bearerToken', token)
      setAccessToken(token)
      Router.push('/dashboard')
    }
  }

  const signOut = () => {
    window.localStorage.removeItem('bearerToken')

    setAccessToken(null)
    setUser(null)

    const notification = JSON.parse(window.localStorage.getItem('issue'))

    if (notification) {
      notification.active = true
      window.localStorage.setItem('issue', JSON.stringify(notification))
    }

    Router.push('/account/sign-in')
  }

  const authorise = condition => {
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
          accessToken: accessToken,
          user: user,
          authorise: authorise,
          signIn: signIn,
          signOut: signOut
        }}
      >
        {children}
      </UserContext.Provider>
    )
  )
}
