/**
 * Card - Columns
 * Cards can be organized into Masonry-like columns
 */

// React
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

export const CardColumns = ({ childern }) => {
  return <StyledColumns>{childern}</StyledColumns>
}

const StyledColumns = styled.div`
  display: block;
`

CardColumns.propTypes = {
  childern: node.isRequired
}
