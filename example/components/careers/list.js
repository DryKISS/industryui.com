/**
 * Careers - List
 */

// UI
import { Card, CardBody, Column, Container, List, ListItem, Row, Space } from '@drykiss/industry-ui'

export const CareersList = ({ items }) => {
  return (
    <Container>
      <p>DryKISS core values:</p>

      <List>
        <ListItem>
          Embrace responsibility - With great power comes with great responsibilities. We give you
          the ability to influence the outcome but always consider the consequences thoroughly.
        </ListItem>

        <ListItem>
          Constantly learning - We encourage the use of the latest technologies and prototype
          everything. Our main goal is to keep our clients and their customers happy. To do this, we
          start by learning ourselves and crafting top-notch solutions.
        </ListItem>

        <ListItem>
          Be humble - Accept when things are wrong. We do not try to blame the designer nor the
          marketing department. We work together collectively as a team and there is no room for
          high egos.
        </ListItem>

        <ListItem>
          Be honest - We love transparency and can only build a better relationship with clients,
          partners and staff if we all communicate the good and the bad.
        </ListItem>

        <ListItem>
          Work-life balance - It should not be something to strive for, but to live it every day. We
          work hard, we play hard.
        </ListItem>

        <ListItem>
          If you are passionate about producing quality development, is entrepreneurial at heart and
          have a passion for what you do, get in touch with us.
        </ListItem>
      </List>

      <Row>
        {items.map((career) => (
          <Column key={career.slug} md={3}>
            <Card
              alt={career.title}
              bordered
              image={career.cover}
              shadow
              to={`/careers/${career.slug}`}
            >
              <CardBody>{career.title}</CardBody>
            </Card>
          </Column>
        ))}
      </Row>

      <Space marginBottom="xxl" />
    </Container>
  )
}
