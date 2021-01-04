/**
 * Copyright
 */

// React
import { memo, useContext } from 'react'
import { array, bool, oneOf, shape, string } from 'prop-types'

// UI
import { Column, ConfigContext, Container, CONTEXT, Icon, Link, Row } from '../../'

// Style
import styled, { css } from 'styled-components'

const year = new Date().getFullYear()

export const Copyright = memo(({ fixed, icon, links }) => {
  const { Brand } = useContext(ConfigContext)

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
        <StyledRow>
          <Column md={links.length > 0 ? 3 : 12}>
            <StyledIcon {...icon} />
            {year} — {Brand.name}
          </Column>

          {links.length > 0 && <StyledColumn md={9}>{renderLinks()}</StyledColumn>}
        </StyledRow>
      </StyledContainer>
    </StyledCopyright>
  )
})

const StyledCopyright = styled.section`
  background-color: ${({ theme }) => theme.COPYRIGHT.background};
  color: ${({ theme }) => theme.COPYRIGHT.colour};
  display: flex;
  font-size: 0.75rem;
  height: 3.5rem;
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
  display: flex;
  flex: 1;
  align-items: center;
`

const StyledRow = styled(Row)`
  flex: 1;
`

const StyledColumn = styled(Column)`
  display: flex;
  justify-content: flex-end;
`

const StyledIcon = styled(Icon)`
  margin: auto 0;
  padding-right: 0.25rem;
`

const StyledLink = styled.span`
  margin-right: 1.5rem;
`

Copyright.propTypes = {
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
