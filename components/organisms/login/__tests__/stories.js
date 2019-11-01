/**
 * Login
 */

// React
import React, { useState } from 'react'

// UI
import { Login } from '../'
import Readme from '../README.md'
import { requestSimulator } from '../../../utils'

export default {
  title: 'Organisms/Login',
  component: Login,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <Login change={() => {}} email='' submit={() => {}} password='' />
)

defaultStory.story = {
  name: 'Default'
}

export const withShowAndHidePassword = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const handleChange = e => {
    const { name, value } = e.target
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <Login
      change={handleChange}
      email={values.email}
      submit={() => {}}
      password={values.password}
      showPassword
    />
  )
}

export const withBlockSubmitButton = () => (
  <Login change={() => {}} email='' submit={() => {}} password='' blockSubmitButton />
)

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
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const handleChange = e => {
    const { name, value } = e.target
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    requestSimulator('failure')
      .then(res => setResult(res))
      .catch(e => setResult(e.message))
      .finally(() => setLoading(false))
  }
  return (
    <Login
      change={handleChange}
      email={values.email}
      submit={handleSubmit}
      password={values.password}
      submitResult={result}
      submitLoading={loading}
    />
  )
}
