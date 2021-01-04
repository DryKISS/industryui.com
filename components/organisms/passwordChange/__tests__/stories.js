/**
 * Organisms - Password Change
 */

// React
import { useState } from 'react'

// UI
import { Alert, PasswordChange, requestSimulator } from 'components'
import Readme from '../README.md'

export default {
  component: PasswordChange,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Password Change'
}

export const main = args => {
  const [submitted, setSubmitted] = useState(false)

  const submit = async data => {
    setSubmitted(false)
    await requestSimulator('success', 2000)
    setSubmitted(true)
  }

  return (
    <>
      <PasswordChange {...args} submit={submit} />
      {submitted && <Alert content='Submitted' context='info' />}
    </>
  )
}
