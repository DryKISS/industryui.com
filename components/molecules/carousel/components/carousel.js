/**
 * Carousel
 */

// React
import { useEffect, useState } from 'react'

// Style
import styled, { css } from 'styled-components'
import { Carouselnav } from './nav'
import { CarouselSampleSlide } from './sample'
import { Icon, Pagination, revert } from 'components'
import { CarouselDefaultProps, CarouselPropTypes } from './props'
let interval
export const Carousel = ({
  navContext,
  navPosition,
  autoplay,
  autoplayInterval,
  children,
  fullWidth,
  gap,
  height,
  leftnavIcon,
  leftNavComponent,
  numberOfItems,
  paginationProps,
  paginationPosition,
  rightnavIcon,
  rightNavComponent,
  showNavs,
  showPagination,
  slides,
  width
}) => {
  let dataSource = slides || children
  dataSource = revert(dataSource)
  const [currentImageIndex, setCurrentImageIndex] = useState((slides || children).length - 1)

  useEffect(() => {
    if (autoplay === true) {
      interval = setInterval(() => {
        nextSlide()
      }, autoplayInterval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [currentImageIndex])

  const previousSlide = () => {
    const lastIndex = dataSource.length - 1
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1
    setCurrentImageIndex(index)
  }

  const nextSlide = () => {
    const lastIndex = dataSource.length - 1
    const shouldResetIndex = currentImageIndex === numberOfItems - 1
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1
    setCurrentImageIndex(index)
  }

  const renderPagination = () => (
    <PaginationWrapper>
      <Pagination
        currentPage={dataSource.length - currentImageIndex}
        nextLabel={<Icon icon='chevron-right' />}
        onPageChange={page => {
          setCurrentImageIndex(dataSource.length - page)
        }}
        pageCount={dataSource.length}
        prevLabel={<Icon icon='chevron-left' />}
        showNextAndPrev
        size='xs'
        {...paginationProps}
      />
    </PaginationWrapper>
  )

  const hasNavigation = Array.isArray(dataSource) && dataSource.length > 1

  const navComponents = () => {
    const components = {
      left: (
        <Carouselnav
          context={navContext}
          clickFunction={previousSlide}
          direction='left'
          icon={leftnavIcon}
          position={navPosition}
        />
      ),

      right: (
        <Carouselnav
          context={navContext}
          clickFunction={nextSlide}
          direction='right'
          icon={rightnavIcon}
          position={navPosition}
        />
      )
    }
    if (leftNavComponent) {
      components.left = (
        <NavWrapper componentPosition={navPosition} onClick={nextSlide}>
          {leftNavComponent}
        </NavWrapper>
      )
    }
    if (rightNavComponent) {
      components.right = (
        <NavWrapper componentPosition={navPosition} endNav onClick={previousSlide}>
          {rightNavComponent}
        </NavWrapper>
      )
    }

    return components
  }

  return (
    <>
      <Wrapper width={width} height={height} fullWidth={fullWidth}>
        {hasNavigation && showNavs && navComponents().left}

        {dataSource.map((item, index) => {
          return (
            <ItemWrapper
              gap={gap}
              width={`calc(${100 / numberOfItems}% - ${gap}px)`}
              transform={`translateX(calc(${currentImageIndex - index} * calc(100% + ${gap}px)))`}
              key={'slide' + index}
            >
              {slides ? <CarouselSampleSlide {...item} /> : dataSource[index]}
            </ItemWrapper>
          )
        })}

        {hasNavigation && showPagination && paginationPosition === 'inside' && renderPagination()}

        {hasNavigation && showNavs && navComponents().right}
      </Wrapper>

      {hasNavigation && showPagination && paginationPosition === 'outside' && renderPagination()}
    </>
  )
}

const ItemWrapper = styled.div`
  position: absolute;
  transition: all 0.5s ease;
  ${({ gap, transform, width }) => css`
    margin-left: ${gap / 2}px;
    transform: ${transform};
    width: ${width};
  `}
`

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
  overflow: hidden;
  height: ${({ height }) => height};
  min-height: ${({ height }) => height};
  margin: 0;
  position: relative;
  width: ${({ width, fullWidth }) => (fullWidth ? '100%' : width)};
`

const PaginationWrapper = styled.div`
  box-sizing: border-box;
  margin: 1rem 0;
  width: 100%;
`

Carousel.defaultProps = CarouselDefaultProps

Carousel.propTypes = CarouselPropTypes
