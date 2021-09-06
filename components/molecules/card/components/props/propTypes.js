/**
 * Card - Props
 */

// React
import { any, bool, func, node, object, oneOf, oneOfType, string } from 'prop-types'

// UI
import THEME_CONTEXT from '../../../../constants/context'

const CardPropTypes = {
  alt: string,
  body: node,
  bordered: bool,
  center: bool,
  children: node,
  className: any,
  context: oneOf(Object.values(THEME_CONTEXT)),
  ctaFunc: func,
  ctaLink: string,
  ctaTitle: string,
  deck: bool,
  footer: string,
  fullHeight: bool,
  header: string,
  headerAlign: string,
  headerContext: oneOf(Object.values(THEME_CONTEXT)),
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

export default CardPropTypes
