/**
 * Hooks - Use Login
 */

// React
import { useContext, useState } from 'react'

// Next
import Router from 'next/router'

// UI
import { UserContext } from '../../../'

export const useLogin = (credential, firebase = false) => {
  const [error, setError] = useState(null)
  const { signIn } = useContext(UserContext)

  const submit = e => {
    e.preventDefault()
    const { email, password } = credential

    if (firebase) {
      firebase.Auth.handleSignIn('email', email, password)
        .then(authUser => {
          Router.push('/dashboard')
        })
        .catch(error => {
          setError(error)
        })
    } else {
      signIn('email', email, password, error => error && setError(error))
    }
  }

  return { error, submit }
}
