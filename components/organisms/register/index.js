/**
 * Register
 */

// React
import React, { useContext, useState, useEffect } from 'react'
import { any, bool, func, string } from 'prop-types'
import { useForm } from 'react-hook-form'

// UI
import {
  Alert,
  Button,
  Checkbox,
  DatePickerInput,
  FormLabel,
  FormField,
  FormForm,
  Link,
  UserContext
} from '../../'

// Style
import styled from 'styled-components'

export const Register = ({
  birthday,
  change,
  submit,
  dayBirthday,
  email,
  showPlaceholder,
  monthBirthday,
  marketing,
  nameFirst,
  nameLast,
  pathLogin,
  password,
  repeatPassword,
  terms,
  yearBirthday,
  errorSubmit
}) => {
  const renderBirthday = () => (
    <>
      <DatePickerInput
        change={change}
        day={dayBirthday}
        id='Birthday'
        label='Birthdate'
        month={monthBirthday}
        year={yearBirthday}
      />
      To sign up, you must be 18 or older. Other users will not see this.
    </>
  )

  // const isInvalid = password === '' || email === ''
  const { registerContext } = useContext(UserContext)
  const { errors, register, formState, handleSubmit } = useForm({ mode: 'onChange' })

  const [error, setError] = useState(errorSubmit)
  const [passwordError, setPasswordError] = useState()

  // TODO: Refactorize this into utils
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  useEffect(() => {
    setError(errorSubmit)
    return () => {
      setError()
    }
  }, [errorSubmit])
  const onSubmit = e => {
    // We get the check of password and repeatpassword from backend? or if not we can manage it here too
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
        error => error && setError(error)
      )
    } else {
      submit()
    }
  }

  const CHECKBOX_TERMS = [
    {
      id: 'terms',
      label: 'I confirm that I have read and agree to the Terms of Service and Privacy Policy.',
      required: true,
      isChecked: terms
    },
    {
      id: 'marketing',
      label:
        'I would like to receive, occasional news and exclusive offers from via email. I can opt out of receiving these at any time in my account settings.',
      isChecked: marketing
    }
  ]
  return (
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      {error && <Alert content={error.message} context='warning' style={{ color: '#fff' }} />}
      <FormLabel label='First name'>
        <FormField
          autoFocus
          errors={errors}
          name='nameFirst'
          placeholder={showPlaceholder ? 'Tommy' : ''}
          register={register}
        />
      </FormLabel>
      <FormLabel label='Last name'>
        <FormField
          errors={errors}
          name='nameLast'
          placeholder={showPlaceholder ? 'Ryder' : ''}
          register={register}
        />
      </FormLabel>
      <FormLabel label='Email'>
        <FormField
          autoFocus
          errors={errors}
          name='email'
          placeholder={showPlaceholder ? 'Email' : ''}
          regExp={pattern}
          register={register}
        />
      </FormLabel>
      <FormLabel label='Password'>
        <FormField
          errors={errors}
          name='password'
          placeholder={showPlaceholder ? 'Password' : ''}
          register={register}
          type='password'
        />
      </FormLabel>
      <FormLabel label='Repeat Password'>
        <FormField
          errors={errors}
          name='repeatPassword'
          placeholder={showPlaceholder ? 'Password' : ''}
          register={register}
          type='password'
        />
      </FormLabel>
      {birthday && renderBirthday()}
      {passwordError && (
        <Alert content={passwordError.message} context='warning' style={{ color: '#fff' }} />
      )}
      <Checkbox data={CHECKBOX_TERMS} change={change} stacked />
      <Button
        align='right'
        content='Sign up'
        context='primary'
        size='lg'
        disabled={!formState.isValid}
        type='submit'
      />
      <StyledLink>
        Already have an account? <Link to={pathLogin}>Log in</Link>
      </StyledLink>
    </FormForm>
  )
}

const StyledLink = styled.div`
  display: block;
  margin: 1rem 0;
`

Register.propTypes = {
  birthday: bool,
  change: func.isRequired,
  email: string.isRequired,
  dayBirthday: any,
  marketing: bool.isRequired,
  monthBirthday: any,
  nameFirst: string.isRequired,
  nameLast: string.isRequired,
  password: string.isRequired,
  pathLogin: string,
  submit: func.isRequired,
  terms: bool.isRequired,
  yearBirthday: any
}

Register.defaultProps = {
  birthday: false,
  pathLogin: '/account/login'
}
