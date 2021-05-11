/**
 * Components - Home - Our Methodology
 */

// Style
import styled from 'styled-components'

// UI
import { Container, Column, Image, Row, Space } from '@drykiss/industry-ui'
import { Paragraph } from '../common/typography/paragraph'
import { SectionHeading } from '../common/typography/sectionHeading'
import { SectionSubHeading } from '../common/typography/sectionSubHeading'

export const HomeOurMethodology = () => {
  return (
    <StyledWrapper>
      <Container>
        <SectionHeading content="Our Methodology" />

        <Row>
          <Column sm={12} md={6}>
            <SectionSubHeading content="We Create MVP" />

            <Paragraph content="Our Minimum Viable Product development services test the variability of your idea. We create personas, storyboards and initial prototypes using the best technology stack to help guide these critical early decisions. Whether it is to build an application that will evolve into a fully-featured end-to-end product or a prototype for validation to receive funding, use MVP to gain insight into your target audiences, reduce business risk and manage resources." />
          </Column>

          <Column sm={12} md={6}>
            <Image alt="Methodology" src="/images/home/shatels.svg" />
          </Column>
        </Row>

        <Space marginBottom="xxxl" />

        <Row align="center">
          <Column sm={12} md={6}>
            <Image alt="Ethos" src="/images/home/etho.svg" />
          </Column>

          <Column sm={12} md={6}>
            <SectionSubHeading content="Our Approach" />

            <Paragraph content="DryKISS will draft a user-centric development approach which includes technology reasoning, product backlog, continuous integration plan and sprint milestones." />

            <Paragraph content='Our crafting is all about rapid feature completion. We want the user to test a story as quickly as possible. Building from a pattern library in what we call "Atomic Development", we also use CodeBlender to accelerate this process with pre-defined common patterns that can be styled and deployed.' />

            <Paragraph content="Our approach is agile, continually evolving using the best and effective technology stack to help minimize the business risk you may face through any deadlines and budgets." />
          </Column>
        </Row>
      </Container>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.COLOUR.white} url('/images/hero/pattern-2.svg') no-repeat right
    bottom;
  padding-bottom: 40px;
`
