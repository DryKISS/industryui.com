/**
 * Components - Home - Our Works
 */

// Style
import styled from 'styled-components'

// UI
import { Container, Column, Image, Row } from '@drykiss/industry-ui'
import { Paragraph } from '../common/typography/paragraph'
import { SectionHeading } from '../common/typography/sectionHeading'
import { SectionSubHeading } from '../common/typography/sectionSubHeading'

export const HomeOurWorks = () => {
  return (
    <Container>
      <SectionHeading content="Our Works" />

      <Row align="center">
        <Column sm={12} md={6}>
          <SectionSubHeading content="Projects we worked on" />

          <Paragraph content="Our fully remote development team has helped built new technologies, modernised products and services, and have worked on projects from all over the world. Take a look at our portfolio." />
        </Column>

        <Column sm={12} md={6}>
          <StyledImage src="/images/home/our-works.png" />
        </Column>
      </Row>
    </Container>
  )
}

const StyledImage = styled(Image)`
  width: 100%;
`
