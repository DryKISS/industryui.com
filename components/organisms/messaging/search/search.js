/**
 * Messaging/Search
 */

// React
import React from 'react'
import { func, string } from 'prop-types'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import { Column, FormForm, Row, Search, Select } from '../../../'

// Style
import styled from 'styled-components'

const Items = [
  { text: 'All', value: 'all' },
  { text: 'Email', value: 'email' },
  { text: 'Comment', value: 'comment' },
  { text: 'Notification', value: 'notification' }
]

export const MessagingSearch = ({ onFilter, onSearch, placeholder }) => {
  const { errors, handleSubmit, register } = useForm({ mode: 'onChange' })

  const onSubmit = data => {
    onSearch(data.query)
  }

  return (
    <StyledContainer>
      <FormForm handleSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column md={6}>
            <StyledSearch
              errors={errors}
              prependSearchIcon
              placeholder={placeholder}
              register={register}
            />
          </Column>

          <Column md={6}>
            <StyledSelect change={onFilter} id='messagingFilter' options={Items} />
          </Column>
        </Row>
      </FormForm>
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
