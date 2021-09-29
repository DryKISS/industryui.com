/**
 * Register
 */

// React
import React, { useContext, useState, useEffect } from 'react'
import { bool, func, string } from 'prop-types'

// React Hook Form
import { useForm } from 'react-hook-form'

// Style
import styled from 'styled-components'

// UI
import Alert from '../../molecules/alert/alert'
import Checkbox from '../../form/checkbox/checkbox'
import UserContext from '../../services/authentication/context'
import Button from '../../atoms/button/button/button'
import Form from '../../form/form/form'
import Input from '../../form/input/input'
import Label from '../../form/label/label'
import Link from '../../atoms/link/link'

const CHECKBOX_TERMS = [
  {
    id: 'terms',
    label: 'I confirm that I have read and agree to the Terms of Service and Privacy Policy.'
  },
  {
    id: 'marketing',
    label: `I would like to receive, occasional news and exclusive offers from via email. I can opt
      out of receiving these at any time in my account settings.`
  }
]

const Register = ({
  email,
  errorSubmit,
  marketing,
  nameFirst,
  nameLast,
  pathLogin,
  password,
  repeatPassword,
  showPlaceholder,
  submit,
  terms
}) => {
  const { registerContext } = useContext(UserContext)
  const { errors, register, formState, handleSubmit } = useForm({
    mode: 'onChange'
  })

  const [error, setError] = useState(errorSubmit)
  const [passwordError, setPasswordError] = useState()

  useEffect(() => {
    setError(errorSubmit)

    return () => {
      setError()
    }
  }, [errorSubmit])

  const onSubmit = (e) => {
    setPasswordError()

    if (e.password !== e.repeatPassword) {
      setPasswordError(new Error('Password and repeat password are different'))
    } else if (!submit) {
      registerContext(
        nameFirst,
        nameLast,
        email,
        password,
        marketing,
        (error) => error && setError(error)
      )
    } else {
      submit()
    }
  }

  const defaultOptions = {
    errors: errors,
    register: register
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      {error && <Alert content={error.message} context="warning" />}

      <Label label="First name">
        <Input
          {...defaultOptions}
          autoFocus
          name="nameFirst"
          placeholder={showPlaceholder ? 'Tommy' : ''}
        />
      </Label>

      <Label label="Last name">
        <Input {...defaultOptions} name="nameLast" placeholder={showPlaceholder ? 'Ryder' : ''} />
      </Label>

      <Label label="Email">
        <Input
          {...defaultOptions}
          autoFocus
          name="email"
          placeholder={showPlaceholder ? 'Email' : ''}
        />
      </Label>

      <Label label="Password">
        <Input
          {...defaultOptions}
          name="password"
          placeholder={showPlaceholder ? 'Password' : ''}
          type="password"
        />
      </Label>

      <Label label="Repeat Password">
        <Input
          {...defaultOptions}
          name="repeatPassword"
          placeholder={showPlaceholder ? 'Password' : ''}
          type="password"
        />
      </Label>

      {passwordError && <Alert content={passwordError.message} context="warning" />}

      <Checkbox {...defaultOptions} data={CHECKBOX_TERMS} stacked />

      <Button
        align="right"
        content="Sign up"
        context="primary"
        disabled={!formState.isValid}
        size="lg"
        type="submit"
      />

      <StyledLink>
        Already have an account? <Link to={pathLogin}>Log in</Link>
      </StyledLink>
    </Form>
  )
}

const StyledLink = styled.div`
  display: block;
  margin: 1rem 0;
`

Register.propTypes = {
  email: string,
  errorSubmit: bool,
  marketing: bool,
  nameFirst: string,
  nameLast: string,
  password: string,
  pathLogin: string,
  repeatPassword: string,
  showPlaceholder: bool,
  submit: func.isRequired,
  terms: bool
}

Register.defaultProps = {
  pathLogin: '/account/login'
}

export default Register
