/**
 * Password Change
 */

// React
import React, { useState } from 'react'
import { bool } from 'prop-types'

// useForm
import useForm from 'react-hook-form'

// UI
import { Alert, Button, FormField, FormForm, PageHeading } from '../../'

export const PasswordChange = ({ showPlaceholder }) => {
  const { errors, formState, handleSubmit, register, watch } = useForm({ mode: 'onChange' })
  const [error] = useState(false)

  const submit = data => {
    const { email } = data
    console.log(email)
  }

  return (
    <>
      <PageHeading center heading='Password Change' divider={false} />

      {error && <Alert content={error.message} context='warning' style={{ color: '#fff' }} />}

      <FormForm handleSubmit={handleSubmit(submit)}>
        <FormField
          errors={errors}
          name='passwordOld'
          placeholder={showPlaceholder ? 'Old Password' : ''}
          register={register}
          required='This is required'
          type='password'
        />

        <FormField
          errors={errors}
          name='password'
          placeholder={showPlaceholder ? 'New Password' : ''}
          register={register}
          required='This is required'
          type='password'
        />

        <FormField
          errors={errors}
          name='passwordConfirm'
          placeholder={showPlaceholder ? 'Confirm Password' : ''}
          register={register}
          required='This is required'
          type='password'
          validate={v => v === watch('password')}
        />

        <Button
          block
          content='Submit'
          context='primary'
          disabled={!formState.isValid}
          size='lg'
          type='submit'
        />
      </FormForm>
    </>
  )
}

PasswordChange.propTypes = {
  showPlaceholder: bool
}
