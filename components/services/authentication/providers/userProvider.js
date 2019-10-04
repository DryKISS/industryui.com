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
    const bearerToken = window.localStorage.getItem('bearerToken')

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

      if (bearerToken === 'supplierAccessToken123456789') {
        setUser({
          name: 'Supplier',
          roles: [
            'SUPPLIER'
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
    if (username === 'admin@cleverly.works') {
      window.localStorage.setItem('bearerToken', 'adminAccessToken123456789')
      setUser({
        name: 'Homyze',
        roles: [
          'ADMIN'
        ]
      })
    }

    if (username === 'tenant@cleverly.works') {
      window.localStorage.setItem('bearerToken', 'tenantAccessToken123456789')
      setUser({
        name: 'Tenant',
        roles: [
          'TENANT'
        ]
      })
    }

    if (username === 'customer@cleverly.works') {
      window.localStorage.setItem('bearerToken', 'customerAccessToken123456789')
      setUser({
        name: 'Customer',
        roles: [
          'CUSTOMER'
        ]
      })
    }

    if (username === 'supplier@cleverly.works') {
      window.localStorage.setItem('bearerToken', 'supplierAccessToken123456789')
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
