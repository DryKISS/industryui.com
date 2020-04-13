/**
 * Link
 */

// React
import { any, bool, func, node, object, oneOf, oneOfType, string } from 'prop-types'

// Next
import NextLink from 'next/link'

// UI
import { CONTEXT, shadeLinearRgb, validatorUri } from '../../'

// Style
import styled from 'styled-components'

export const Link = ({ border, children, className, context, onClick, passHref, target, to }) => {
  const obj = typeof to === 'object' ? to : { href: to }

  return !validatorUri(to) ? (
    <NextLink {...obj} passHref={passHref}>
      <StyledLink
        border={border}
        className={className}
        context={context}
        onClick={onClick}
        target={target}
      >
        {children}
      </StyledLink>
    </NextLink>
  ) : (
    <StyledLink border={border} context={context} className={className} href={to}>
      {children}
    </StyledLink>
  )
}

export const StyledLink = styled.a`
  background-color: transparent;
  border-bottom: ${({ border, context, theme }) =>
    border && `2px solid ${shadeLinearRgb(0.88, theme.COLOUR[context] || theme.LINK.colour)}`};
  color: ${({ context, theme }) => theme.COLOUR[context] || theme.LINK.colour};
  cursor: pointer;
  display: ${({ border }) => (border ? 'inline-block' : 'block')};
  outline: none;
  text-decoration: none;

  &:hover,
  &.link--hover {
    border-bottom: ${({ border, context, theme }) =>
      border && `2px solid ${shadeLinearRgb(0.8, theme.COLOUR[context] || theme.LINK.colour)}`};
    color: ${({ context, theme }) =>
      shadeLinearRgb(-0.2, theme.COLOUR[context] || theme.LINK.colour)};
  }

  &:active,
  &.link--active {
    border-bottom: ${({ border, theme }) =>
      border && `2px solid ${shadeLinearRgb(0.8, theme.COLOUR.active)}`};
    color: ${({ theme }) => theme.COLOUR.active};
  }

  &:visited,
  &.link--visited {
    border-bottom: ${({ border, theme }) =>
      border && `2px solid ${shadeLinearRgb(0.8, theme.COLOUR.visited)}`};
    color: ${({ theme }) => theme.COLOUR.visited};
  }
`

Link.propTypes = {
  border: bool,
  children: node.isRequired,
  className: any,
  context: oneOf(Object.values(CONTEXT)),
  onClick: func,
  passHref: bool,
  target: string,
  to: oneOfType([object, string]).isRequired
}

Link.defaultProps = {
  border: true
}
