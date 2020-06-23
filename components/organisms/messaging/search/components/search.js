/**
 * Messaging/Search
 */

// React
import React, { useEffect } from 'react'
import { func, string } from 'prop-types'

// Form
import { useForm } from 'react-hook-form'

// UI
import { Column, Search, SelectField, Row } from '../../../../'

// Style
import styled from 'styled-components'

const filters = [
  { text: 'All', value: 'all' },
  { text: 'Email', value: 'email' },
  { text: 'Comment', value: 'comment' },
  { text: 'Notification', value: 'notification' }
]

export const MessagingSearch = ({ onFilter, onSearch, placeholder }) => {
  const { register, watch } = useForm()

  const messagingFilter = watch('messagingFilter')

  useEffect(() => {
    onFilter(messagingFilter)
  }, [messagingFilter])

  return (
    <StyledContainer>
      <Row>
        <Column md={6}>
          <StyledSearch onSearch={onSearch} prependSearchIcon placeholder={placeholder} />
        </Column>

        <Column md={6}>
          <StyledSelect register={register} name='messagingFilter' options={filters} />
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
