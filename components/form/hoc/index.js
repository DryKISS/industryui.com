/**
 * Form - WrappedComponent
 */

// UI
import { FormError } from '../'

export const FieldHOC = ({
  component: Component,
  children,
  register,
  required,
  validate,
  errors,
  showError,
  ...props
}) => (
  <>
    <Component
      aria-label={props.name}
      errors={errors[props.name]}
      key={props.name}
      name={props.name}
      ref={register({
        required: required,
        pattern: props.regExp ? new RegExp(props.regExp) : null,
        validate: validate,
        ...(props.max ? { max: props.max } : null),
        ...(props.min ? { min: props.min } : null),
        ...(props.maxLength ? { maxLength: props.maxLength } : null),
        ...(props.minLength ? { minLength: props.minLength } : null)
      })}
      {...props}
    >
      {children}
    </Component>
    {showError && <FormError message={errors[props.name] ? errors[props.name].message : ''} />}
  </>
)

FieldHOC.defaultProps = {
  errors: {},
  showError: true
}
