/**
 * Link
 */

// React
import React, { Component } from 'react'
import { bool, object, oneOfType, string } from 'prop-types'

// Next
import NextLink from 'next/link'

export class Link extends Component {
  static propTypes = {
    passHref: bool,
    to: oneOfType([
      object,
      string
    ]),
    type: string
  }

  render () {
    const { children, passHref, to } = this.props

    const obj = (typeof to === 'object') ? to : { href: to }

    return (
      <NextLink {...obj} passHref={passHref}>
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