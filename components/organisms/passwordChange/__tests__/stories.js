/**
 * Components - Organisms - Password Change
 */

// React
import React, { useState } from 'react'

// UI
import PasswordChange from '../passwordChange'

import Alert from '../../../molecules/alert/alert'
import requestSimulator from '../../../utils/requestSimulator/requestSimulator'

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

export const Main = (args) => {
  const [submitted, setSubmitted] = useState(false)

  const submit = async (data) => {
    setSubmitted(false)
    await requestSimulator('success', 2000)
    setSubmitted(true)
  }

  return (
    <>
      <PasswordChange {...args} submit={submit} />
      {submitted && <Alert content="Submitted" context="info" />}
    </>
  )
}
