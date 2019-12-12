/**
 * Forgot Details hook
 */

// React
import { useState } from 'react'

// UI
import { useForm } from '../../../'

export const useForgotDetails = firebase => {
  const INITIAL_STATE = { email: '' }
  const { change, form, setForm } = useForm(INITIAL_STATE)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const submit = e => {
    e.preventDefault()

    firebase.Auth.handlePasswordReset(form.email)
      .then(() => {
        setForm(INITIAL_STATE)
        setSuccess(true)
      })
      .catch(error => {
        setError(error)
      })
  }

  return [change, error, form, success, submit]
}
