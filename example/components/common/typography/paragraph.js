/**
 * Components - Common - Typography - Section Sub Heading
 */

// Style
import styled from 'styled-components'

export const Paragraph = ({ content, ...props }) => {
  return <StyledParagraph {...props}>{content}</StyledParagraph>
}

const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 2;
  color: #333333;
`
