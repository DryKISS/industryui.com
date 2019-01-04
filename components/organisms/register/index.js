/**
 * Register
 */

// React
import React, { Component, Fragment } from 'react'

// UI
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Link
} from '../../'

// Style
import styled, { withTheme } from 'styled-components'

export const Register = withTheme(
  class Register extends Component {
    constructor (props) {
      super(props)

      this.state = {
        dayBirthday: '',
        email: '',
        firstName: '',
        lastName: '',
        marketing: '',
        monthBirthday: '',
        password: '',
        submittedEmail: '',
        submittedPassword: '',
        terms: '',
        yearBirthday: ''
      }
    }

    // Handle change
    handleChange = (event) => {
      const target = event.target
      const value = target.type === 'checkbox' ? target.checked : target.value
      const name = target.id

      this.setState({
        [name]: value
      })

      console.log('handleChange:', target, name, value)
    }

    // Handle Submit
    handleSubmit = (event) => {
      event.preventDefault()

      const { email, password } = this.state

      this.setState({
        submittedEmail: email,
        submittedPassword: password
      })
    }

    renderBirthday = () => {
      const {
        dayBirthday,
        monthBirthday,
        yearBirthday
      } = this.state

      return (
        <Fragment>
          To sign up, you must be 18 or older. Other people won’t see your birthday.

          <DatePicker
            day={dayBirthday}
            handleChange={this.handleChange}
            id='Birthday'
            month={monthBirthday}
            year={yearBirthday}
          />

        </Fragment>
      )
    }

    render () {
      const {
        birthday,
        email,
        firstName,
        lastName,
        marketing,
        password,
        terms
      } = this.state

      const CHECKBOX_TERMS = [
        {
          id: 'terms',
          label: 'I can confirm I have read and accepted the terms of service and privacy policy',
          required: true,
          isChecked: terms
        },
        {
          id: 'marketing',
          label: 'I want to receive updates via email from Tailwise',
          required: true,
          isChecked: marketing
        }
      ]

      return (
        <Fragment>

          <Form submit={this.handleSubmit}>

            {/* First name */}
            <Input
              label='First name'
              id='firstName'
              handleChange={this.handleChange}
              placeholder='First name'
              value={firstName}
            />

            {/* Last name */}
            <Input
              label='Last name'
              id='lastName'
              handleChange={this.handleChange}
              placeholder='Last name'
              value={lastName}
            />

            {/* Email */}
            <Input
              label='Email address'
              id='email'
              handleChange={this.handleChange}
              placeholder='Email Address'
              type='email'
              value={email}
            />

            {/* Password */}
            <Input
              label='Password'
              id='password'
              handleChange={this.handleChange}
              placeholder='Password'
              type='password'
              value={password}
            />

            {/* Validation - should be hidden */}
            {/* <br />Your password isn’t strong enough. Try making it longer or adding symbols, like !, #, or %.
            <br />Password strength: weak
            <br />Cannot contain your name or email address
            <br />At least 8 characters
            <br />Contains a number or symbol */}

            {birthday && this.renderBirthday()}

            {/* Terms and Marketing */}
            <Checkbox
              data={CHECKBOX_TERMS}
              handleChange={this.handleChange}
              stacked
            />

            {/* Button */}
            <Button secondary type='submit'>Sign up</Button>

            {/* Forgot details link */}
            <StyledLink>

              Already have an account?{' '}

              <Link to='/sign-in'>
                <a>Sign in</a>
              </Link>

            </StyledLink>

          </Form>

        </Fragment>
      )
    }
  }
)

// Style
const StyledLink = styled.div`
  display: block;
  margin: 1rem 0;
`
