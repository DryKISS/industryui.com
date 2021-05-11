/**
 * Components - Home - Testimonial - Item
 */

// Style
import styled from 'styled-components'

// UI
import { Avatar, Column, Divider, MEDIA_QUERY_MAX, Row, Text } from '@drykiss/industry-ui'

export const TestimonialItem = ({ name, position, src, text }) => {
  return (
    <StyledRow align="center">
      <Column md={1} sm={4}>
        <StyledAvatar content={name} src={src} size="xxl" />
      </Column>

      <Column md={2} sm={8}>
        <Text content={name} context="primary" />
        <Text content={position} />
      </Column>

      <Divider flexItem vertical />

      <StyledTextColumn md={8} sm={12}>
        {text}
      </StyledTextColumn>
    </StyledRow>
  )
}

const StyledRow = styled(Row)`
  padding: 0 48px;
`

const StyledTextColumn = styled(Column)`
  ${MEDIA_QUERY_MAX.phone`
    margin-top: 1rem;
  `}
`

const StyledAvatar = styled(Avatar)`
  img {
    height: 100%;
    object-fit: cover;
  }
`
