/**
 * Email Change
 */

// React
import { useState } from 'react'
import { bool } from 'prop-types'

// UI
import { Alert, Button, FormField, Form, FormLabel, PageHeading, useForm } from '../../'

export const EmailChange = ({ showPlaceholder }) => {
  const { errors, formState, handleSubmit, register } = useForm({ mode: 'onChange' })
  const [error] = useState(false)

  const submit = data => {}

  return (
    <>
      <PageHeading center heading='Email Change' divider={false} />

      {error && <Alert content={error.message} context='warning' />}

      <Form handleSubmit={handleSubmit(submit)}>
        <FormLabel label='Email'>
          <FormField
            autoFocus
            errors={errors}
            name='email'
            placeholder={showPlaceholder ? 'Email' : ''}
            register={register}
          />
        </FormLabel>

        <Button
          block
          content='Submit'
          context='primary'
          disabled={!formState.isValid}
          size='lg'
          type='submit'
        />

        <p>
          We will send you a re-validation email after this. Please also check your spam folder.
        </p>
      </Form>
    </>
  )
}

EmailChange.propTypes = {
  showPlaceholder: bool
}

EmailChange.defaultProps = {
  showPlaceholder: false
}
