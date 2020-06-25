/**
 * Form - WrappedComponent
 */

// UI
import { FormError } from '../'

export const FieldHOC = ({
  component: Component,
  children,
  register,
  validate,
  errors,
  required,
  show,
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
        pattern: props.regExp ? new RegExp(props.regExp) : null,
        validate: validate,
        ...(props.max ? { max: props.max } : null),
        ...(props.min ? { min: props.min } : null),
        ...(props.maxLength ? { maxLength: props.maxLength } : null),
        ...(props.minLength ? { minLength: props.minLength } : null),
        required: required
      })}
      style={{
        display: !show ? 'none' : undefined,
        ...props.style
      }}
      {...props}
    >
      {children}
    </Component>
    {showError && <FormError message={errors[props.name] ? errors[props.name].message : ''} />}
  </>
)

FieldHOC.defaultProps = {
  errors: {},
  register: () => {},
  show: true,
  showError: true
}
