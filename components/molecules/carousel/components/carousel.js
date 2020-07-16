/**
 * Carousel
 */

// React
import React, { useState } from 'react'
import { arrayOf, bool, oneOf, node, shape, string } from 'prop-types'

// Style
import styled from 'styled-components'
import { CarouselArrow } from './arrow'
import { CarouselSampleSlide } from './sample'
import { CONTEXT, Icon, Pagination, PaginationPropTypes } from '../../../'

export const Carousel = ({
  arrowContext,
  arrowPosition,
  children,
  fullWidth,
  height,
  leftArrowIcon,
  paginationProps,
  rightArrowIcon,
  showArrows,
  showPagination,
  slides,
  width
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const dataSource = slides || children

  const previousSlide = () => {
    const lastIndex = dataSource.length - 1
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1
    setCurrentImageIndex(index)
  }

  const nextSlide = () => {
    const lastIndex = dataSource.length - 1
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1
    setCurrentImageIndex(index)
  }

  const hasNavigation = Array.isArray(dataSource) && dataSource.length > 1
  const current = dataSource[currentImageIndex]

  return (
    <Wrapper width={width} height={height} fullWidth={fullWidth}>
      {hasNavigation && showArrows && (
        <CarouselArrow
          context={arrowContext}
          clickFunction={previousSlide}
          direction='left'
          icon={leftArrowIcon}
          position={arrowPosition}
        />
      )}

      {slides ? <CarouselSampleSlide {...current} /> : current || children}

      {hasNavigation && showPagination && (
        <PaginationWrapper>
          <Pagination
            onPageChange={page => setCurrentImageIndex(page - 1)}
            currentPage={currentImageIndex + 1}
            pageCount={dataSource.length}
            showNextAndPrev
            prevLabel={<Icon icon='chevron-left' />}
            nextLabel={<Icon icon='chevron-right' />}
            {...paginationProps}
          />
        </PaginationWrapper>
      )}

      {hasNavigation && showArrows && (
        <CarouselArrow
          context={arrowContext}
          clickFunction={nextSlide}
          direction='right'
          icon={rightArrowIcon}
          position={arrowPosition}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: ${({ height }) => height};
  min-height: ${({ height }) => height};
  margin: 0;
  position: relative;
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : width)};
`

const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 80px;
`

Carousel.propTypes = {
  arrowContext: oneOf(Object.values(CONTEXT)),
  arrowPosition: oneOf(['top', 'middle', 'bottom']),
  children: node,
  fullWidth: bool,
  height: string,
  leftArrowIcon: string,
  paginationProps: PaginationPropTypes,
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

Carousel.defaultProps = {
  arrowContext: CONTEXT.BLACK,
  arrowPosition: 'middle',
  fullWidth: false,
  leftArrowIcon: 'chevron-left',
  rightArrowIcon: 'chevron-right',
  showArrows: true,
  showPagination: false
}
