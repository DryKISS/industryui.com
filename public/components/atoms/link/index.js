/**
 * Link
 */

// React
import React, { Component } from 'react'
import { bool, object, oneOfType, string } from 'prop-types'

// Next
import NextLink from 'next/link'

// Style
import { withTheme } from 'styled-components'

export const Link = withTheme(
  class Link extends Component {
    static propTypes = {
      passHref: bool,
      to: oneOfType([
        object,
        string
      ]),
      type: object
    }

    render () {
      const { children, passHref, to } = this.props

      return (
        <NextLink href={to} passHref={passHref}>
          {children}
        </NextLink>

      // // Mailto Type
      // type === 'mailto'
      //   ? <a
      //     href={`mailto:${to}`}
      //     {...other}
      //   />

      //   // Test for an external link
      //   : /^https?:\/\//.test(to)
      //     ? <a
      //       href={to}
      //       target='_blank'
      //       {...other}
      //     />
      //     : <NextLink activeClassName='active' to={to} {...other} />
      )
    }
  }
)

// a {
//   background-color: transparent;
// }
