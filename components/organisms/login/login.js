/**
 * Login
 * Standard login view allowing for a user to sign into the website through email and password.
 */

// React
import React, { useContext, useState } from 'react'
import { bool, object, oneOfType, string } from 'prop-types'

// useForm
import useForm from 'react-hook-form'

// UI
import {
  Alert,
  Button,
  Card,
  CardBody,
  // Checkbox,
  FormField,
  FormForm,
  FormLabel,
  Link,
  PageHeading,
  UserContext
} from '../../../'

// Style
import styled from 'styled-components'

export const Login = ({
  blockSubmitButton,
  forgotPassword,
  heading,
  pathForgot,
  pathSignUp,
  remember,
  showLabel,
  showPassword,
  showPlaceholder,
  submitLoading,
  submitResult
}) => {
  const { errors, formState, handleSubmit, register } = useForm({ mode: 'onBlur' })
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState(false)
  const { signIn } = useContext(UserContext)

  const submit = data => {
    const { email, password } = data
    signIn('email', email, password, error => error && setError(error))
  }

  // let CHECKBOX_REMEMBER = null

  // if (remember) {
  //   CHECKBOX_REMEMBER = [
  //     {
  //       id: 'remember',
  //       label: 'Remember me',
  //       isChecked: remember
  //     }
  //   ]
  // }

  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return (
    <StyledContainer>
      <Card bordered shadow>
        <CardBody>
          <PageHeading center heading={heading} divider={false} />

          {error && <Alert content={error.message} context='warning' style={{ color: '#fff' }} />}

          <FormForm handleSubmit={handleSubmit(submit)}>
            <FormLabel label='Email'>
              <FormField
                autoFocus
                errors={errors}
                name='email'
                placeholder={showPlaceholder ? 'Email' : ''}
                regExp={pattern}
                register={register}
                required='This is required'
              />
            </FormLabel>

            <FormLabel label='Password'>
              <FormField
                errors={errors}
                name='password'
                placeholder={showPlaceholder ? 'Password' : ''}
                register={register}
                required='This is required'
                type={showPass ? 'text' : 'password'}
              />
            </FormLabel>

            {showPassword && (
              <ShowPassword onClick={() => setShowPass(prev => !prev)}>
                <a>{showPass ? 'Hide Password' : 'Show Password'}</a>
              </ShowPassword>
            )}

            {/* {remember && <Checkbox change={change} data={CHECKBOX_REMEMBER} />} */}

            <div className='text-right'>
              <Button
                align='right'
                block={blockSubmitButton}
                content='Log in'
                context='primary'
                disabled={!formState.isValid}
                size='lg'
                type='submit'
              />

              {forgotPassword && (
                <ForgotPasswordWrapper>
                  <Link to={pathForgot}>
                    <a>Forgot password?</a>
                  </Link>
                </ForgotPasswordWrapper>
              )}
            </div>
          </FormForm>
        </CardBody>
      </Card>

      {pathSignUp && (
        <>
          <p className='text-center'>
            Don't have an account?{' '}
            <Link to={pathSignUp}>
              <a>Apply now!</a>
            </Link>
          </p>
        </>
      )}
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 3rem 0;
`

const ShowPassword = styled.div`
  cursor: pointer;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  text-align: right;
`

const ForgotPasswordWrapper = styled.div`
  margin-top: 1rem;
  text-align: center;
`

Login.propTypes = {
  blockSubmitButton: bool,
  forgotPassword: bool,
  heading: string,
  pathForgot: string,
  pathSignUp: oneOfType([object, string]),
  remember: string,
  showLabel: bool,
  showPassword: bool,
  showPlaceholder: bool,
  submitLoading: bool,
  submitResult: object
}

Login.defaultProps = {
  blockSubmitButton: false,
  forgotPassword: true,
  heading: 'Log In',
  pathForgot: '/account/forgot-details',
  showLabel: true,
  showPassword: false,
  showPlaceholder: false,
  submitLoading: true,
  submitResult: {
    type: '',
    message: ''
  }
}
