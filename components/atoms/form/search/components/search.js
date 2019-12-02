/**
 * Search
 *
 */

// React
import { bool, func, string, oneOf } from 'prop-types'

// UI
import { Button, useChange, Form, Input } from '../../../../'
import { Close } from '../../../../atoms/close'

// Style
import styled from 'styled-components'

export const Search = ({ className, label, onSearch, placeholder, showReset, type, value }) => {
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
        {showReset && query !== '' && <StyledClose click={handleSearchReset} context='dark' />}
        <Button content={label || 'Search'} context='dark' size='lg' type='submit' />
      </StyledSearch>
    </Form>
  )
}

const StyledSearch = styled.div`
  display: flex;
  position: relative;

  > input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  > button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

const StyledClose = styled(Close)`
  position: absolute;
  right: 118px;
  top: 28px;
`

Search.propTypes = {
  className: string,
  label: string,
  onSearch: func.isRequired,
  placeholder: string,
  showReset: bool,
  type: oneOf(['search', 'text']),
  value: string
}

Search.defaultProps = {
  showReset: true,
  type: 'search'
}
