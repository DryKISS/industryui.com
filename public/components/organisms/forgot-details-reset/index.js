/**
 * Forgot Details Reset
 */

// React
import React, { Component } from 'react'

// UI
import { Button, Form, Input, Link } from '../../'

// Style
import { withTheme } from 'styled-components'

export const ForgotDetailsReset = withTheme(
  class ForgotDetailsReset extends Component {
    constructor (props) {
      super(props)

      this.state = {
        password: '',
        submittedPassword: ''
      }
    }

    handleChange = (event) => {
      const target = event.target
      this.setState({ [target.id]: target.value })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const { password } = this.state
      this.setState({ submittedEmail: password })
    }

    render () {
      const { password } = this.state

      return (
        <Form submit={this.handleSubmit}>

          {/* Password */}
          <Input
            label='New Password'
            id='password'
            handleChange={this.handleChange}
            placeholder='Enter new password'
            type='password'
            value={password}
          />

          <Button secondary type='submit'>Submit</Button>

          <Link to='/sign-in'>
            <a className='ForgotDetailsReset-link'>Back to Sign In</a>
          </Link>

        </Form>
      )
    }
  }
)

//   .ForgotDetailsReset-link {
//     display: block;
//     margin: 1rem 0;
//   }
