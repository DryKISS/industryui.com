/**
 * Card - Props
 */

import { any, bool, func, node, object, oneOf, oneOfType, string } from 'prop-types'

// UI
import { CONTEXT } from '../../../'

export const CardPropTypes = {
  alt: string,
  body: node,
  bordered: bool,
  center: bool,
  children: node,
  className: any,
  context: oneOf(Object.values(CONTEXT)),
  ctaFunc: func,
  ctaLink: string,
  ctaTitle: string,
  deck: bool,
  footer: string,
  fullHeight: bool,
  header: string,
  to: oneOfType([object, string]),
  horizontal: bool,
  icon: string,
  image: string,
  role: string,
  rounded: bool,
  shadow: bool,
  showCta: bool,
  style: object,
  title: string,
  titleNoWrap: bool
}

export const CardDefaultProps = {
  bordered: false,
  context: 'white',
  footerContext: 'light',
  headerContext: 'light',
  role: 'article',
  rounded: true,
  shadow: false,
  titleNoWrap: false
}
