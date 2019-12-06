/**
 * Login
 * Standard login view allowing for a user to sign into the website through email and password.
 */

// React
import React, { useState } from 'react'
import { bool, func, object, oneOfType, string } from 'prop-types'

// useForm
import useForm from 'react-hook-form'

// UI
import {
  Card,
  CardBody,
  Button,
  Checkbox,
  FormField,
  FormForm,
  FormLabel,
  Link,
  PageHeading,
  Alert
} from '../../../'

// Style
import styled from 'styled-components'

export const Login = ({
  blockSubmitButton,
  change,
  email,
  forgotPassword,
  heading,
  password,
  pathForgot,
  pathSignUp,
  remember,
  showLabel,
  showPassword,
  showPlaceholder,
  submit,
  submitLoading,
  submitResult
}) => {
  const { errors, handleSubmit, register } = useForm()
  const [showPass, setShowPass] = useState(false)
  // const isInvalid = password === '' || email === ''
  let CHECKBOX_REMEMBER = null

  if (remember) {
    CHECKBOX_REMEMBER = [
      {
        id: 'remember',
        label: 'Remember me',
        isChecked: remember
      }
    ]
  }

  const pattern =
    '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'

  return (
    <StyledContainer>
      <Card bordered shadow>
        <CardBody>
          <PageHeading center heading={heading} divider={false} />

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
                autoFocus
                errors={errors}
                name='password'
                placeholder={showPlaceholder ? 'Password' : ''}
                regExp={pattern}
                register={register}
                required='This is required'
                type={showPass ? 'text' : 'password'}
              />
            </FormLabel>

            {/* <Input
              change={change}
              id='email'
              label={showLabel ? 'Email' : ''}
              type='email'
              value={email}
              placeholder={showPlaceholder ? 'Email' : ''}
              style={{ marginBottom: !showLabel && '1rem' }}
            />

            <Input
              change={change}
              id='password'
              label={showLabel ? 'Password' : ''}
              type={showPass ? 'text' : 'password'}
              value={password}
              placeholder={showPlaceholder ? 'Password' : ''}
              style={{ marginBottom: !showLabel && '1rem' }}
            /> */}

            {showPassword && (
              <ShowPassword onClick={() => setShowPass(prev => !prev)}>
                <a>{showPass ? 'Hide Password' : 'Show Password'}</a>
              </ShowPassword>
            )}

            {submitResult.message && (
              <Alert content={submitResult.message} context={submitResult.type} />
            )}

            {remember && <Checkbox change={change} data={CHECKBOX_REMEMBER} />}

            <div className='text-right'>
              <Button
                align='right'
                block={blockSubmitButton}
                content='Log in'
                context='primary'
                // disabled={isInvalid || submitLoading}
                disabled={submitLoading}
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
          <br />
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
  text-align: right;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`

const ForgotPasswordWrapper = styled.div`
  margin-top: 1rem;
  text-align: center;
`

Login.propTypes = {
  blockSubmitButton: bool,
  change: func.isRequired,
  email: string.isRequired,
  forgotPassword: bool,
  heading: string,
  password: string.isRequired,
  pathForgot: string,
  pathSignUp: oneOfType([object, string]),
  remember: string,
  showLabel: bool,
  showPassword: bool,
  showPlaceholder: bool,
  submit: func.isRequired,
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
  submitResult: {
    type: '',
    message: ''
  }
}
