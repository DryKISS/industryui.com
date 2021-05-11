/**
 * About
 */

// UI
import { Column, Container, Row, Space } from '@drykiss/industry-ui'
import { Paragraph } from '../common/typography/paragraph'
import { ContactForm } from './form/form'

export const Contact = () => {
  return (
    <Container>
      <Paragraph content="Leave your information and we will schedule a call with you." />

      <Space marginBottom="xxxl" />

      <Row>
        <Column xs={3} md={3}>
          <b>Phone</b>

          <Paragraph content="44 (0) 778 043 5329" />
        </Column>

        <Column xs={3} md={3}>
          <b>Email</b>

          <Paragraph content="Info@drykiss.com" />
        </Column>
      </Row>

      <Space marginBottom="xxxl" />

      <Row>
        <Column xs={12} md={8}>
          <ContactForm />
        </Column>
      </Row>
    </Container>
  )
}
