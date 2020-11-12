/**
 * Carousel - Props
 */

import { any, arrayOf, bool, oneOf, node, number, shape, string } from 'prop-types'
import { CONTEXT } from '../../../'
import { PaginationPropTypes } from '../../pagination/components/props'

export const CarouselPropTypes = {
  navContext: oneOf(Object.values(CONTEXT)),
  navPosition: oneOf(['top', 'middle', 'bottom']),
  children: node,
  fullWidth: bool,
  gap: number,
  height: string,
  leftNavIcon: string,
  numberOfItems: any,
  paginationProps: shape(PaginationPropTypes),
  paginationPosition: oneOf(['inside', 'outside']),
  rightnavIcon: string,
  showNavs: bool,
  showPagination: bool,
  slides: arrayOf(
    shape({
      context: string,
      img: string,
      node: node,
      text: string
    })
  ),
  width: string
}

export const CarouselDefaultProps = {
  navContext: CONTEXT.BLACK,
  navPosition: 'middle',
  autoplay: false,
  autoplayInterval: 1000,
  fullWidth: false,
  gap: 10,
  leftNavIcon: 'chevron-left',
  paginationPosition: 'outside',
  rightnavIcon: 'chevron-right',
  showNavs: true,
  showPagination: false
}
