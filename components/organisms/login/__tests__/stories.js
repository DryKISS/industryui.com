/**
 * Login
 */

// React
import React, { useState } from 'react'

// Storybook
import { withKnobs, select } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Login, requestSimulator, useForm } from '../../../'
import { Alert } from 'index'

import Readme from '../README.md'

export default {
  title: 'Organisms/Login',
  component: Login,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const [loggedToast, setLoggedToast] = useState(false)
  const submit = e => {
    requestSimulator().then(res => {
      setLoggedToast(true)

      setTimeout(() => {
        setLoggedToast(false)
      }, 1500)
    })
  }

  const defaultProps = {
    blockSubmitButton: true,
    forgotPassword: true,
    heading: 'Log In',
    pathForgot: '/account/forgot-details',
    pathSignUp: '/account/sign-in',
    remember: '',
    showLabel: true,
    showPassword: true,
    showPlaceholder: true,
    submitLoading: true,
    submit: submit,
    ...props
  }

  return (
    <>
      {loggedToast && <Alert content='logged' context='success' style={{ color: '#fff' }} />}

      <Login {...defaultProps} />
    </>
  )
}

export const main = () => {
  return <BaseComponent />
}

export const withShowAndHidePassword = () => {
  return <Login showPassword />
}

export const withBlockSubmitButton = () => {
  return <Login blockSubmitButton />
}

export const withPlaceholder = () => <Login showLabel={false} showPlaceholder />

export const withHttpRequest = () => {
  const { change, form } = useForm({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState({
    type: '',
    message: ''
  })

  const label = 'Response Type'
  const options = ['success', 'failure']
  const defaultValue = 'failure'
  const groupId = 'GROUP-ID1'
  const value = select(label, options, defaultValue, groupId)

  const submit = e => {
    e.preventDefault()
    setLoading(true)
    requestSimulator(value)
      .then(res => {
        setResult({
          type: 'success',
          message: res.message
        })
      })
      .catch(e => {
        setResult({
          type: 'danger',
          message: e.message
        })
      })
      .finally(() => setLoading(false))
  }
  return (
    <Login
      change={change}
      email={form.email}
      submit={submit}
      password={form.password}
      submitResult={result}
      submitLoading={loading}
    />
  )
}
