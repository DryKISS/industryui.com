/**
 * Components - Organisms - Login - Story
 */

// React
import React, { useState } from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import Alert from '../../../molecules/alert/components/alert'
import Login from '../login'
import requestSimulator from '../../../utils/requestSimulator/requestSimulator'
import Readme from '../README.md'

export default {
  args: {
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
  component: Login,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Login'
}

const BaseComponent = (props = {}) => {
  const [loggedToast, setLoggedToast] = useState(false)

  const submit = (e) => {
    requestSimulator().then((res) => {
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
      {loggedToast && <Alert content="logged" context="success" />}
      <Login {...defaultProps} />
    </>
  )
}

export const main = (args) => {
  return <BaseComponent {...args} />
}

export const withPlaceholder = (args) => (
  <BaseComponent {...args} showLabel={false} showPlaceholder />
)

export const WithHttpRequest = (args) => {
  const { change, form } = useForm({ email: '', password: '' })

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState({
    type: '',
    message: ''
  })

  const { value } = args

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    requestSimulator(value)
      .then((res) => {
        setResult({
          type: 'success',
          message: res.message
        })
      })
      .catch((e) => {
        setResult({
          type: 'danger',
          message: e.message
        })
      })
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Login change={change} email={form.email} submit={submit} password={form.password} />
      {loading}
      {result}
    </>
  )
}
