/**
 * Carousel - Props
 */

import { any, arrayOf, bool, oneOf, node, number, shape, string } from 'prop-types'
import { CONTEXT } from '../../../'
import { PaginationPropTypes } from '../../pagination/components/props'

export const CarouselPropTypes = {
  arrowContext: oneOf(Object.values(CONTEXT)),
  arrowPosition: oneOf(['top', 'middle', 'bottom']),
  children: node,
  fullWidth: bool,
  gap: number,
  height: string,
  leftArrowIcon: string,
  numberOfItems: any,
  paginationProps: shape(PaginationPropTypes),
  paginationPosition: oneOf(['inside', 'outside']),
  rightArrowIcon: string,
  showArrows: bool,
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
  arrowContext: CONTEXT.BLACK,
  arrowPosition: 'middle',
  autoplay: false,
  autoplayInterval: 1000,
  fullWidth: false,
  gap: 10,
  leftArrowIcon: 'chevron-left',
  paginationPosition: 'outside',
  rightArrowIcon: 'chevron-right',
  showArrows: true,
  showPagination: false
}
