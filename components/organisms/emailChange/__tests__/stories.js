/**
 * Organisms - Email Change - Story
 */

// React
import { useState } from 'react'

// UI
import { Alert, EmailChange, requestSimulator } from '../../../'
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

export const main = args => {
  const [submitted, setSubmitted] = useState(false)

  const submit = async data => {
    setSubmitted(false)
    await requestSimulator('success', 2000)
    setSubmitted(true)
  }

  return (
    <>
      <EmailChange {...args} submit={submit} />
      {submitted && <Alert content='Submitted' context='info' />}
    </>
  )
}
