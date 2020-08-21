/**
 * Register
 */

// React
import React, { useState } from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Register } from '../'
import { useForm, requestSimulator } from 'components'

import Readme from '../README.md'
import { Alert } from 'index'

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
  const { change, form } = useForm(initialState)
  const [loggedToast, setLoggedToast] = useState(false)
  const submit = e => {
    requestSimulator().then(res => {
      setLoggedToast(true)

      setTimeout(() => {
        setLoggedToast(false)
      }, 1500)
    })
  }
  return (
    <>
      {loggedToast && <Alert content='logged' context='success' style={{ color: '#fff' }} />}
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
        submit={submit}
      />
    </>
  )
}

export const error = () => {
  const { change, form } = useForm(initialState)
  const [error, setError] = useState()

  const submit = e => {
    requestSimulator('false').catch(e => {
      setError(e)
    })
  }
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
      submit={submit}
      errorSubmit={error}
    />
  )
}
