/**
 * Password Change
 */

// React
import React, { useState } from 'react'
import { bool } from 'prop-types'

// UI
import { Alert, Button, FormField, Form, FormLabel, PageHeading, useForm } from '../../'

export const PasswordChange = ({ showPlaceholder }) => {
  const { errors, formState, handleSubmit, register, watch } = useForm({ mode: 'onChange' })
  const [error] = useState(false)

  const submit = data => {}

  return (
    <>
      <PageHeading center heading='Password Change' divider={false} />

      {error && <Alert content={error.message} context='warning' style={{ color: '#fff' }} />}

      <Form handleSubmit={handleSubmit(submit)}>
        <FormLabel label='Old password'>
          <FormField
            errors={errors}
            name='passwordOld'
            placeholder={showPlaceholder ? 'Old Password' : ''}
            register={register}
            type='password'
          />
        </FormLabel>

        <FormLabel label='New password'>
          <FormField
            errors={errors}
            name='password'
            placeholder={showPlaceholder ? 'New Password' : ''}
            register={register}
            type='password'
          />
        </FormLabel>

        <FormLabel label='Confirm password'>
          <FormField
            errors={errors}
            name='passwordConfirm'
            placeholder={showPlaceholder ? 'Confirm Password' : ''}
            register={register}
            type='password'
            validate={v => v === watch('password')}
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
      </Form>
    </>
  )
}

PasswordChange.propTypes = {
  showPlaceholder: bool
}
