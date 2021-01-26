/**
 * Organisms - Email Change
 */

// React
import { useState } from 'react'
import { bool, func } from 'prop-types'

// UI
import {
  Alert,
  Button,
  FormField,
  Form,
  FormLabel,
  PageHeading,
  Space,
  Text,
  useForm,
  yupResolver
} from '../../'

import { EmailChangeSchema as schema } from './schema'

export const EmailChange = ({ showPlaceholder, submit }) => {
  const { errors, formState, handleSubmit, register } = useForm({
    resolver: yupResolver(schema)
  })

  const [error] = useState(false)

  const defaultOptions = {
    errors: errors,
    register: register
  }

  return (
    <>
      <PageHeading center heading='Email Change' divider={false} />

      {error && <Alert content={error.message} context='warning' />}

      <Form handleSubmit={handleSubmit(submit)}>
        <FormLabel label='Email'>
          <FormField
            {...defaultOptions}
            autoFocus
            name='email'
            placeholder={showPlaceholder && 'Email'}
          />
        </FormLabel>

        <Button
          block
          content='Submit'
          context='primary'
          disabled={formState.isSubmitting}
          type='submit'
        />

        <Space />

        <Text>
          We will send you a re-validation email after this. Please also check your spam folder.
        </Text>
      </Form>
    </>
  )
}

EmailChange.propTypes = {
  showPlaceholder: bool,
  submit: func.isRequired
}

EmailChange.defaultProps = {
  showPlaceholder: false
}
