/**
 * Register
 */

// React
import React, { useContext, useState, useEffect } from 'react'
import { any, bool, func, string } from 'prop-types'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import {
  Alert,
  Button,
  CheckboxField,
  DatePickerInput,
  Form,
  FormLabel,
  FormField,
  Link,
  Text,
  UserContext,
} from '../../'

// Style
import styled from 'styled-components'

const CHECKBOX_TERMS = [
  {
    id: 'terms',
    label: 'I confirm that I have read and agree to the Terms of Service and Privacy Policy.',
  },
  {
    id: 'marketing',
    label: `I would like to receive, occasional news and exclusive offers from via email. I can opt
      out of receiving these at any time in my account settings.`,
  },
]

export const Register = ({
  birthday,
  dayBirthday,
  email,
  errorSubmit,
  monthBirthday,
  marketing,
  nameFirst,
  nameLast,
  pathLogin,
  password,
  repeatPassword,
  showPlaceholder,
  submit,
  terms,
  yearBirthday,
}) => {
  const renderBirthday = () => (
    <>
      <DatePickerInput
        day={dayBirthday}
        id="Birthday"
        label="Birthdate"
        month={monthBirthday}
        year={yearBirthday}
      />

      <Text>To sign up, you must be 18 or older. Other users will not see this.</Text>
    </>
  )

  const { registerContext } = useContext(UserContext)
  const { errors, register, formState, handleSubmit } = useForm({
    mode: 'onChange',
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
        birthday,
        (error) => error && setError(error)
      )
    } else {
      submit()
    }
  }

  const defaultOptions = {
    errors: errors,
    register: register,
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      {error && <Alert content={error.message} context="warning" />}

      <FormLabel label="First name">
        <FormField
          {...defaultOptions}
          autoFocus
          name="nameFirst"
          placeholder={showPlaceholder ? 'Tommy' : ''}
        />
      </FormLabel>

      <FormLabel label="Last name">
        <FormField
          {...defaultOptions}
          name="nameLast"
          placeholder={showPlaceholder ? 'Ryder' : ''}
        />
      </FormLabel>

      <FormLabel label="Email">
        <FormField
          {...defaultOptions}
          autoFocus
          name="email"
          placeholder={showPlaceholder ? 'Email' : ''}
        />
      </FormLabel>

      <FormLabel label="Password">
        <FormField
          {...defaultOptions}
          name="password"
          placeholder={showPlaceholder ? 'Password' : ''}
          type="password"
        />
      </FormLabel>

      <FormLabel label="Repeat Password">
        <FormField
          {...defaultOptions}
          name="repeatPassword"
          placeholder={showPlaceholder ? 'Password' : ''}
          type="password"
        />
      </FormLabel>

      {birthday && renderBirthday()}

      {passwordError && <Alert content={passwordError.message} context="warning" />}

      <CheckboxField {...defaultOptions} data={CHECKBOX_TERMS} stacked />

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
  birthday: bool,
  dayBirthday: any,
  email: string,
  errorSubmit: bool,
  marketing: bool,
  monthBirthday: any,
  nameFirst: string,
  nameLast: string,
  password: string,
  pathLogin: string,
  repeatPassword: string,
  showPlaceholder: bool,
  submit: func.isRequired,
  terms: bool,
  yearBirthday: any,
}

Register.defaultProps = {
  birthday: false,
  pathLogin: '/account/login',
}
