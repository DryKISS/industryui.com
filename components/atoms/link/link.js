/**
 * Link
 */

// React
import React from 'react'

// Next
import NextLink from 'next/link'

// UI
import validatorUri from '../../utils/validator/uri/uri'
import StyledLink from './components/style'

// Props
import { defaultProps, propTypes } from './components/props'

const Link = ({
  border,
  children,
  className,
  context,
  fullWidth,
  locale,
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
    <NextLink {...obj} passHref={passHref} replace={replace} scroll={scroll} shallow={shallow}>
      <StyledLink
        border={border}
        className={className}
        context={context}
        fullWidth={fullWidth}
        onClick={onClick}
        target={target}
        locale={locale}
      >
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
      target={target}
      locale={locale}
    >
      {children}
    </StyledLink>
  )
}

Link.propTypes = propTypes
Link.defaultProps = defaultProps

export default Link
