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

// Style
import { withTheme } from 'styled-components'

export const Login = withTheme(
  class Login extends Component {
    static propTypes = {
      email: string.isRequired,
      forgotPassword: bool,
      handleChange: func.isRequired,
      handleSubmit: func.isRequired,
      password: string.isRequired,
      remember: string.isRequired
    }

    static defaultProps = {
      forgotPassword: false
    }

    renderForgotPassword = () => {
      const { forgotPassword } = this.props

      return (
        forgotPassword &&
          <Link to='/forgot-details'>
            <a>Forgot Password</a>
          </Link>
      )
    }

    render () {
      const {
        email,
        handleChange,
        handleSubmit,
        password,
        remember
      } = this.props

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

          { this.renderForgotPassword() }

          <Button context='primary' type='submit'>Log in</Button>

          {/* Sign up */}
          <Link to='/sign-up'>
            <a>Sign up</a>
          </Link>

        </Form>
      )
    }
  }
)
