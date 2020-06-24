/**
 * Search
 */

// React
import { bool, func, string, oneOf } from 'prop-types'

// Form
import { useForm } from 'react-hook-form'

// UI
import { Button, Form, FormField, Icon, InputGroup, InputGroupAddon } from '../../'

export const Search = ({
  appendSearchButton,
  appendSearchIcon,
  className,
  label,
  onSearch,
  placeholder,
  prependSearchIcon,
  type,
  value
}) => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      query: value
    }
  })

  const onSubmit = data => {
    onSearch(data.query)
  }

  return (
    <Form className={className} handleSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        {prependSearchIcon && (
          <InputGroupAddon addonType='prepend' text>
            <Icon icon='search' />
          </InputGroupAddon>
        )}

        <FormField
          register={register}
          name='query'
          placeholder={placeholder}
          required={false}
          type={type}
        />

        {appendSearchIcon && (
          <InputGroupAddon addonType='append' text>
            <Icon icon='search' />
          </InputGroupAddon>
        )}

        {appendSearchButton && (
          <InputGroupAddon addonType='append'>
            <Button content={label || 'Search'} context='dark' size='lg' type='submit' />
          </InputGroupAddon>
        )}
      </InputGroup>
    </Form>
  )
}

Search.propTypes = {
  appendSearchButton: bool,
  appendSearchIcon: bool,
  className: string,
  label: string,
  onSearch: func.isRequired,
  placeholder: string,
  prependSearchIcon: bool,
  type: oneOf(['search', 'text']),
  value: string
}

Search.defaultProps = {
  showReset: true,
  type: 'search'
}
