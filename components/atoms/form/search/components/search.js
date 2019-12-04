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
        <Input
          change={change}
          id='query'
          placeholder={placeholder}
          required={false}
          type={type}
          value={query}
        />

        {prependSearchIcon && (
          <InputGroupAddon addonType='prepend'>
            <Icon context='dark' icon='search' size='2x' />
          </InputGroupAddon>
        )}

        {appendSearchIcon && (
          <InputGroupAddon addonType='append'>
            <Icon context='dark' icon='search' size='2x' />
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

  /* Disable browser default search reset icon */
  > input::-webkit-search-decoration,
  > input::-webkit-search-cancel-button,
  > input::-webkit-search-results-button,
  > input::-webkit-search-results-decoration {
    display: none;
  }
`

const StyledClose = styled(Close)`
  position: absolute;
  right: 118px;
  top: 28px;
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
