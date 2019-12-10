/**
 * Messaging/Search
 */

// React
import React from 'react'
import { func, string } from 'prop-types'

// UI
import { Column, Search, Select, Row } from '../../../../'

// Style
import styled from 'styled-components'

export const MessagingSearch = ({ onFilter, onSearch, placeholder }) => {
  const Items = [
    { text: 'All', value: 'all' },
    { text: 'Email', value: 'email' },
    { text: 'Comment', value: 'comment' },
    { text: 'Notification', value: 'notification' }
  ]

  return (
    <StyledContainer>
      <Row>
        <Column md={6}>
          <StyledSearch onSearch={onSearch} prependSearchIcon placeholder={placeholder} />
        </Column>

        <Column md={6}>
          <StyledSelect change={onFilter} id='messagingFilter' options={Items} />
        </Column>
      </Row>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  background-color: #eee;
  border-top: 1px solid #c0c0c0;
  padding: 1rem;
`

const StyledSearch = styled(Search)`
  width: 75%;
`

const StyledSelect = styled(Select)`
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
