/**
 * Organisms - Email Change - Story
 */

// React
import React, { useState } from 'react'

// UI
import Alert from '../../../molecules/alert/alert'
import EmailChange from '../emailChange'
import requestSimulator from '../../../utils/requestSimulator/requestSimulator'
import Readme from '../README.md'

export default {
  component: EmailChange,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Email Change'
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
      <EmailChange {...args} submit={submit} />
      {submitted && <Alert content="Submitted" context="info" />}
    </>
  )
}
