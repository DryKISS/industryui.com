/**
 * Search
 */

// React
import { func, string, oneOf } from 'prop-types'

// UI
import { Button, useChange, Form, Input } from '../../../../'

// Style
import styled from 'styled-components'

export const Search = ({ className, label, onSearch, placeholder, type, value }) => {
  const initialState = {
    query: value || ''
  }

  const [change, form] = useChange(initialState)
  const { query } = form

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

        <Button content={label || 'Search'} context='dark' size='lg' type='submit' />
      </StyledSearch>
    </Form>
  )
}

const StyledSearch = styled.div`
  display: flex;

  > input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  > button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`

Search.propTypes = {
  className: string,
  label: string,
  onSearch: func.isRequired,
  placeholder: string,
  type: oneOf(['search', 'text']),
  value: string
}

Search.defaultProps = {
  type: 'search'
}
