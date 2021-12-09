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
import schema from './schema'

// UI

import FormError from '../../form/error/error'
import Space from '../../atoms/space/space'
import Text from '../../atoms/text/text'
import UserContext from '../../services/authentication/context'
import Alert from '../../molecules/alert/alert'
import Button from '../../atoms/button/button/button'
import Form from '../../form/form/form'
import FormField from '../../form/field/input'
import FormLabel from '../../form/label/label'
import Link from '../../atoms/link/link'
import PageHeading from '../../molecules/pageHeading/pageHeading'
import Router, { useRouter } from 'next/router'

// Style
import styled from 'styled-components'

const ErrMessage = (message) => <FormError message={message} />

const Login = ({
  blockSubmitButton,
  forgotPassword,
  heading,
  showTitle,
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
  const {
    query: { redirect = '' }
  } = useRouter()
  const onSubmit = ({ email, password }) => {
    if (!submit) {
      signIn('email', email, password, (error) => error && setError(error)).then(() => {
        if (redirect) {
          Router.push(redirect)
        } else {
          Router.push('/dashboard')
        }
      })
    } else {
      submit()
    }
  }

  const defaultOptions = {
    errors: errors,
    register: register
  }

  const handleTogglePassword = () => {
    setShowPass((prev) => !prev)
  }

  return (
    <Wrapper>
      {showTitle && <PageHeading center heading={heading} divider={false} />}

      {error && <Alert content={error.message} context="warning" />}

      <Form handleSubmit={handleSubmit(onSubmit)}>
        <FormLabel label="Email">
          <FormField
            {...defaultOptions}
            autoFocus
            name="email"
            placeholder={showPlaceholder ? 'Email' : ''}
          />
          {errors.email && ErrMessage(errors.email.message)}
        </FormLabel>

        <FormLabel label="Password">
          <FormField
            {...defaultOptions}
            name="password"
            placeholder={showPlaceholder ? 'Password' : ''}
            type={showPass ? 'text' : 'password'}
          />
          {errors.password && ErrMessage(errors.password.message)}
        </FormLabel>

        {showPassword && (
          <ShowPassWrapper onClick={handleTogglePassword}>
            <ShowPassword align="right">
              {showPass ? 'Hide Password' : 'Show Password'}
            </ShowPassword>
          </ShowPassWrapper>
        )}

        <Button
          align="right"
          block={blockSubmitButton}
          content="Log in"
          context="primary"
          disabled={formState.isSubmitting}
          size="lg"
          type="submit"
        />
      </Form>

      {forgotPassword && (
        <>
          <Text align="center">
            <Link to={pathForgot}>Forgot password?</Link>
          </Text>
          <Space marginBottom="md" />
        </>
      )}

      {pathSignUp && (
        <Text align="center">
          Don't have an account? <Link to={pathSignUp}>Apply now!</Link>
        </Text>
      )}
    </Wrapper>
  )
}

const ShowPassWrapper = styled.div``

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
  submit: func,
  pathForgot: string,
  pathSignUp: oneOfType([object, string]),
  remember: string,
  showLabel: bool,
  showPassword: bool,
  showPlaceholder: bool,
  showTitle: bool
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
  showPlaceholder: false,
  showTitle: true
}
export default Login
