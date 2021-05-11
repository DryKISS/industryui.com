/**
 * Components - Common - Typography - Section Heading
 */

// Style
import styled from 'styled-components'

// UI
import { Heading } from '@drykiss/industry-ui'

export const PageHeading = (props) => {
  return <StyledHeading {...props} />
}

const StyledHeading = styled(Heading)`
  font-weight: 800;
  color: ${({ theme }) => theme.COLOUR.white};
  padding-bottom: 1rem;
`
