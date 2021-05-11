/**
 * What we do
 */

// Style
import styled from 'styled-components'

// UI
import { Column, Container, Image, Row, Space } from '@drykiss/industry-ui'
import { Paragraph } from '../common/typography/paragraph'
import { SectionSubHeading } from '../common/typography/sectionSubHeading'

export const WhatWeDo = () => {
  return (
    <Container>
      <Row align="center">
        <Column sm={12} md={6}>
          <StyledImage src="/images/services/responsive.svg" />
        </Column>

        <Column sm={12} md={6}>
          <SectionSubHeading content="Responsive development" />

          <Paragraph content="Crafting responsive, accessibility and mobile-first sites is something we love.  From smartphone to desktop, mobile-friendly or laptops, your site should look and function seamlessly." />
        </Column>
      </Row>

      <Space marginBottom="xxl" />

      <Row align="center">
        <Column sm={12} md={6}>
          <SectionSubHeading content="MVP Prototyping" />

          <Paragraph content="Using CodeBlender our React component library. DryKISS can rapidly deliver any kind of MVP to answer user research questions. We have already delivered a TV EPG, mobile apps, one page sites and email newsletters." />
        </Column>

        <Column sm={12} md={6}>
          <StyledImage src="/images/services/mvp.svg" />
        </Column>
      </Row>

      <Space marginBottom="xxl" />

      <Row align="center">
        <Column sm={12} md={6}>
          <StyledImage src="/images/services/hybrid.svg" />
        </Column>

        <Column sm={12} md={6}>
          <SectionSubHeading content="Hybrid mobile development" />

          <Paragraph content="Utilising the latest technologies such as React Native, DryKISS can deliver cross-platform HTML5 and JavaScript mobile applications." />
        </Column>
      </Row>

      <Space marginBottom="xxl" />

      <Row align="center">
        <Column sm={12} md={6}>
          <SectionSubHeading content="SEO" />

          <Paragraph content="DryKISS has over 20 years experience in web technologies and SEO has always been a key part for every project. We can assist with all the necessary research to identify the phrases and content strategies you need so you can rank first in Google searches." />
        </Column>

        <Column sm={12} md={6}>
          <StyledImage src="/images/services/seo.svg" />
        </Column>
      </Row>

      <Space marginBottom="xxl" />

      <Row align="center">
        <Column sm={12} md={6}>
          <StyledImage src="/images/services/marketing.svg" />
        </Column>

        <Column sm={12} md={6}>
          <SectionSubHeading content="Digital Social Marketing" />

          <Paragraph content="DryKISS can strategise, plan and curate a social media marketing plan for your business. Search Engine Optimisation, Social Integration, Website Promotion, Online Advertising through any or all social channels; Facebook, Twitter, LinkedIn, Instagram etc." />
        </Column>
      </Row>

      <Space marginBottom="xxl" />

      <Row align="center">
        <Column sm={12} md={6}>
          <SectionSubHeading content="UX/UI" />

          <Paragraph content="We focus on user experience. Maximum impact on usability, designed in mind around the interaction between users and products to facilitate ease of use. Our results are 100% engagement and great interaction all without the confusion or fuss." />
        </Column>

        <Column sm={12} md={6}>
          <StyledImage src="/images/services/pricing.svg" />
        </Column>
      </Row>

      <Space marginBottom="xxl" />
    </Container>
  )
}

const StyledImage = styled(Image)`
  width: 100%;
  max-height: 250px;
`
