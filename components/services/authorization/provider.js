/**
 * Providers - Authorization
 */

// React
import React, { useContext, useEffect, useState } from 'react'

// Next
import Router, { useRouter } from 'next/router'

// UI
import AuthorizationContext from './context'
import ConfigContext from '../config/context'
import UserContext from '../authentication/context'

const AuthorizationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { config } = useContext(ConfigContext)
  const { user } = useContext(UserContext)
  const router = useRouter()

  const { AccessPages, AccessRules } = config

  const permissions = user && user.role ? AccessRules[user.role] : []

  // Check if the user is allowed page access
  useEffect(() => {
    if (router.pathname !== '/403') {
      if (!AccessPages[router.pathname]) {
        // Allow access to non-protected page
        setIsLoading(false)
      } else if (
        user &&
        AccessPages[router.pathname] &&
        AccessPages[router.pathname].includes(user.role)
      ) {
        // Allow access to protected page when role is assigned
        setIsLoading(false)
      } else {
        // Not authorized, redirect to /403 page

        if (!user) {
          const url = document.URL
          Router.push({ pathname: '/account/sign-in', query: `redirect=${url}`, shallow: true })
        } else {
          Router.push('/403')
        }
      }
    } else {
      setIsLoading(false)
    }
  }, [router.pathname])

  const hasAccess = (rule, options = {}) => {
    if (typeof permissions[rule] === 'boolean') {
      return permissions[rule]
    } else if (typeof permissions[rule] === 'function') {
      options.userId = user && user.id ? user.id : null
      return permissions[rule](options)
    } else {
      return false
    }
  }

  const checkRole = (role) => {
    // check
    const [type, subtype] = role.split('_')

    if (subtype) {
      switch (subtype) {
        case 'owner':
          return user.role === type + '_owner'
        case 'manager':
          return user.role === type + '_owner' || user.role === type + '_manager'
        case 'user':
          return user.role.startsWith(type)
        default:
          return false
      }
    } else {
      return user.role.startsWith(type)
    }
  }

  const hasRole = (role) => {
    if (user && user.role) {
      if (Array.isArray(role)) {
        return role.some(checkRole)
      } else {
        return checkRole(role)
      }
    }
    return false
  }

  return (
    !isLoading && (
      <AuthorizationContext.Provider
        value={{
          hasAccess,
          hasRole
        }}
      >
        {children}
      </AuthorizationContext.Provider>
    )
  )
}

export default AuthorizationProvider
