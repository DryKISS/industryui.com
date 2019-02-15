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

      <Input
        id='email'
        change={change}
        label='Email address'
        type='email'
        value={email}
      />

      <Button
        content='Send reset link'
        context='secondary'
        size='lg'
        type='submit'
      />

      <Link to={pathLogIn} passHref>
        <StyledLink>Back to Log In</StyledLink>
      </Link>

    </Form>
  )
}

ForgotDetails.propTypes = {
  change: func.isRequired,
  email: string.isRequired,
  pathLogIn: string,
  submit: func.isRequired
}

ForgotDetails.defaultProps = {
  pathLogIn: '/sign-in'
}

const StyledLink = styled.a`
  display: block;
  margin: 1rem 0;
`
