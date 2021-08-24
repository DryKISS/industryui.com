/**
 * Organisms - Email Change
 */

// React
import React, { useState } from 'react'
import { bool, func } from 'prop-types'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema'

// UI
import Alert from '../../molecules/alert/alert'
import Button from '../../atoms/button/button/button'
import FormField from '../../form/field/input'
import Form from '../../form/form/form'
import FormLabel from '../../form/label/label'
import PageHeading from '../../molecules/pageHeading/pageHeading'
import Space from '../../atoms/space/space'
import Text from '../../atoms/text/text'

const EmailChange = ({ showPlaceholder, submit }) => {
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
      <PageHeading center heading="Email Change" divider={false} />

      {error && <Alert content={error.message} context="warning" />}

      <Form handleSubmit={handleSubmit(submit)}>
        <FormLabel label="Email">
          <FormField
            {...defaultOptions}
            autoFocus
            name="email"
            placeholder={showPlaceholder && 'Email'}
          />
        </FormLabel>

        <Button
          block
          content="Submit"
          context="primary"
          disabled={formState.isSubmitting}
          type="submit"
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

export default EmailChange
