/**
 * Search
 */

// React
import { bool, func, object, string, oneOf } from 'prop-types'

// UI
import { Button, FormField, Icon, InputGroup, InputGroupAddon } from '../../'

export const Search = ({
  appendSearchButton,
  appendSearchIcon,
  errors,
  label,
  placeholder,
  prependSearchIcon,
  prefix,
  register,
  type
}) => {
  return (
    <InputGroup>
      {prependSearchIcon && (
        <InputGroupAddon addonType='prepend' text>
          <Icon icon='search' prefix={prefix} />
        </InputGroupAddon>
      )}

      <FormField
        errors={errors}
        name='query'
        placeholder={placeholder}
        register={register}
        type={type}
      />

      {appendSearchIcon && (
        <InputGroupAddon addonType='append' text>
          <Icon icon='search' prefix={prefix} />
        </InputGroupAddon>
      )}

      {appendSearchButton && (
        <InputGroupAddon addonType='append'>
          <Button content={label || 'Search'} context='dark' size='lg' type='submit' />
        </InputGroupAddon>
      )}
    </InputGroup>
  )
}

Search.propTypes = {
  appendSearchButton: bool,
  appendSearchIcon: bool,
  errors: object.isRequired,
  label: string,
  placeholder: string,
  prependSearchIcon: bool,
  register: func.isRequired,
  type: oneOf(['search', 'text'])
}

Search.defaultProps = {
  appendSearchButton: false,
  appendSearchIcon: false,
  prependSearchIcon: false,
  type: 'search'
}
