/**
 * Form - WrappedComponent
 */

// UI
import { FormError } from '../'
import { SIZE, Space, Text } from 'components'

export const FieldHOC = ({
  component: Component,
  errors,
  children,
  helperMessage,
  register,
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
        ...(props.regExp && { pattern: new RegExp(props.regExp) })
      })}
      style={{
        display: !show ? 'none' : undefined,
        ...props.style
      }}
      {...props}
    >
      {children}
    </Component>

    {helperMessage && (
      <Space marginTop={SIZE.SM} marginBottom={SIZE.XS}>
        <Text size={SIZE.XS} context='default'>
          {helperMessage}
        </Text>
      </Space>
    )}

    {showError && <FormError message={errors?.message || ''} />}
  </>
)

FieldHOC.defaultProps = {
  errors: {},
  register: () => {},
  show: true,
  showError: false
}
