/**
 * Copyright
 */

// React
import { array, string } from 'prop-types'

// UI
import { Column, Container, Divider, Icon, Image, Link, Row } from '../../'

// Style
import styled from 'styled-components'

export const Copyright = ({ brand, links }) => {
  const renderLinks = () => {
    return links.map(({ name, to }, index) => (
      <Link key={index} passHref to={to}>
        <StyledLink>{name}</StyledLink>
      </Link>
    ))
  }

  const year = new Date().getFullYear()

  return (
    <>
      <Divider size='md' />

      <StyledCopyright data-cy='copyright'>
        <StyledContainer>
          <Row>
            <Column md={3}>
              <StyledBrand>
                <Image alt='Logo' src='/iui.svg' />
                <Icon context='primary' icon='copyright' prefix='fad' />
                {year} — {brand}
              </StyledBrand>
            </Column>

            <Column md={9}>{links && renderLinks()}</Column>
          </Row>
        </StyledContainer>
      </StyledCopyright>
    </>
  )
}

const StyledCopyright = styled.section`
  background-color: ${({ theme }) => theme.COPYRIGHT.background};
  color: ${({ theme }) => theme.COPYRIGHT.colour};
  font-size: 0.875rem;
  font-weight: 700;
`

const StyledContainer = styled(Container)`
  /* align-items: center;
  display: flex; */
  height: 3.5rem;
`

const StyledBrand = styled.div`
  /* display: inline;
  margin: 0 1rem 0 0; */
`

const StyledLink = styled.span`
  margin-right: 1.5rem;
`

Copyright.propTypes = {
  brand: string.isRequired,
  links: array
}
