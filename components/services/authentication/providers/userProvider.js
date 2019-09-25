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

      if (bearerToken === 'adminAccessToken123456789') {
        setUser({
          name: 'Homyze',
          roles: [
            'ADMIN'
          ]
        })
      }

      if (bearerToken === 'tenantAccessToken123456789') {
        setUser({
          name: 'Tenant',
          roles: [
            'TENANT'
          ]
        })
      }

      if (bearerToken === 'customerAccessToken123456789') {
        setUser({
          name: 'Customer',
          roles: [
            'CUSTOMER'
          ]
        })
      }

      setIsLoading(false)
    } else {
      // Router.push('/account/sign-in')
      setIsLoading(false)
    }
  }, [])

  const signIn = (provider, username, password) => {
    console.log('SignIn')

    if (username === 'admin@cleverly.works') {
      localStorage.setItem('bearerToken', 'adminAccessToken123456789')
      setUser({
        name: 'Homyze',
        roles: [
          'ADMIN'
        ]
      })
    }

    if (username === 'tenant@cleverly.works') {
      localStorage.setItem('bearerToken', 'tennntAccessToken123456789')
      setUser({
        name: 'Tenant',
        roles: [
          'TENANT'
        ]
      })
    }

    if (username === 'customer@cleverly.works') {
      localStorage.setItem('bearerToken', 'customerAccessToken123456789')
      setUser({
        name: 'Customer',
        roles: [
          'CUSTOMER'
        ]
      })
    }

    if (username === 'supplier@cleverly.works') {
      localStorage.setItem('bearerToken', 'supplierAccessToken123456789')
      setUser({
        name: 'Supplier',
        roles: [
          'SUPPLIER'
        ]
      })
    }

    setAccessToken('awesomeAccessToken123456789')
    Router.push('/dashboard')
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
