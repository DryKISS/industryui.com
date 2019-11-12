/**
 * Messaging/Search
 */

// React
import React from 'react'

// UI
import { Search } from '../../../../atoms/form/search'

// Style
import styled from 'styled-components'

export const MessagingSearch = () => {
  return (
    <>
      <StyledContainer>
        <StyledSearch />
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
  width: 33%;
`

MessagingSearch.propTypes = {}

MessagingSearch.defaultProps = {}
