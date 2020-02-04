/**
 * Link
 */

// React
import { bool, func, node, object, oneOfType, string } from 'prop-types'

// Next
import NextLink from 'next/link'

// UI
import { validatorUri } from '../../'

// Style
import styled from 'styled-components'

export const Link = ({ border, children, onClick, passHref, target, to }) => {
  const obj = typeof to === 'object' ? to : { href: to }

  return !validatorUri(to) ? (
    <NextLink {...obj} passHref={passHref}>
      <StyledLink border={border} onClick={onClick} target={target}>
        {children}
      </StyledLink>
    </NextLink>
  ) : (
    <StyledLink href={to}>{children}</StyledLink>
  )
}

const StyledLink = styled.a`
  background-color: transparent;
  border-bottom: ${({ border, theme }) => (border ? `2px solid ${theme.LINK.underline}` : '')};
  color: ${({ theme }) => theme.LINK.colour};
  display: ${({ border }) => (border ? 'inline-block' : 'block')};
  text-decoration: none;

  &:hover {
    border-bottom: ${({ border, theme }) => (border ? `2px solid ${theme.LINK.underline}` : '')};
    color: ${({ theme }) => theme.LINK.colourDark};
  }
`

Link.propTypes = {
  border: bool,
  children: node,
  onClick: func,
  passHref: bool,
  target: string,
  to: oneOfType([object, string])
}

Link.defaultProps = {
  border: true
}
