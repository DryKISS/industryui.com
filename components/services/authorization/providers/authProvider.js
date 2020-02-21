/**
 * Providers - Authorization
 */

// React
import React, { useContext, useEffect, useState } from 'react'

// Next
import Router, { useRouter } from 'next/router'

// UI
import { AuthorizationContext, UserContext } from '../../../'

// Config
import { AccessPages, AccessRules } from 'config'

export const AuthorizationProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const { user } = useContext(UserContext)
  const router = useRouter()

  const permissions = user && user.role ? AccessRules[user.role] : []

  // Check if the user is allowed page access
  useEffect(() => {
    if (router.pathname !== '/403') {
      if (!AccessPages[router.pathname]) {
        // Allow access to non-protected page
        setIsAuthorized(true)
        setIsLoading(false)
      } else if (
        user &&
        AccessPages[router.pathname] &&
        AccessPages[router.pathname].includes(user.role)
      ) {
        // Allow access to protected page when role is assigned
        setIsAuthorized(true)
        setIsLoading(false)
      } else {
        // Not authorized, redirect to /403 page
        Router.push('/403')
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

  const hasRole = role => {
    if (user && user.role) {
      return Array.isArray(role) ? role.includes(user.role) : user.role === role
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
