/**
 * Footer
 * Showcases columns of links or HTML
 */

// React
import React, { Component } from 'react'
import { array } from 'prop-types'

// UI
import { Column, Container, Link, List, Row } from '../../'

// Style
import styled, { withTheme } from 'styled-components'

export const Footer = withTheme(
  class Footer extends Component {
    static propTypes = {
      columns: array.isRequired
      
    }

    _render (obj) {
      return obj()    // NOTE: added rendering fragment (see also __mocks__/footer.js)
    }

    renderColumns = () => {
      const { columns } = this.props

      return columns.map(({ columns, formatter, header, links, text, style }, index) => (

        <Column style={style} {...columns} key={index}>
          {formatter && this._render(formatter)} 

          {header && <StyledTitle>{header}</StyledTitle>}

          {links && this.renderLinks(links)}

          {text && this.renderText(text)}

        </Column>

      ))
    }

    renderLinks = (links) => {
      return (
        <List unstyled>

          {links.map(({ name, to }, index) => (
            <List.Item key={index}>

              <Link to={to} passHref>
                <StyledLink>{name}</StyledLink>
              </Link>

            </List.Item>
          ))}

        </List>
      )
    }

    renderText = (text) => (
      <div dangerouslySetInnerHTML={{ __html: text }} />
    )

    render () {
      return (
        <StyledFooter>

          <Container>

            <Row>
              {this.renderColumns()}
            </Row>

          </Container>

        </StyledFooter>
      )
    }
  }
)

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
