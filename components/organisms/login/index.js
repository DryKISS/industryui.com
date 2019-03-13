/**
 * Login
 */

// React
import { bool, func, object, oneOfType, string } from 'prop-types'

// UI
import { Button, Checkbox, Form, Input, Link } from '../../'

export const Login = ({
  change,
  email,
  forgotPassword,
  password,
  pathForgot,
  pathSignUp,
  remember,
  submit
}) => {
  const isInvalid = password === '' || email === ''

  const CHECKBOX_REMEMBER = [
    {
      id: 'remember',
      label: 'Remember me',
      isChecked: remember
    }
  ]

  return (
    <Form submit={submit}>

      <Input
        autoFocus
        change={change}
        id='email'
        label='Email address'
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

      <Checkbox
        data={CHECKBOX_REMEMBER}
        change={change}
      />

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
            <a>Forgot Password?</a>
          </Link>
        }

        {pathSignUp &&
          <>
            {' '}|{' '}
            <Link to={pathSignUp}>
              <a>Sign up</a>
            </Link>
          </>
        }

        <p />

      </div>

    </Form>
  )
}

Login.propTypes = {
  change: func.isRequired,
  email: string.isRequired,
  forgotPassword: bool,
  password: string.isRequired,
  pathForgot: string,
  pathSignUp: oneOfType([object, string]),
  remember: string.isRequired,
  submit: func.isRequired
}

Login.defaultProps = {
  forgotPassword: true,
  pathForgot: '/forgot-details'
}
