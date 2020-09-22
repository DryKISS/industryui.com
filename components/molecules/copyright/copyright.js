/**
 * Copyright
 */

// React
import React from 'react'
import { array, bool, oneOf, shape, string } from 'prop-types'

// UI
import { Column, Container, CONTEXT, Icon, Link, Row } from '../../'

// Style
import styled, { css } from 'styled-components'

const year = new Date().getFullYear()

export const Copyright = ({ brand, fixed, icon, links }) => {
  const renderLinks = () => {
    return links.map(({ name, to }, index) => (
      <Link key={index} passHref to={to}>
        <StyledLink>{name}</StyledLink>
      </Link>
    ))
  }

  return (
    <StyledCopyright fixed={fixed} data-cy='copyright'>
      <StyledContainer>
        <Row>
          <Column md={links.length > 0 ? 3 : 12}>
            <StyledBrand>
              <StyledIcon {...icon} />
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
  ${({ fixed }) =>
    fixed &&
    css`
      bottom: 0;
      position: fixed;
      left: 0;
      width: 100%;
      z-index: 1;
    `}
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
  fixed: bool,
  icon: shape({
    context: oneOf(Object.values(CONTEXT)),
    icon: string,
    prefix: string
  }),
  links: array
}

Copyright.defaultProps = {
  fixed: false,
  icon: {
    context: 'primary',
    icon: 'copyright',
    prefix: 'fas'
  },
  links: []
}
