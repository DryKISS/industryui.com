/**
 * Copyright
 */

// React
import { array, string } from 'prop-types'

// UI
import { Column, Container, Icon, Link, Row } from '../../'

// Style
import styled from 'styled-components'

const year = new Date().getFullYear()

export const Copyright = ({ brand, links }) => {
  const renderLinks = () => {
    return links.map(({ name, to }, index) => (
      <Link key={index} passHref to={to}>
        <StyledLink>{name}</StyledLink>
      </Link>
    ))
  }

  return (
    <StyledCopyright data-cy='copyright'>
      <StyledContainer>
        <Row>
          <Column md={links.length > 0 ? 3 : 12}>
            <StyledBrand>
              <StyledIcon context='primary' icon='copyright' prefix='fad' />
              {year} — {brand}
            </StyledBrand>
          </Column>

          {links.length > 0 && <Column md={9}>{renderLinks()}</Column>}
        </Row>
      </StyledContainer>
    </StyledCopyright>
  )
}

const StyledCopyright = styled.section`
  background-color: ${({ theme }) => theme.COPYRIGHT.background};
  color: ${({ theme }) => theme.COPYRIGHT.colour};
  font-size: 0.75rem;
`

const StyledContainer = styled(Container)`
  height: 3.5rem;
`

const StyledBrand = styled.div`
  display: flex;
  justify-content: center;
`

const StyledIcon = styled(Icon)`
  margin: auto 0;
  padding-right: 0.25rem;
`

const StyledLink = styled.span`
  margin-right: 1.5rem;
`

Copyright.propTypes = {
  brand: string.isRequired,
  links: array
}
