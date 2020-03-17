/**
 * Custom Input
 */

// React
import { any, func, string, object } from 'prop-types'

// Form
import { RHFInput } from 'react-hook-form-input'

// UI
import { FormError } from '../'

export const CustomField = ({ as, errors, name, register, setValue, ...props }) => {
  return (
    <>
      <RHFInput
        as={as}
        errors={errors}
        name={name}
        register={register}
        setValue={setValue}
        {...props}
      />

      <FormError message={errors[name] ? errors[name].message : ''} />
    </>
  )
}

CustomField.propTypes = {
  as: any,
  errors: object,
  name: string,
  register: func,
  setValue: func
}

CustomField.defaultProps = {}
