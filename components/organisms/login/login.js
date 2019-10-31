/**
 * Login
 * Standard login view allowing for a user to sign into the website through
 * email and password.
 */

// React
import React, { useState } from 'react'
import { bool, func, object, oneOfType, string } from 'prop-types'

// UI
import { Card, CardBody, Button, Checkbox, Form, Input, Link, PageHeading } from '../../'

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
  const [showPass, setShowPass] = useState(false)
  const isInvalid = password === '' || email === ''
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

  return (
    <StyledContainer>
      <Card bordered shadow>
        <CardBody>
          <PageHeading center heading={heading} divider={false} />

          <Form submit={submit}>
            <Input
              autoFocus
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
            />

            {showPassword && (
              <p onClick={() => setShowPass(prev => !prev)}>
                {showPass ? 'Hide Password' : 'Show Password'}
              </p>
            )}

            {submitResult && <p>{submitResult}</p>}

            {remember && <Checkbox change={change} data={CHECKBOX_REMEMBER} />}

            <div className='text-right'>
              <Button
                align='right'
                block={blockSubmitButton}
                content='Log in'
                context='primary'
                disabled={isInvalid || submitLoading}
                size='lg'
                type='submit'
              />

              <p />

              {forgotPassword && (
                <Link to={pathForgot}>
                  <a>Don't know your password?</a>
                </Link>
              )}
            </div>
          </Form>
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
  submitResult: string
}

Login.defaultProps = {
  blockSubmitButton: false,
  forgotPassword: true,
  heading: 'Log In',
  pathForgot: '/account/forgot-details',
  showLabel: true,
  showPassword: false,
  showPlaceholder: false
}
