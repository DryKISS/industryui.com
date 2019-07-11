/**
 * Login
 */

// React
import { bool, func, object, oneOfType, string } from 'prop-types'

// UI
import {
  Card,
  CardBody,
  Button,
  Checkbox,
  Form,
  Input,
  Link,
  PageHeading
} from '../../'

// Style
import styled from 'styled-components'

export const Login = ({
  change,
  email,
  forgotPassword,
  heading,
  password,
  pathForgot,
  pathSignUp,
  remember,
  submit
}) => {
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
              label='Email'
              type='email'
              value={email}
            />

            <Input
              change={change}
              id='password'
              label='Password'
              type='password'
              value={password}
            />

            {remember &&
              <Checkbox
                change={change}
                data={CHECKBOX_REMEMBER}
              />
            }

            <div className='text-right'>
              <Button
                align='right'
                content='Log in'
                context='primary'
                disabled={isInvalid}
                size='lg'
                type='submit'
              />

              <p />

              {forgotPassword &&
                <Link to={pathForgot}>
                  <a>Don't know your password?</a>
                </Link>
              }
            </div>

          </Form>

        </CardBody>
      </Card>

      {pathSignUp &&
        <>
          <br />
          <p className='text-center'>
            Don't have an account?{' '}
            <Link to={pathSignUp}>
              <a>Apply now!</a>
            </Link>
          </p>
        </>
      }

    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 3rem 0;
`

Login.propTypes = {
  change: func.isRequired,
  email: string.isRequired,
  forgotPassword: bool,
  heading: string,
  password: string.isRequired,
  pathForgot: string,
  pathSignUp: oneOfType([object, string]),
  remember: string,
  submit: func.isRequired
}

Login.defaultProps = {
  forgotPassword: true,
  heading: 'Log In',
  pathForgot: '/forgot-details'
}
