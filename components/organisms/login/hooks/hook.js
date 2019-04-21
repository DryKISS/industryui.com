/**
 * Login hook
 */

// React
import { useState } from 'react'

// Next
import Router from 'next/router'

// UI
import { useChange } from '../../../'

export const useLogin = (firebase) => {
  const INITIAL_STATE = {
    email: '',
    password: '',
    remember: ''
  }

  const [change, form, setForm] = useChange(INITIAL_STATE)

  const [error, setError] = useState(null)

  const submit = (e) => {
    const { email, password } = form

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

    e.preventDefault()
  }

  return [change, error, form, submit]
}
