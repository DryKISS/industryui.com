/**
 * Copyright
 */

// React
import React, { Component } from 'react'
import { array, string } from 'prop-types'

// UI
import { Column, Container, Link, Row } from '../../'

// Style
import styled, { withTheme } from 'styled-components'

export const Copyright = withTheme(
  class Copyright extends Component {
    static propTypes = {
      brand: string.isRequired,
      links: array.isRequired
    }

    renderLinks = () => {
      const { links } = this.props

      return (
        <StyledNav>

          {links.map(({ name, to }, index) =>
            <Link to={to} key={index} passHref>
              <StyledLink>{name}</StyledLink>
            </Link>
          )}

        </StyledNav>
      )
    }

    render () {
      const { brand, links } = this.props
      const year = new Date().getFullYear()

      return (
        <StyledCopyright>

          <Container>

            <Row>

              <StyledBrand>
                ©{year} {brand}
              </StyledBrand>

              {links && this.renderLinks()}

            </Row>

          </Container>

        </StyledCopyright>
      )
    }
  }
)

// Style
const StyledCopyright = styled.section`
  background-color: ${({ theme }) => theme.COLOUR.light};
  bottom: 0;
  color: ${({ theme }) => theme.COLOUR.dark};
  font-size: .875rem;
  height: 4rem;
  line-height: 4rem;
  position: absolute;
  width: 100%;
`

const StyledBrand = styled.div`
  display: inline;
  margin: 0 1rem 0 0;
`

const StyledNav = styled.nav`
  display: inline;
`

const StyledLink = styled.a`
  color: ${({ theme }) => theme.COLOUR.dark};
  margin: 0 1rem 0 0;
  text-decoration: none;

  &:hover {
    color: #6b7a87;
    text-decoration: underline;
  }
`
