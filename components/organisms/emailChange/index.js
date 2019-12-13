/**
 * Email Change
 */

// React
import React, { useState } from 'react'
import { bool } from 'prop-types'

// useForm
import useForm from 'react-hook-form'

// UI
import { Alert, Button, FormField, FormForm, FormLabel, PageHeading } from '../../'

export const EmailChange = ({ showPlaceholder }) => {
  const { errors, formState, handleSubmit, register } = useForm({ mode: 'onChange' })
  const [error] = useState(false)

  const submit = data => {
    const { email } = data
    console.log(email)
  }

  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return (
    <>
      <PageHeading center heading='Email Change' divider={false} />

      {error && <Alert content={error.message} context='warning' style={{ color: '#fff' }} />}

      <FormForm handleSubmit={handleSubmit(submit)}>
        <FormLabel label='Email'>
          <FormField
            autoFocus
            errors={errors}
            name='email'
            placeholder={showPlaceholder ? 'Email' : ''}
            regExp={pattern}
            register={register}
            required='This is required'
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
      </FormForm>
    </>
  )
}

EmailChange.propTypes = {
  showPlaceholder: bool
}

EmailChange.defaultProps = {
  showPlaceholder: false
}
