/**
 * Copyright
 */

// React
import { array, string } from 'prop-types'

// UI
import { Container, Link, Row } from '../../'

// Style
import styled from 'styled-components'

export const Copyright = ({ brand, links }) => {
  const renderLinks = () => {
    return (
      <StyledNav>
        {links.map(({ name, to }, index) => (
          <Link to={to} key={index} passHref>
            <StyledLink>{name}</StyledLink>
          </Link>
        ))}
      </StyledNav>
    )
  }

  const year = new Date().getFullYear()

  return (
    <StyledCopyright>
      <Container>
        <Row>
          <StyledBrand>
            ©{year} {brand}
          </StyledBrand>

          {links && renderLinks()}
        </Row>
      </Container>
    </StyledCopyright>
  )
}

Copyright.propTypes = {
  brand: string.isRequired,
  links: array
}

const StyledCopyright = styled.section`
  background-color: ${({ theme }) => theme.COLOUR.light};
  color: ${({ theme }) => theme.COLOUR.dark};
  font-size: 0.875rem;
  height: 4rem;
  line-height: 4rem;
  width: 100%;

  /* position: absolute; */

  /* bottom: 0; */
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
