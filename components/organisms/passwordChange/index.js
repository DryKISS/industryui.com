/**
 * Password Change
 */

// React
import { func, string } from 'prop-types'

// UI
import { Button, Form, Input } from '../../'

export const PasswordChange = ({
  change,
  password,
  passwordConfirm,
  passwordOld,
  submit
}) => {
  const isInvalid = password !== passwordConfirm || password === ''

  return (
    <Form submit={submit}>

      <Input
        change={change}
        id='passwordOld'
        label='Old password'
        type='password'
        value={passwordOld}
      />

      <Input
        change={change}
        id='password'
        label='New password'
        type='password'
        value={password}
      />

      <Input
        change={change}
        id='passwordConfirm'
        label='Confirm password'
        type='password'
        value={passwordConfirm}
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

    </Form>
  )
}

PasswordChange.propTypes = {
  change: func.isRequired,
  password: string.isRequired,
  passwordConfirm: string.isRequired,
  passwordOld: string.isRequired,
  submit: func.isRequired
}
