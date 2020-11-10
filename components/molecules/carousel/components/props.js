/**
 * Carousel - Props
 */

import { arrayOf, bool, object, oneOf, node, number, shape, string } from 'prop-types'
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
  numberOfItems: object,
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
  numberOfItems: {
    600: 1,
    900: 3,
    1200: 8,
    1400: 10,
    4000: 12
  },
  paginationPosition: 'outside',
  rightArrowIcon: 'chevron-right',
  showArrows: true,
  showPagination: false
}
