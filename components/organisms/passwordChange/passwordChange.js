/**
 * Components - Organisms - Password Change
 */

// React
import React, { useState } from 'react'
import { bool, func } from 'prop-types'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { yupResolver } from '@hookform/resolvers/yup'
import { PasswordChangeSchema as schema } from './schema'

// UI
import { Alert } from '../../molecules/alert/components/alert'
import { Button } from '../../atoms/button/button/button'
import { Form } from '../../form/form/form'
import { FormField } from '../../form/field/input'
import { FormLabel } from '../../form/label/label'
import { PageHeading } from '../../molecules/pageHeading/pageHeading'

export const PasswordChange = ({ showPlaceholder, submit }) => {
  const { errors, formState, handleSubmit, register, watch } = useForm({
    resolver: yupResolver(schema),
  })

  const [error] = useState(false)

  const defaultOptions = {
    errors: errors,
    register: register,
    type: 'password',
  }

  return (
    <>
      <PageHeading center heading="Password Change" divider={false} />

      {error && <Alert content={error.message} context="warning" />}

      <Form handleSubmit={handleSubmit(submit)}>
        <FormLabel label="Old password">
          <FormField
            {...defaultOptions}
            name="passwordOld"
            placeholder={showPlaceholder ? 'Old Password' : ''}
          />
        </FormLabel>

        <FormLabel label="New password">
          <FormField
            {...defaultOptions}
            name="password"
            placeholder={showPlaceholder ? 'New Password' : ''}
          />
        </FormLabel>

        <FormLabel label="Confirm password">
          <FormField
            {...defaultOptions}
            name="passwordConfirm"
            placeholder={showPlaceholder ? 'Confirm Password' : ''}
            validate={(v) => v === watch('password')}
          />
        </FormLabel>

        <Button
          block
          content="Submit"
          context="primary"
          disabled={formState.isSubmitting}
          type="submit"
        />
      </Form>
    </>
  )
}

PasswordChange.propTypes = {
  showPlaceholder: bool,
  submit: func.isRequired,
}

PasswordChange.defaultProps = {
  showPlaceholder: false,
}
