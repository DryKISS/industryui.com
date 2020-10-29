/**
 * Carousel
 */

// React
import { useState } from 'react'

// Style
import styled, { css } from 'styled-components'
import { CarouselArrow } from './arrow'
import { CarouselSampleSlide } from './sample'
import { Icon, Pagination } from 'components'
import { CarouselDefaultProps, CarouselPropTypes } from './props'

export const Carousel = ({
  arrowContext,
  arrowPosition,
  children,
  fullWidth,
  height,
  leftArrowIcon,
  leftNavComponent,
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
        currentPage={currentImageIndex + 1}
        nextLabel={<Icon icon='chevron-right' />}
        onPageChange={page => setCurrentImageIndex(page - 1)}
        pageCount={dataSource.length}
        prevLabel={<Icon icon='chevron-left' />}
        showNextAndPrev
        size='xs'
        {...paginationProps}
      />
    </PaginationWrapper>
  )

  const hasNavigation = Array.isArray(dataSource) && dataSource.length > 1
  const current = dataSource[currentImageIndex]

  const navComponents = () => {
    const components = {
      left: (
        <CarouselArrow
          context={arrowContext}
          clickFunction={previousSlide}
          direction='left'
          icon={leftArrowIcon}
          position={arrowPosition}
        />
      ),
      right: (
        <CarouselArrow
          context={arrowContext}
          clickFunction={nextSlide}
          direction='right'
          icon={rightArrowIcon}
          position={arrowPosition}
        />
      )
    }
    if (leftNavComponent) {
      components.left = (
        <NavWrapper componentPosition={arrowPosition} onClick={nextSlide}>
          {leftNavComponent}
        </NavWrapper>
      )
    }
    if (rightNavComponent) {
      components.right = (
        <NavWrapper componentPosition={arrowPosition} endNav onClick={previousSlide}>
          {rightNavComponent}
        </NavWrapper>
      )
    }

    return components
  }

  return (
    <>
      <Wrapper width={width} height={height} fullWidth={fullWidth}>
        {hasNavigation && showArrows && navComponents().left}

        {slides ? <CarouselSampleSlide {...current} /> : current || children}

        {hasNavigation && showPagination && paginationPosition === 'inside' && renderPagination()}

        {hasNavigation && showArrows && navComponents().right}
      </Wrapper>

      {hasNavigation && showPagination && paginationPosition === 'outside' && renderPagination()}
    </>
  )
}
const NavWrapper = styled.div`
  align-items: ${({ componentPosition }) =>
    componentPosition === 'top'
      ? 'flex-start'
      : componentPosition === 'bottom'
      ? 'flex-end'
      : 'center'};
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  cursor: pointer;
  ${({ endNav }) =>
    endNav === true &&
    css`
      right: 0;
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
