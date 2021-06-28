/**
 * Messaging/Search
 */

// React
import React from 'react'
import { func, string } from 'prop-types'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import SelectField from '../../../../form/select/select'
import Search from '../../../../form/search/search'
import Row from '../../../../atoms/grid/Row'
import Column from '../../../../atoms/grid/Column'
import Form from '../../../../form/form/form'
// Style
import styled from 'styled-components'

const Items = [
  { text: 'All', value: 'all' },
  { text: 'Email', value: 'email' },
  { text: 'Comment', value: 'comment' },
  { text: 'Notification', value: 'notification' }
]

const MessagingSearch = ({ onFilter, onSearch, placeholder }) => {
  const { errors, handleSubmit, register } = useForm({
    mode: 'onChange'
  })

  const onSubmit = (data) => {
    onSearch(data.query)
  }

  const onFilterChange = (e) => {
    onFilter && onFilter(e.target.value)
  }

  const defaultOptions = {
    errors: errors,
    register: register
  }

  return (
    <StyledContainer>
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column md={6}>
            <StyledSearch {...defaultOptions} prependSearchIcon placeholder={placeholder} />
          </Column>

          <Column md={6}>
            <StyledSelect
              {...defaultOptions}
              name="messagingFilter"
              onChange={onFilterChange}
              options={Items}
            />
          </Column>
        </Row>
      </Form>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  background-color: ${({ theme: { MESSAGING } }) => MESSAGING.headerBackground};
  border-top: 1px solid #c0c0c0;
  padding: 1rem;
`

const StyledSearch = styled(Search)`
  width: 75%;
`

const StyledSelect = styled(SelectField)`
  width: 75%;
  label {
    margin: 0;
  }
`

MessagingSearch.propTypes = {
  onFilter: func.isRequired,
  onSearch: func.isRequired,
  placeholder: string
}

MessagingSearch.defaultProps = {
  placeholder: 'Search...'
}
export default MessagingSearch
