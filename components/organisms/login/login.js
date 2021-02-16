/**
 * Components - Organisms - Login
 */

// React
import React, { useContext, useState } from 'react'
import { bool, func, object, oneOfType, string } from 'prop-types'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema as schema } from './schema'

// UI
import {
  Alert,
  Button,
  FormField,
  Form,
  FormError,
  FormLabel,
  Link,
  PageHeading,
  Space,
  Text,
  UserContext
} from '../../'

// Style
import styled from 'styled-components'

const ErrMessage = message => <FormError message={message} />

export const Login = ({
  blockSubmitButton,
  forgotPassword,
  heading,
  submit,
  pathForgot,
  pathSignUp,
  remember,
  showLabel,
  showPassword,
  showPlaceholder
}) => {
  const { errors, formState, register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })

  const [error, setError] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const { signIn } = useContext(UserContext)

  const onSubmit = ({ email, password }) => {
    if (!submit) {
      signIn('email', email, password, error => error && setError(error))
    } else {
      submit()
    }
  }

  const defaultOptions = {
    errors: errors,
    register: register
  }

  return (
    <Wrapper>
      <PageHeading center heading={heading} divider={false} />

      {error && <Alert content={error.message} context='warning' />}

      <Form handleSubmit={handleSubmit(onSubmit)}>
        <FormLabel label='Email'>
          <FormField
            {...defaultOptions}
            autoFocus
            name='email'
            placeholder={showPlaceholder ? 'Email' : ''}
          />
          {errors.email && ErrMessage(errors.email.message)}
        </FormLabel>

        <FormLabel label='Password'>
          <FormField
            {...defaultOptions}
            name='password'
            placeholder={showPlaceholder ? 'Password' : ''}
            type={showPass ? 'text' : 'password'}
          />
          {errors.password && ErrMessage(errors.password.message)}
        </FormLabel>

        {showPassword && (
          <ShowPassword align='right' onClick={() => setShowPass(prev => !prev)}>
            {showPass ? 'Hide Password' : 'Show Password'}
          </ShowPassword>
        )}

        <Button
          align='right'
          block={blockSubmitButton}
          content='Log in'
          context='primary'
          disabled={formState.isSubmitting}
          size='lg'
          type='submit'
        />
      </Form>

      {forgotPassword && (
        <>
          <Text align='center'>
            <Link to={pathForgot}>Forgot password?</Link>
          </Text>
          <Space marginBottom='md' />
        </>
      )}

      {pathSignUp && (
        <Text align='center'>
          Don't have an account? <Link to={pathSignUp}>Apply now!</Link>
        </Text>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${({ theme: { LOGIN } }) => LOGIN.background};
  padding: 1rem;
`

const ShowPassword = styled(Text)`
  cursor: pointer;
  font-size: 0.75rem;
  margin-bottom: 1rem;
`

Login.propTypes = {
  blockSubmitButton: bool,
  forgotPassword: bool,
  heading: string,
  submit: func.isRequired,
  pathForgot: string,
  pathSignUp: oneOfType([object, string]),
  remember: string,
  showLabel: bool,
  showPassword: bool,
  showPlaceholder: bool
}

Login.defaultProps = {
  blockSubmitButton: true,
  forgotPassword: true,
  heading: 'Log In',
  pathForgot: '/account/forgot-details',
  pathSignUp: '/account/sign-in',
  remember: '',
  showLabel: true,
  showPassword: true,
  showPlaceholder: false
}
