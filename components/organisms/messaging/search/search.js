/**
 * Messaging/Search
 */

// React
import React from 'react'
import { func, string } from 'prop-types'

// UI
import { Column, Form, Row, Search, SelectField, useForm } from '../../../'

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
      <Form handleSubmit={handleSubmit(onSubmit)}>
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
      </Form>
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
