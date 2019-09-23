/**
 * Authentication - Providers - User
 *
 * Provides context, state and hooks into managing a user
 *
 * @see https://reacttricks.com/sharing-global-data-in-next-with-custom-app-and-usecontext-hook/
 */

// React
import React, { createContext, useContext, useEffect, useState } from 'react'

// Next
import Router from 'next/router'

// Axios
// import axios from 'axios'

// UI
import { UserContext, useLogin, useLocalStorage } from '../../../'

export const UserProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('UserProvider: useEffect')
    const bearerToken = localStorage.getItem('bearerToken')

    if (bearerToken) {
      setUser({
        name: 'Homyze',
        roles: [
          'ADMIN'
        ]
      })

      setIsLoading(false)
    } else {
      // Router.push('/account/sign-in')
      setIsLoading(false)
    }
  }, [])

  const signIn = (provider, username, password) => {
    console.log('SignIn')

    if (username === 'admin@cleverly.works' && password === 'cleverly123') {
      localStorage.setItem('bearerToken', 'awesomeAccessToken123456789')

      setAccessToken('awesomeAccessToken123456789')
      setUser({
        name: 'Homyze',
        roles: [
          'ADMIN'
        ]
      })

      Router.push('/dashboard')
    }
  }

  const signOut = () => {
    localStorage.removeItem('bearerToken')

    setAccessToken(null)
    setUser(null)

    Router.push('/account/sign-in')
  }

  const authorise = (condition) => {
    if (!condition(user)) {
      Router.push('/account/sign-in')
      return false
    }
    return true
  }

  return (
    !isLoading &&
      <UserContext.Provider
        value={{
          user: user,
          authorise: authorise,
          signIn: signIn,
          signOut: signOut
        }}
      >
        {children}
      </UserContext.Provider>
  )
}
