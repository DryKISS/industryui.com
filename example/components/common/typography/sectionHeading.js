/**
 * Components - Common - Typography - Section Heading
 */

// Style
import styled from 'styled-components'

// UI
import { Heading } from '@drykiss/industry-ui'

export const SectionHeading = ({ align, content, paddingBottom }) => {
  return <StyledHeading align={align} content={content} paddingBottom={paddingBottom} tag="h2" />
}

const StyledHeading = styled(Heading)`
  text-align: ${({ align }) => align || 'center'};
  font-weight: bold;
  color: ${({ theme }) => theme.COLOUR.primary};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 2}rem;
`
