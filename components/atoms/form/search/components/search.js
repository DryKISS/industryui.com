/**
 * Search
 */

// React
import { bool, func, string, oneOf } from 'prop-types'

// UI
import { Button, Form, Icon, Input, useChange } from '../../../../'
import { InputGroup, InputGroupAddon } from '../../'
import { Close } from '../../../../atoms/close'

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
  showReset,
  type,
  value
}) => {
  const INITIAL_STATE = {
    query: value || ''
  }

  const [change, form, setForm] = useChange(INITIAL_STATE)
  const { query } = form

  const handleSearchReset = () => {
    setForm({
      query: ''
    })
    onSearch && onSearch('')
  }

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

        {showReset && query !== '' && <StyledClose click={handleSearchReset} context='dark' />}

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

const StyledClose = styled(Close)`
  margin: 0;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 25%;
`

Search.propTypes = {
  appendSearchButton: bool,
  appendSearchIcon: bool,
  className: string,
  label: string,
  onSearch: func.isRequired,
  placeholder: string,
  prependSearchIcon: bool,
  showReset: bool,
  type: oneOf(['search', 'text']),
  value: string
}

Search.defaultProps = {
  showReset: true,
  type: 'search'
}
