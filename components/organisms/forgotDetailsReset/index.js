/**
 * Forgot Details Reset
 */

// UI
import { Button, Form, Input, Link } from '../../'

export const ForgotDetailsReset = ({ password }) => {
  const change = (event) => {
    const target = event.target
    this.setState({ [target.id]: target.value })
  }

  const submit = (event) => {
    event.preventDefault()
    const { password } = this.state
    this.setState({ submittedEmail: password })
  }

  return (
    <Form submit={submit}>

      <Input
        label='New Password'
        id='password'
        change={change}
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

// .ForgotDetailsReset-link {
//   display: block;
//   margin: 1rem 0;
// }
