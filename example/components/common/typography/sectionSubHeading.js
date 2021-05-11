/**
 * Components - Common - Typography - Section Sub Heading
 */

// Style
import styled from 'styled-components'

export const SectionSubHeading = ({ content }) => {
  return <StyledTitle>{content}</StyledTitle>
}

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #666666;
  margin-bottom: 1rem;
`
