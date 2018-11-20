/**
 * Forgot Details
 */

// React
import React, { Component } from 'react'

// UI
import { Button, Form, Input, Link } from '../../'

// Style
import { withTheme } from 'styled-components'

export const ForgotDetails = withTheme(
  class ForgotDetails extends Component {
    constructor (props) {
      super(props)

      this.state = {
        email: '',
        submittedEmail: ''
      }
    }

    // Handle change
    handleChange = (event) => {
      const target = event.target
      this.setState({ [target.id]: target.value })
    }

    // Handle Submit
    handleSubmit = (event) => {
      event.preventDefault()
      const { email } = this.state
      this.setState({ submittedEmail: email })
    }

    render () {
      const { email } = this.state

      return (
        <Form submit={this.handleSubmit}>

          {/* Email */}
          <Input
            label='Email address'
            id='email'
            handleChange={this.handleChange}
            placeholder='Enter email address'
            type='email'
            value={email}
          />

          {/* Button */}
          <Button secondary type='submit'>Send reset link</Button>

          <Link to='/sign-in'>
            <a className='ForgotDetails-link'>Back to Sign In</a>
          </Link>

        </Form>
      )
    }
  }
)

// export default css`
//   .ForgotDetails-link {
//     display: block;
//     margin: 1rem 0;
//   }
//   `
