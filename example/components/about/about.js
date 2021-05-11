/**
 * About
 */

// UI
import { Container, List, ListItem } from '@drykiss/industry-ui'
import { Paragraph } from '../common/typography/paragraph'

export const About = () => {
  return (
    <Container>
      <Paragraph content="DryKISS is a full-service digital production studio, helping Startups and their Founders bring their ideas to market quickly." />

      <Paragraph content="We design, build and launch Minimum Viable Products (MVP). Or iterate existing products. This helps you showcase social proof to potential investors at every round of funding from Venture Capital to Series A, B, C and IPO." />

      <Paragraph content="Skilled at crafting responsive website design, app development, marketplaces and eCommerce, we help create products that validate your idea. We will craft it around your value proposition, proprietary technology and competitive advantage. Our core services cover strategy, planning, testing, analytics, design and build. From the first concept to the grand release." />

      <Paragraph content="We can also help your startup:" />

      <List>
        <ListItem>
          Feel secure in having a team of experienced developers and professionals behind your
          initiatives;
        </ListItem>

        <ListItem>Create an amazing experience for your users;</ListItem>

        <ListItem>
          Successfully build your brand’s position and impress investors to accelerate the growth of
          your business.
        </ListItem>
      </List>

      <Paragraph content="Our technology stack" />

      <List>
        <ListItem>React</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>NextJS</ListItem>
        <ListItem>Node.js</ListItem>
        <ListItem>Amazon AWS</ListItem>
        <ListItem>IndustryUI design system</ListItem>
      </List>

      <Paragraph content="We have embraced full remote working throughout Europe. But that doesn't mean we compromise on talent and expertise. We are a tight-knit group dedicated to the craft of product building. When you need superheroes for your project, with minimum fuss, Don't Repeat Yourself and Keep It Simple Stupid with DryKISS." />
    </Container>
  )
}
