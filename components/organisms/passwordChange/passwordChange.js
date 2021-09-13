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
import schema from './schema'

// UI
import Alert from '../../molecules/alert/alert'
import Button from '../../atoms/button/button/button'
import Form from '../../form/form/form'
import Input from '../../form/input/input'
import Label from '../../form/label/label'
import PageHeading from '../../molecules/pageHeading/pageHeading'

const PasswordChange = ({ showPlaceholder, submit }) => {
  const { errors, formState, handleSubmit, register, watch } = useForm({
    resolver: yupResolver(schema)
  })

  const [error] = useState(false)

  const defaultOptions = {
    errors: errors,
    register: register,
    type: 'password'
  }

  return (
    <>
      <PageHeading center heading="Password Change" divider={false} />

      {error && <Alert content={error.message} context="warning" />}

      <Form handleSubmit={handleSubmit(submit)}>
        <Label label="Old password">
          <Input
            {...defaultOptions}
            name="passwordOld"
            placeholder={showPlaceholder ? 'Old Password' : ''}
          />
        </Label>

        <Label label="New password">
          <Input
            {...defaultOptions}
            name="password"
            placeholder={showPlaceholder ? 'New Password' : ''}
          />
        </Label>

        <Label label="Confirm password">
          <Input
            {...defaultOptions}
            name="passwordConfirm"
            placeholder={showPlaceholder ? 'Confirm Password' : ''}
            validate={(v) => v === watch('password')}
          />
        </Label>

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
  submit: func.isRequired
}

PasswordChange.defaultProps = {
  showPlaceholder: false
}

export default PasswordChange
