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

  const hasAccess = rule => {
    if (permissions.includes(rule)) {
      return true
    }
    return false
  }

  const hasRole = (type, role) => {
    const account = user.account || user.accounts[0]
    if (account.type === 'type' && account.role === 'role') {
      return true
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
