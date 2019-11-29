/**
 * Messaging/Search
 */

// React
import React from 'react'
import { func } from 'prop-types'

// UI
import { Search } from '../../../../atoms/form/search'

// Style
import styled from 'styled-components'

export const MessagingSearch = ({ onSearch }) => {
  return (
    <>
      <StyledContainer>
        <StyledSearch onSearch={onSearch} />
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div`
  background-color: #75cccf;
  border-top: 1px solid #c0c0c0;
  color: #c0c0c0;
  padding: 1rem;
`

const StyledSearch = styled(Search)`
  width: 75%;
`

MessagingSearch.propTypes = {
  onSearch: func
}
