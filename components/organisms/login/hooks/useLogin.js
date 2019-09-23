/**
 * Hooks - Use Login
 */

// React
import { useContext, useState } from 'react'

// Next
import Router from 'next/router'

// UI
import { useAuth, useChange, UserContext } from '../../../'

export const useLogin = (firebase = false) => {
  const INITIAL_STATE = {
    email: '',
    password: '',
    remember: ''
  }

  const [error, setError] = useState(null)

  const [change, form, setForm] = useChange(INITIAL_STATE)
  const { signIn } = useContext(UserContext)

  console.log('useLogin', useContext(UserContext))

  const submit = (e) => {
    e.preventDefault()
    const { email, password } = form

    if (firebase) {
      firebase
        .Auth
        .handleSignIn('email', email, password)
        .then((authUser) => {
          setForm(INITIAL_STATE)
          Router.push('/dashboard')
        })
        .catch((error) => {
          setError(error)
        })
    } else {
      console.log('Login Submit')

      signIn('email', email, password)

      // handleLogin('email', email, password)
      //   .then(() => {
      //     setForm(INITIAL_STATE)
      //     Router.push('/dashboard')
      //   })
      //   .catch((error) => {
      //     setError(error)
      //   })
    }
  }

  return [change, error, form, submit]
}
