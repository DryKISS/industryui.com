/**
 * Link
 */

// React
import React from 'react'

// Next
import NextLink from 'next/link'

// Style
import styled from 'styled-components'

// UI
import { shadeLinearRgb } from '../../utils/colour/colour'
import { validatorUri } from '../../utils/validator/uri'
import { THEME_CONTEXT } from '../../theme/constants/context'

// Props
import { defaultProps, propTypes } from './props'

export const Link = ({
  border,
  children,
  className,
  context,
  fullWidth,
  onClick,
  passHref,
  replace,
  scroll,
  shallow,
  target,
  to
}) => {
  const obj = typeof to === 'object' ? to : { href: to }

  return !validatorUri(to) ? (
    <NextLink
      {...obj}
      passHref={passHref}
      replace={replace}
      scroll={scroll}
      shallow={shallow}>
      <StyledLink
        border={border}
        className={className}
        context={context}
        fullWidth={fullWidth}
        onClick={onClick}
        target={target}>
        {children}
      </StyledLink>
    </NextLink>
  ) : (
    <StyledLink
      border={border}
      className={className}
      context={context}
      fullWidth={fullWidth}
      href={to}
      target={target}>
      {children}
    </StyledLink>
  )
}

export const StyledLink = styled.a`
  background-color: transparent;
  border-bottom: ${({ border, context, theme }) =>
    border &&
    `2px solid ${shadeLinearRgb(
      0.88,
      theme.COLOUR[context] || theme.LINK.colour
    )}`};
  display: ${({ border }) => (border ? 'inline-block' : 'block')};
  color: ${({ context, theme }) => {
    if (context === THEME_CONTEXT.INITIAL) {
      return THEME_CONTEXT.INITIAL
    }

    return theme.COLOUR[context] || theme.LINK.colour
  }};
  cursor: pointer;
  max-width: 100%;
  outline: none;
  text-decoration: none;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};

  &:hover,
  &.link--hover {
    border-bottom: ${({ border, context, theme }) =>
      border &&
      `2px solid ${shadeLinearRgb(
        0.8,
        theme.COLOUR[context] || theme.LINK.colour
      )}`};
    color: ${({ context, theme }) =>
      shadeLinearRgb(-0.2, theme.COLOUR[context] || theme.LINK.colour)};
  }

  &:active,
  &.link--active {
    border-bottom: ${({ border, theme }) =>
      border && `2px solid ${shadeLinearRgb(0.8, theme.LINK.active)}`};
    color: ${({ theme }) => theme.LINK.active};
  }

  &:visited,
  &.link--visited {
    border-bottom: ${({ border, theme }) =>
      border && `2px solid ${shadeLinearRgb(0.8, theme.LINK.visited)}`};
    color: ${({ theme }) => theme.LINK.visited};
  }
`

Link.propTypes = propTypes
Link.defaultProps = defaultProps
