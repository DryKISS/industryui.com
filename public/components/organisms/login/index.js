/**
 * Login
 */

// React
import React, { Component } from 'react'
import { bool, func, string } from 'prop-types'

// UI
import {
  Button,
  Checkbox,
  Form,
  Input,
  Link
} from '../../'

export class Login extends Component {
  static propTypes = {
    email: string.isRequired,
    forgotPassword: bool,
    handleChange: func.isRequired,
    handleSubmit: func.isRequired,
    password: string.isRequired,
    pathForgot: string,
    pathSignUp: string,
    remember: string.isRequired
  }

  static defaultProps = {
    forgotPassword: true,
    pathForgot: '/forgot-details',
    pathSignUp: '/sign-up'
  }

  render () {
    const {
      email,
      forgotPassword,
      handleChange,
      handleSubmit,
      password,
      pathForgot,
      pathSignUp,
      remember
    } = this.props

    const isInvalid = password === '' || email === ''

    const CHECKBOX_REMEMBER = [
      {
        id: 'remember',
        label: 'Remember me',
        isChecked: remember
      }
    ]

    return (
      <Form submit={handleSubmit}>

        {/* Email */}
        <Input
          autoFocus
          handleChange={handleChange}
          id='email'
          label='Email address'
          placeholder='Email Address'
          type='email'
          value={email}
        />

        {/* Password */}
        <Input
          handleChange={handleChange}
          id='password'
          label='Password'
          placeholder='Password'
          type='password'
          value={password}
        />

        {/* Remember me */}
        <Checkbox
          data={CHECKBOX_REMEMBER}
          handleChange={handleChange}
        />

        <Button
          content='Log in'
          context='primary'
          disabled={isInvalid}
          size='lg'
          type='submit'
        />

        <p />

        {/* Forgot password */}
        {forgotPassword &&
          <Link to={pathForgot}>
            <a>Forgot Password</a>
          </Link>
        }

        {' '}|{' '}

        <Link to={pathSignUp}>
          <a>Sign up</a>
        </Link>

      </Form>
    )
  }
}
