/**
 * Forgot Details hook
 */

// React
import { useState } from 'react'

export const useForgotDetails = (email, firebase) => {
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const submit = e => {
    e.preventDefault()

    firebase.Auth.handlePasswordReset(email)
      .then(() => {
        setSuccess(true)
      })
      .catch(error => {
        setError(error)
      })
  }

  return [error, success, submit]
}
