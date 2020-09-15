/**
 * Form - WrappedComponent
 */

// UI
import { FormError } from '../'

export const FieldHOC = ({
  component: Component,
  errors,
  children,
  register,
  required,
  show,
  showError,
  validate,
  ...props
}) => (
  <>
    <Component
      aria-label={props.name}
      errors={errors?.message}
      key={props.name}
      name={props.name}
      ref={register({
        validate: validate,
        ...(props.max && { max: props.max }),
        ...(props.min && { min: props.min }),
        ...(props.maxLength && { maxLength: props.maxLength }),
        ...(props.minLength && { minLength: props.minLength }),
        ...(props.regExp && { pattern: new RegExp(props.regExp) }),
        required: required
      })}
      required={required}
      style={{
        display: !show ? 'none' : undefined,
        ...props.style
      }}
      {...props}
    >
      {children}
    </Component>
    {showError && <FormError message={errors?.message || ''} />}
  </>
)

FieldHOC.defaultProps = {
  errors: {},
  register: () => {},
  show: true,
  showError: false
}
