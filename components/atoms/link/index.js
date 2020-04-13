/**
 * Link
 */

// React
import { bool, func, node, object, oneOfType, string } from 'prop-types'

// Next
import NextLink from 'next/link'

// UI
import { shadeLinearRgb, validatorUri } from '../../'

// Style
import styled from 'styled-components'

export const Link = ({ border, children, className, onClick, passHref, target, to }) => {
  const obj = typeof to === 'object' ? to : { href: to }

  return !validatorUri(to) ? (
    <NextLink {...obj} passHref={passHref}>
      <StyledLink border={border} className={className} onClick={onClick} target={target}>
        {children}
      </StyledLink>
    </NextLink>
  ) : (
    <StyledLink border={border} className={className} href={to}>
      {children}
    </StyledLink>
  )
}

export const StyledLink = styled.a`
  background-color: transparent;
  border-bottom: ${({ border, theme }) =>
    border ? `2px solid ${shadeLinearRgb(0.2, theme.LINK.underline)}` : ''};
  color: ${({ theme }) => theme.LINK.colour};
  cursor: pointer;
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
