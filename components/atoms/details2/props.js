/**
 * Details - Props
 */

// React
import { any, bool, oneOf, string } from 'prop-types'

// UI
import { CONTEXT } from '../..'

export const DetailsPropTypes = {
  children: any,
  content: any,
  context: oneOf(Object.values(CONTEXT)),
  icon: string,
  open: bool,
  title: string.isRequired,
  Toolbar: any
}

export const DetailsDefaultProps = {
  context: 'primary',
  open: false
}
