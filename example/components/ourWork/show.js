/**
 * Our Work - Show
 */

// Style
import styled from 'styled-components'

// UI
import { Column, Container, Divider, Image, List, ListItem, Row, Space } from '@drykiss/industry-ui'
import { SectionHeading } from '../common/typography/sectionHeading'
import { SectionSubHeading } from '../common/typography/sectionSubHeading'

export const OurWorkShow = ({ data }) => {
  return (
    <Container>
      <Row>
        <Column md={6}>
          <SectionHeading align="left" content={data.title} paddingBottom={1} />

          <SectionSubHeading content="Description" />
          {data.description ? <span dangerouslySetInnerHTML={{ __html: data.description }} /> : '-'}

          <Space marginBottom="lg" />

          <SectionSubHeading content="Links" />

          {data.links?.length > 0 ? (
            <List>
              {data.links.map((link) => (
                <ListItem key={link.label}>
                  <StyledLink href={link.href}>{link.label}</StyledLink>
                </ListItem>
              ))}
            </List>
          ) : (
            '-'
          )}
        </Column>

        <Column md={6}>
          <StyledCover alt={data.title} src={data.cover || '/images/placeholder/drykiss.png'} />
        </Column>
      </Row>

      <Divider size="lg" />

      <Row>
        <Column md={6}>
          <SectionSubHeading content="Tasks" />

          {data.tasks?.length > 0 ? (
            <List>
              {data.tasks.map((task) => (
                <ListItem key={task}>{task}</ListItem>
              ))}
            </List>
          ) : (
            '-'
          )}

          <Space marginBottom="lg" />

          <SectionSubHeading content="Team" />

          {data.team?.length > 0 ? (
            <List>
              {data.team.map((t) => (
                <ListItem key={t}>{t}</ListItem>
              ))}
            </List>
          ) : (
            '-'
          )}
        </Column>

        <Column md={6}>
          <SectionSubHeading content="Project Duration" />

          {data.duration?.length > 0 ? (
            <List>
              {data.duration.map((duration) => (
                <ListItem key={duration}>{duration}</ListItem>
              ))}
            </List>
          ) : (
            '-'
          )}

          <Space marginBottom="lg" />

          <SectionSubHeading content="Outcome" />

          {data.outcome?.length > 0 ? (
            <List>
              {data.outcome.map((oc) => (
                <ListItem key={oc}>{oc}</ListItem>
              ))}
            </List>
          ) : (
            '-'
          )}
        </Column>
      </Row>
    </Container>
  )
}

OurWorkShow.defaultProps = {
  data: {}
}

const StyledCover = styled(Image)`
  border-radius: 16px;
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`

const StyledLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer'
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.COLOUR.secondary};
  font-weight: bold;
  font-size: 16px;
`
