/**
 * Our Work - List
 */

// Style
import styled from 'styled-components'

// UI
import { Card, Column, Container, Image, Space, Row } from '@drykiss/industry-ui'
import { Paragraph } from '../common/typography/paragraph'

export const OurWorkList = ({ items }) => {
  const renderPortfolio = () =>
    items.map(({ active, client, slug, title, type }, index) => {
      if (!active) {
        return false
      } else {
        return (
          <StyledItem key={index}>
            <Card
              bordered
              footer={title}
              shadow
              to={{
                href: {
                  pathname: `/our-work/${type}/${slug}`
                }
              }}
            >
              <Image alt={title} src={`/images/portfolio/${client}/${slug}/hero.png`} />
            </Card>
          </StyledItem>
        )
      }
    })

  return (
    <Container>
      <Paragraph content="Here are some of the amazing projects we have worked on" />

      <Space marginBottom="xxxl" />

      <Row>{renderPortfolio()}</Row>
    </Container>
  )
}

const StyledItem = styled(Column).attrs(() => ({
  md: 6,
  lg: 3
}))`
  margin-bottom: 2rem;
`
