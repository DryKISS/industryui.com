/**
 * Components - Home - Our Works
 */

// Style
import styled from 'styled-components'

// UI
import { Container, Column, Image, Row, List, ListItem } from '@drykiss/industry-ui'
import { Paragraph } from '../common/typography/paragraph'
import { SectionHeading } from '../common/typography/sectionHeading'
import { SectionSubHeading } from '../common/typography/sectionSubHeading'

export const HomeWhoWeAre = () => {
  return (
    <Container>
      <Row align="center">
        <Column sm={12} md={6}>
          <StyledImage alt="Slogan" src="/images/home/slogans.svg" />
        </Column>

        <Column sm={12} md={6}>
          <SectionHeading align="left" content="Who We Are" />

          <SectionSubHeading content="Why DryKISS?" />

          <Paragraph content="With over 20+ years experience, we understand your challenges and want to help you learn about your users, business requirements and solve customer pain points. We are a full-service software development company; building deliverables from early stages to successful projects." />

          <List>
            <ListItem>
              We help you build value - by applying an honest and ethical approach to collaboration.
            </ListItem>
            <ListItem>
              We bring technical and business expertise - translate your idea into features and
              roadmaps.
            </ListItem>
            <ListItem>
              We promote business growth - build a great product or service with minimum time and
              risk.
            </ListItem>
          </List>
        </Column>
      </Row>
    </Container>
  )
}

const StyledImage = styled(Image)``
