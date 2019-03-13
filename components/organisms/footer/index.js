/**
 * Footer
 * Showcases columns of links or HTML
 */

// React
import { arrayOf, func, number, object, oneOfType, shape, string } from 'prop-types'

// UI
import { Column, Container, Link, List, ListItem, Row } from '../../'

// Style
import styled from 'styled-components'

export const Footer = ({ columns }) => {
  const _render = (obj) => {
    return obj() // NOTE: added rendering fragment (see also __mocks__/footer.js)
  }

  const renderColumns = () => {
    return columns.map(({ size, offset, formatter, header, links, text, style }, index) => (
      <Column style={style} {...size} offset={offset} key={index}>
        {formatter && _render(formatter)}
        {header && <StyledTitle>{header}</StyledTitle>}
        {links && renderLinks(links)}
        {text && renderText(text)}
      </Column>
    ))
  }

  const renderLinks = (links) => {
    return (
      <List unstyled>
        {links.map(({ name, to }, index) => (
          <ListItem key={index}>
            <Link to={to} passHref>
              <StyledLink>{name}</StyledLink>
            </Link>
          </ListItem>
        ))}
      </List>
    )
  }

  const renderText = (text) => (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  )

  return (
    <StyledFooter>
      <Container>
        <Row>{renderColumns()}</Row>
      </Container>
    </StyledFooter>
  )
}

Footer.propTypes = {
  columns: arrayOf(
    shape({
      header: string,
      formatter: func,
      links: arrayOf(
        shape({
          id: string,
          name: string,
          to: oneOfType([
            object,
            string
          ])
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

// Footer
const StyledFooter = styled.div`
  background: ${props => props.theme.FOOTER.background};
  border-top: ${props => `4px solid ${props.theme.COLOUR.light}`};
  color: ${props => props.theme.COLOUR.dark};
  font-size: .875rem;
  line-height: 1.25rem;
  padding: 3rem 0;
`

// Heading
const StyledTitle = styled.h2`
  color: ${props => props.theme.COLOUR.primary};
  font-size: 1rem;
  margin-bottom: .5rem;
  margin-top: 0;
`

// Link
const StyledLink = styled.a`
  color: ${props => props.theme.COLOUR.dark};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

// .Footer-hashtag {
//   font-size: 1rem;
// }

// .Footer-socialIcon {
//   background: #04D4DC;
//   border-radius: 50%;
//   color: white;
//   display: inline-block;
//   height: 2rem;
//   padding: 5px;
//   text-align: center;
//   vertical-align: middle;
//   width: 2rem;
// }

// .Footer-socialIcons a:not(.Footer-socialNoMargin) {
//   margin-right: 5px;
// }
