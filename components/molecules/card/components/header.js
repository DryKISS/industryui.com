/**
 * Card header
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const CardHeader = ({ header }) => {
  return (
    <StyledHeader>{header}</StyledHeader>
  )
}

const StyledHeader = styled.div`
  background-color: #04D4DC;
  border-radius: .5rem .5rem 0 0;
  color: #fff;
  padding: .5rem 2px;
  text-align: center;
`

CardHeader.propTypes = {
  header: string
}
