/**
 * Messaging/Search
 */

// React
import React from 'react'
import { func, string } from 'prop-types'

// React Hook Form
import { useForm } from 'react-hook-form'

// Style
import styled from 'styled-components'

// UI
import Column from '../../../../atoms/grid/Column'
import Form from '../../../../form/form/form'
import Row from '../../../../atoms/grid/Row'
import Search from '../../../../form/search/search'
import Select from '../../../../form/select/select'
import Space from '../../../../atoms/space/space'

const Items = [
  {
    text: 'All',
    value: 'all'
  },
  {
    text: 'Email',
    value: 'email'
  },
  {
    text: 'Comment',
    value: 'comment'
  },
  {
    text: 'Notification',
    value: 'notification'
  }
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
        <StyledRow>
          <Column md={6}>
            <StyledSearch {...defaultOptions} prependSearchIcon placeholder={placeholder} />
          </Column>

          <StyledSpace mb={1} />

          <Column md={6}>
            <StyledSelect
              {...defaultOptions}
              name="messagingFilter"
              onChange={onFilterChange}
              options={Items}
            />
          </Column>
        </StyledRow>
      </Form>
    </StyledContainer>
  )
}

const StyledSpace = styled(Space)`
  width: 100%;
`

const StyledRow = styled(Row)`
  ${StyledSpace} {
    display: none;
  }
  /* MD Medium devices (tablets, 768px and up) */
  @media (max-width: ${({ theme }) => theme.GRID.breakpoints.md}px) {
    ${StyledSpace} {
      display: block;
    }
  }
`

const StyledContainer = styled.div`
  background-color: ${({ theme: { MESSAGING } }) => MESSAGING.headerBackground};
  border-top: 1px solid #c0c0c0;
  padding: 1rem;
`

const StyledSearch = styled(Search)`
  width: 75%;
`

const StyledSelect = styled(Select)`
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
