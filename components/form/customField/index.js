/**
 * Custom Input
 *
 * @see https://github.com/react-hook-form/react-hook-form-input
 */

// React
import { any, func, string, object, oneOf } from 'prop-types'

// Form
import { RHFInput } from 'react-hook-form-input'

// UI
import { FormError } from '../'

export const CustomField = ({ as, errors, name, mode, register, setValue, ...props }) => {
  return (
    <>
      <RHFInput
        as={as}
        mode={mode}
        name={name}
        register={register}
        setValue={setValue}
        rules={{ required: true }}
        {...props}
      />

      <FormError message={errors[name] ? errors[name].message : ''} />
    </>
  )
}

CustomField.propTypes = {
  as: any, // Select from react-select
  errors: object, // onSubmit	Mode option for triggering validation
  mode: oneOf(['onBlur', 'onChange', 'onSubmit']),
  name: string, // Unique name to register the custom input
  register: func, // (optional when using FormContext) React Hook Form register function
  setValue: func // (optional when using FormContext) React Hook Form setValue function
}

CustomField.defaultProps = {
  mode: 'onChange'
}
