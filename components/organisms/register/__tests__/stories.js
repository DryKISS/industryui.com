/**
 * Register
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Register } from '../'
import { useForm } from 'components'

import Readme from '../README.md'

export default {
  title: 'Organisms/Register',
  component: Register,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const initialState = {
  email: '',
  nameFirst: '',
  nameLast: '',
  password: '',
  repeatPassword: '',
  marketing: false,
  terms: false
}
export const main = () => {
  const { change, form, handleSubmit } = useForm(initialState)

  return (
    <Register
      change={change}
      nameFirst={form.nameFirst}
      nameLast={form.nameLast}
      email={form.email}
      password={form.password}
      repeatPassword={form.repeatPassword}
      marketing={form.marketing}
      terms={form.terms}
      pathLogin='/account/login'
      handleSubmit={handleSubmit}
    />
  )
}
