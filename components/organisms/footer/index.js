/**
 * Footer
 */

// React
import { arrayOf, func, number, object, oneOfType, shape, string } from 'prop-types'

// UI
import { Column, Container, Heading, Link, List, ListItem, Row } from '../../'

// Style
import styled, { css } from 'styled-components'

export const Footer = ({ columns }) => {
  const renderColumns = () => {
    return columns.map((column, index) => (
      <Column key={index} offset={column.offset} {...column.size}>
        {Object.entries(column).map(([key, value], index) => {
          switch (key) {
            case 'header':
              return <Heading content={value} key={index} tag='h6' />
            case 'formatter':
              return value(index)
            case 'links':
              return renderLinks(value, index)
            case 'text':
              return renderText(value, index)
          }
        })}
      </Column>
    ))
  }

  const renderLinks = (links, index) => {
    return (
      <List key={index} unstyled>
        {links.map(({ name, to }, index) => (
          <StyledList key={index}>
            <Link to={to} passHref>
              {name}
            </Link>
          </StyledList>
        ))}
      </List>
    )
  }

  const renderText = (text, index) => <div key={index} dangerouslySetInnerHTML={{ __html: text }} />

  return (
    <StyledFooter data-cy='footer'>
      <Container>
        <Row>{renderColumns()}</Row>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  ${({ theme: { FOOTER } }) => css`
    background: ${FOOTER.background};
    color: ${FOOTER.colour};
  `}

  padding: 1rem 0;
`

const StyledList = styled(ListItem)`
  margin-bottom: 1.25rem;
`

Footer.propTypes = {
  columns: arrayOf(
    shape({
      header: string,
      formatter: func,
      links: arrayOf(
        shape({
          id: string,
          name: string,
          to: oneOfType([object, string])
        })
      ),
      offset: shape({
        sm: number,
        md: number,
        lg: number,
        xl: number
      }),
      size: shape({
        sm: number,
        md: number,
        lg: number,
        xl: number
      }),
      style: object
    })
  ).isRequired
}
