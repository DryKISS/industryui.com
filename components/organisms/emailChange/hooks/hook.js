/**
 * Email change hook
 */

// React
import { useState } from 'react'

export const useEmailChange = (firebase) => {
  const [emailError, setError] = useState(null)
  const [email, setEmail] = useState('')

  const emailSubmit = (e) => {
    firebase.Auth
      .handleEmailUpdate(email)
      .then(() => {
        setEmail('')
      })
      .catch((error) => {
        setError(error)
      })

    e.preventDefault()
  }

  const emailChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }

  return [email, emailError, emailSubmit, emailChange]
}
