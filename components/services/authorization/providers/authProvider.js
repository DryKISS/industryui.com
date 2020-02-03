/**
 * Providers - Authorization
 */

// React
import React, { useEffect, useState } from 'react'

// Next
import Router from 'next/router'

// UI
import { AuthorizationContext } from '../../../'

export const AuthorizationProvider = ({ children, user }) => {
  const [role, setRole] = useState('guest')

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
          hasRole,
          role
        }}
      >
        {children}
      </AuthorizationContext.Provider>
    )
  )
}
