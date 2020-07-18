/**
 * Carousel - Props
 */

import { arrayOf, bool, oneOf, node, shape, string } from 'prop-types'
import { CONTEXT } from '../../../'
import { PaginationPropTypes } from '../../pagination/components/props'

export const CarouselPropTypes = {
  arrowContext: oneOf(Object.values(CONTEXT)),
  arrowPosition: oneOf(['top', 'middle', 'bottom']),
  children: node,
  fullWidth: bool,
  height: string,
  leftArrowIcon: string,
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
  fullWidth: false,
  leftArrowIcon: 'chevron-left',
  paginationPosition: 'outside',
  rightArrowIcon: 'chevron-right',
  showArrows: true,
  showPagination: false
}
