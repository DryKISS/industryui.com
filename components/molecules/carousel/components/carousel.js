/**
 * Carousel
 */

// React
import { useEffect, useState } from 'react'

// Style
import styled, { css } from 'styled-components'
import { CarouselArrow } from './arrow'
import { CarouselSampleSlide } from './sample'
import { Icon, Pagination, revert, ResizeDetector } from 'components'
import { CarouselDefaultProps, CarouselPropTypes } from './props'
let interval
export const Carousel = ({
  arrowContext,
  arrowPosition,
  autoplay,
  autoplayInterval,
  children,
  fullWidth,
  gap,
  height,
  leftArrowIcon,
  leftNavComponent,
  numberOfItems,
  paginationProps,
  paginationPosition,
  rightArrowIcon,
  rightNavComponent,
  showArrows,
  showPagination,
  slides,
  width
}) => {
  let dataSource = slides || children

  dataSource = revert(dataSource)

  const [currentImageIndex, setCurrentImageIndex] = useState((slides || children).length - 1)
  const [NumberOfItems, setNumberOfItems] = useState(
    typeof numberOfItems === 'number' ? numberOfItems : 1
  )
  console.log(typeof numberOfItems)
  const resetNumberOfItems = width => {
    console.log(width)
    let found = false
    for (const key in numberOfItems) {
      if (width <= Number(key) && found === false) {
        found = true
        setNumberOfItems(numberOfItems[key])
      }
    }
    if (found === false) {
      setNumberOfItems(10)
    }
  }

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
    const shouldResetIndex = currentImageIndex === NumberOfItems - 1
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
        {typeof numberOfItems !== 'number' && (
          <ResizeDetector onResize={({ width }) => resetNumberOfItems(width)} />
        )}

        {hasNavigation && showArrows && navComponents().left}

        {dataSource.map((item, index) => {
          return (
            <ItemWrapper
              gap={gap}
              width={`calc(${100 / NumberOfItems}% - ${gap}px)`}
              transform={`translateX(calc(${currentImageIndex - index} * calc(100% + ${gap}px)))`}
              key={'slide' + index}
            >
              {slides ? <CarouselSampleSlide {...item} /> : dataSource[index]}
            </ItemWrapper>
          )
        })}

        {hasNavigation && showPagination && paginationPosition === 'inside' && renderPagination()}

        {hasNavigation && showArrows && navComponents().right}
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
