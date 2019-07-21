/**
 * Card - Decks
 * A set of equal width and height cards that aren’t attached.
 */

// React
import { node } from 'prop-types'

// UI
import { MEDIA_QUERY } from '../../../'

// Style
import styled from 'styled-components'

export const CardDecks = ({ children }) => {
  return (
    <StyledDecks>
      {children}
    </StyledDecks>
  )
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
