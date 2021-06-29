/**
 * Card - Decks
 * A set of equal width and height cards that aren’t attached.
 */

// React
import React from 'react'
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import MEDIA_QUERY from '../../../utils/mediaQuery/query'

const CardDecks = ({ children }) => {
  return <StyledDecks>{children}</StyledDecks>
}

const StyledDecks = styled.div`
  display: flex;
  flex-direction: column;
  ${MEDIA_QUERY.desktop`
    flex-flow: row wrap;
    margin-left: -15px;
    margin-right: -15px;
  `}
`

CardDecks.propTypes = {
  children: node.isRequired
}

export default CardDecks
