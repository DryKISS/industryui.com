/**
 * Careers - Show
 */

// UI
import { Button, Column, Container, List, ListItem, Row, Space } from '@drykiss/industry-ui'
import { SectionHeading } from '../common/typography/sectionHeading'
import { SectionSubHeading } from '../common/typography/sectionSubHeading'

export const CareerShow = ({ data }) => {
  const { applyWith, benefits, details, needs, youAre, youWill } = data

  return (
    <Container>
      <Row justify="space-between">
        <Column md={9}>
          <SectionHeading align="left" content={data.title} paddingBottom={1} />
        </Column>

        <Column md={3}>
          <Button as="a" href={data.link} content="Apply on Angel List" size="lg" target="_blank" />
        </Column>
      </Row>

      <SectionSubHeading content="Description" />

      {data.description ? <span dangerouslySetInnerHTML={{ __html: data.description }} /> : '-'}

      <Space />

      {youAre.length > 0 && (
        <>
          <SectionSubHeading content="You Are" />

          <List>
            {youAre.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </>
      )}

      {youWill.length > 0 && (
        <>
          <SectionSubHeading content="You Will" />

          <List>
            {youWill.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </>
      )}

      {needs.length > 0 && (
        <>
          <SectionSubHeading content="Our Needs" />

          <List>
            {needs.map((need) => (
              <ListItem key={need}>{need}</ListItem>
            ))}
          </List>
        </>
      )}

      {benefits.length > 0 && (
        <>
          <SectionSubHeading content="Benefits" />

          <List>
            {benefits.map((benefit) => (
              <ListItem key={benefit}>{benefit}</ListItem>
            ))}
          </List>
        </>
      )}

      {details.length > 0 && (
        <>
          <SectionSubHeading content="Offer Details" />

          <List>
            {details.map((detail) => (
              <ListItem key={detail}>{detail}</ListItem>
            ))}
          </List>
        </>
      )}

      {applyWith.length > 0 && (
        <>
          <SectionSubHeading content="Apply With" />

          <List>
            {applyWith.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </>
      )}

      <Space />
    </Container>
  )
}
