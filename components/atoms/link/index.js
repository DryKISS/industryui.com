/**
 * Link
 */

// React
import { bool, node, object, oneOfType, string } from 'prop-types'

// Next
import NextLink from 'next/link'

// UI
import { validatorUri } from '../../'

export const Link = ({ children, passHref, to }) => {
  const obj = (typeof to === 'object') ? to : { href: to }

  return (
    !validatorUri(to)
      ? <NextLink {...obj} passHref={passHref}>
        {children}
      </NextLink>
      : <a
        className={children.type.componentStyle && `${children.type.componentStyle.componentId} ${children.type.componentStyle.lastClassName}`}
        href={to}
        {...children.props}
      >
        {children.props.children}
        </a>
  )
}

Link.propTypes = {
  children: node,
  passHref: bool,
  to: oneOfType([
    object,
    string
  ])
}
