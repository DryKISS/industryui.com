/**
 * Search
 *
 */

// React
import { func, string, oneOf } from 'prop-types'

// UI
import { Button, useChange, Form, Input } from '../../../../'

// Style
import styled from 'styled-components'

export const Search = ({ label, onSearch, placeholder, value, type }) => {
  const INITIAL_STATE = {
    query: value || ''
  }

  const [change, form] = useChange(INITIAL_STATE)
  const { query } = form

  return (
    <Form submit={() => onSearch(query)}>
      <StyledSearch>
        <Input
          change={change}
          id='query'
          placeholder={placeholder}
          required={false}
          type={type}
          value={query}
        />
        <Button
          content={label || 'Search'}
          context='dark'
          size='lg'
          type='submit'
        />
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
  label: string,
  onSearch: func.isRequired,
  placeholder: string,
  value: string,
  type: oneOf(['search', 'text'])
}

Search.defaultProps = {
  type: 'search'
}
