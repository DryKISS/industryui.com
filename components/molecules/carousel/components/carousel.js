/**
 * Carousel
 */

// React
import { useState } from 'react'

// Style
import styled, { css } from 'styled-components'
import { CarouselArrow } from './arrow'
import { CarouselSampleSlide } from './sample'
import { Icon, Pagination } from '../../../'
import { CarouselDefaultProps, CarouselPropTypes } from './props'

export const Carousel = ({
  arrowContext,
  arrowPosition,
  children,
  fullWidth,
  height,
  leftArrowIcon,
  navComponent,
  paginationProps,
  paginationPosition,
  rightArrowIcon,
  rightNavComponent,
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

  const renderPagination = () => (
    <PaginationWrapper>
      <Pagination
        onPageChange={page => setCurrentImageIndex(page - 1)}
        currentPage={currentImageIndex + 1}
        pageCount={dataSource.length}
        showNextAndPrev
        prevLabel={<Icon icon='chevron-left' />}
        nextLabel={<Icon icon='chevron-right' />}
        size='xs'
        {...paginationProps}
      />
    </PaginationWrapper>
  )

  const hasNavigation = Array.isArray(dataSource) && dataSource.length > 1
  const current = dataSource[currentImageIndex]

  return (
    <>
      <Wrapper width={width} height={height} fullWidth={fullWidth}>
        {hasNavigation && showArrows && (
          <>
            {navComponent ? (
              <NavWrapper onClick={nextSlide}>{navComponent}</NavWrapper>
            ) : (
              <CarouselArrow
                context={arrowContext}
                clickFunction={previousSlide}
                direction='left'
                icon={leftArrowIcon}
                position={arrowPosition}
              />
            )}
          </>
        )}

        {slides ? <CarouselSampleSlide {...current} /> : current || children}

        {hasNavigation && showPagination && paginationPosition === 'inside' && renderPagination()}

        {hasNavigation && showArrows && (
          <>
            {navComponent ? (
              <NavWrapper endNav mirrored={!rightNavComponent} onClick={previousSlide}>
                {rightNavComponent ?? navComponent}
              </NavWrapper>
            ) : (
              <CarouselArrow
                context={arrowContext}
                clickFunction={nextSlide}
                direction='right'
                icon={rightArrowIcon}
                position={arrowPosition}
              />
            )}
          </>
        )}
      </Wrapper>

      {hasNavigation && showPagination && paginationPosition === 'outside' && renderPagination()}
    </>
  )
}
const NavWrapper = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  display: flex;
  top: 0;
  align-items: center;
  cursor: pointer;
  ${({ endNav }) =>
    endNav === true &&
    css`
      right: 0;
    `}
  ${({ mirrored }) =>
    mirrored === true &&
    css`
      transform: rotateY(180deg);
    `}
`
const Wrapper = styled.div`
  height: ${({ height }) => height};
  min-height: ${({ height }) => height};
  margin: 0;
  position: relative;
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : width)};
`

const PaginationWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
  box-sizing: border-box;
`

Carousel.propTypes = CarouselPropTypes

Carousel.defaultProps = CarouselDefaultProps
