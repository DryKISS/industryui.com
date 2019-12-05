/**
 * Search
 */

// React
import { bool, func, string, oneOf } from 'prop-types'

// UI
import { Button, Form, Icon, Input, useForm } from '../../../../'
import { InputGroup, InputGroupAddon } from '../../'

// Style
import styled from 'styled-components'

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

  return (
    <Form className={className} submit={() => onSearch(query)}>
      <StyledSearch>
        {prependSearchIcon && (
          <InputGroupAddon addonType='prepend' text>
            <Icon icon='search' />
          </InputGroupAddon>
        )}

        <Input
          change={change}
          clear={clear}
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
      </StyledSearch>
    </Form>
  )
}

const StyledSearch = styled(InputGroup)`
  display: flex;
  position: relative;

  > button {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  > input {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
`

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
