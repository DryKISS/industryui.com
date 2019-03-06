/**
 * Password Change
 */

// React
import { func, string } from 'prop-types'

// UI
import { Button, Form, Input } from '../../'

export const EmailChange = ({ change, email, submit }) => {
  const isInvalid = email === ''

  return (
    <Form submit={submit}>

      <Input
        change={change}
        id='email'
        label='Email'
        type='email'
        value={email}
      />

      <div className='text-right'>
        <Button
          content='Submit'
          context='secondary'
          disabled={isInvalid}
          size='lg'
          type='submit'
        />
      </div>

      <p>
        We will send you a re-validation email after this. Please also check
        your spam folder.
      </p>

    </Form>
  )
}

EmailChange.propTypes = {
  change: func.isRequired,
  email: string.isRequired,
  submit: func.isRequired
}
