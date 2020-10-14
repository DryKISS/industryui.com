/**
 * Login
 */

// React
import { useState } from 'react'

// UI
import { Alert, Login, requestSimulator, useForm } from 'components'
import Readme from '../README.md'

export default {
  args: {
    blockSubmitButton: true,
    forgotPassword: true,
    heading: 'Log In',
    pathForgot: '/account/forgot-details',
    pathSignUp: '/account/sign-in',
    remember: '',
    showLabel: true,
    showPassword: false,
    showPlaceholder: true,
    submitLoading: true,
    value: 'Response Type'
  },
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: ['Response Type', 'success', 'failure', 'GROUP-ID1']
      }
    }
  },
  title: 'Organisms/Login',
  component: Login,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
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
    submit: submit,
    ...props
  }

  return (
    <>
      {loggedToast && <Alert content='logged' context='success' />}
      <Login {...defaultProps} />
    </>
  )
}

export const main = args => {
  return <BaseComponent {...args} />
}

export const withPlaceholder = args => <BaseComponent {...args} showLabel={false} showPlaceholder />

export const withHttpRequest = args => {
  const { change, form } = useForm({ email: '', password: '' })

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState({
    type: '',
    message: ''
  })

  const { value } = args

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
