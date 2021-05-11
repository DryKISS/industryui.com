/**
 * Components - Common - Typography - Page Sub Heading
 */

// Style
import styled from 'styled-components'

export const PageSubHeading = (props) => {
  return <StyledSubHeading {...props} />
}

const StyledSubHeading = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${({ theme }) => theme.COLOUR.white};
`
