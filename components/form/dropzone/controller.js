/**
 * Form - Dropzone - Controller
 */

// React
import React from 'react'
import { bool, object, string } from 'prop-types'

// React Hook Form
import { Controller } from 'react-hook-form'

// UI
import Dropzone from './dropzone'

const DropzoneController = ({ control, errors, name, ...props }) => {
  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({ field: { onChange } }) => {
        return (
          <Dropzone
            errors={errors[name]}
            onChange={(e) => onChange(e.target.files[0])}
            {...props}
          />
        )
      }}
      {...props}
    />
  )
}

DropzoneController.propTypes = {
  accept: string,
  control: object,
  disabled: bool,
  errors: object,
  multiple: bool,
  name: string
}

DropzoneController.defaultProps = {
  accept: 'image/*',
  disabled: false,
  multiple: false,
  name: 'dropzone'
}

export default DropzoneController
