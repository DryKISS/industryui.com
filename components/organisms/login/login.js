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

// Style
import styled from 'styled-components'

// UI
import Error from '../../form/error/error'
import Space from '../../atoms/space/space'
import Text from '../../atoms/text/text'
import UserContext from '../../services/authentication/context'
import Alert from '../../molecules/alert/alert'
import Button from '../../atoms/button/button/button'
import Form from '../../form/form/form'
import Input from '../../form/input/input'
import Label from '../../form/label/label'
import Link from '../../atoms/link/link'
import PageHeading from '../../molecules/pageHeading/pageHeading'

const ErrMessage = (message) => <Error message={message} />

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

  const onSubmit = ({ email, password }) => {
    if (!submit) {
      signIn('email', email, password, (error) => error && setError(error))
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
        <Label label="Email">
          <Input
            {...defaultOptions}
            autoFocus
            name="email"
            placeholder={showPlaceholder ? 'Email' : ''}
          />
          {errors.email && ErrMessage(errors.email.message)}
        </Label>

        <Label label="Password">
          <Input
            {...defaultOptions}
            name="password"
            placeholder={showPlaceholder ? 'Password' : ''}
            type={showPass ? 'text' : 'password'}
          />
          {errors.password && ErrMessage(errors.password.message)}
        </Label>

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
