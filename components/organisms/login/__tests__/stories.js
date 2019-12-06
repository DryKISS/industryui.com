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
  const { change, form } = useForm({ email: '', password: '' })

  const submit = data => {
    console.log('Submitted', data)
  }

  const defaultProps = {
    blockSubmitButton: true,
    change: change,
    email: form.email,
    forgotPassword: true,
    heading: 'Log In',
    password: form.password,
    pathForgot: '/account/forgot-details',
    pathSignUp: '/account/sign-in',
    remember: '',
    showLabel: true,
    showPassword: true,
    showPlaceholder: true,
    submit: submit,
    submitLoading: true,
    submitResult: {},
    ...props
  }

  return <Login {...defaultProps} />
}

export const main = () => {
  return <BaseComponent />
}

export const withShowAndHidePassword = () => {
  const { change, form } = useForm({ email: '', password: '' })
  return (
    <Login
      change={change}
      email={form.email}
      submit={() => {}}
      password={form.password}
      showPassword
    />
  )
}

export const withBlockSubmitButton = () => {
  const { change, form } = useForm({ email: '', password: '' })
  return (
    <Login
      change={change}
      email={form.email}
      submit={() => {}}
      password={form.password}
      blockSubmitButton
    />
  )
}

export const withPlaceholder = () => (
  <Login
    change={() => {}}
    email=''
    submit={() => {}}
    password=''
    showLabel={false}
    showPlaceholder
  />
)

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
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    requestSimulator(value)
      .then(res =>
        setResult({
          type: 'success',
          message: res
        })
      )
      .catch(e =>
        setResult({
          type: 'danger',
          message: e.message
        })
      )
      .finally(() => setLoading(false))
  }
  return (
    <Login
      change={change}
      email={form.email}
      submit={handleSubmit}
      password={form.password}
      submitResult={result}
      submitLoading={loading}
    />
  )
}
