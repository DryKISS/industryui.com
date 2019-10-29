/**
 * Forgot Details
 */

// React
import { func, string } from 'prop-types'

// UI
import { Button, Form, Input, Link } from '../../'

// Style
import styled from 'styled-components'

export const ForgotDetails = ({ email, change, pathLogIn, submit }) => {
  return (
    <Form submit={submit}>
      <Input change={change} id='email' label='Email address' type='email' value={email} />

      <Button content='Send reset link' context='secondary' size='lg' type='submit' />

      <Link to={pathLogIn} passHref>
        <StyledLink>Back to Log In</StyledLink>
      </Link>
    </Form>
  )
}

const StyledLink = styled.a`
  display: block;
  margin: 1rem 0;
`

ForgotDetails.propTypes = {
  change: func.isRequired,
  email: string.isRequired,
  pathLogIn: string,
  submit: func.isRequired
}

ForgotDetails.defaultProps = {
  pathLogIn: '/account/sign-in'
}
