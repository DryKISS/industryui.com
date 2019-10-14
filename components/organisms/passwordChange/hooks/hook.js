/**
 * Email change hook
 */

// React
import { useState } from 'react'

export const usePasswordChange = (firebase) => {
  const INITIAL_STATE = {
    password: '',
    passwordConfirm: '',
    passwordOld: ''
  }

  const [passwordError, setError] = useState(null)
  const [password, setPassword] = useState(INITIAL_STATE)

  const passwordSubmit = (e) => {
    firebase.Auth
      .handlePasswordUpdate(password.password)
      .then(() => {
        setPassword({ ...INITIAL_STATE })
      })
      .catch((error) => {
        setError(error)
      })

    e.preventDefault()
  }

  const passwordChange = (e) => {
    const { id, value } = e.target
    setPassword({ ...password, [id]: value })
  }

  return [password, passwordError, passwordSubmit, passwordChange]
}
