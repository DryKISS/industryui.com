/**
 * Search
 */

// React
import { bool, func, string, oneOf } from 'prop-types'

// UI
import { Button, Form, Icon, Input, InputGroup, InputGroupAddon, useForm } from '../../../'

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
  const initialState = {
    query: value || ''
  }

  const { change, form, clear } = useForm(initialState)
  const { query } = form

  const handleClear = id => {
    clear(id)
    onSearch('')
  }

  return (
    <Form className={className} submit={() => onSearch(query)}>
      <InputGroup>
        {prependSearchIcon && (
          <InputGroupAddon addonType='prepend' text>
            <Icon icon='search' />
          </InputGroupAddon>
        )}

        <Input
          change={change}
          clear={handleClear}
          id='query'
          placeholder={placeholder}
          required={false}
          type={type}
          value={query}
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
