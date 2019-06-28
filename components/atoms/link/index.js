/**
 * Link
 */

// React
import { bool, object, oneOfType, string } from 'prop-types'

// Next
import NextLink from 'next/link'

export const Link = ({ children, passHref, to }) => {
  const obj = (typeof to === 'object') ? to : { href: to }

  return (
    <NextLink {...obj} passHref={passHref}>
      {children}
    </NextLink>
  )
}

Link.propTypes = {
  passHref: bool,
  to: oneOfType([
    object,
    string
  ]),
  type: string
}

// a {
//   background-color: transparent;
//   color: #0679d8;
//   text-decoration: none;

//   &:hover {
//     color: #e8095e;
//   }
// }
