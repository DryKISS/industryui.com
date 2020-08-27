/**
 * Carousel
 */

// React
import React, { useState, useCallback } from "react"

// Style
import styled from "styled-components"
import { CarouselArrow } from "./arrow"
import { CarouselSampleSlide } from "./sample"
import { Icon, Pagination } from "../../../"
import { CarouselDefaultProps, CarouselPropTypes } from "./props"
import { SIZE } from "index"
const GoTo = {
  Next: "next",
  Previous: "prev",
}
export const Carousel = ({
  arrowContext,
  arrowPosition,
  children,
  fullWidth,
  height,
  leftArrowIcon,
  paginationProps,
  paginationPosition,
  rightArrowIcon,
  showArrows,
  showPagination,
  slides,
  width,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const dataSource = slides || children

  const changeSlide = useCallback(
    (target) => {
      const lastIndex = dataSource.length - 1
      let index = currentImageIndex + (target === GoTo.Previous ? -1 : 1)
      if (index < 0) {
        index = lastIndex
      } else if (index > lastIndex) {
        index = 0
      }
      setCurrentImageIndex(index)
    },
    [dataSource.length, currentImageIndex]
  )

  const renderPagination = () => (
    <PaginationWrapper>
      <Pagination
        onPageChange={(page) => setCurrentImageIndex(page - 1)}
        currentPage={currentImageIndex + 1}
        pageCount={dataSource.length}
        showNextAndPrev
        prevLabel={<Icon icon="chevron-left" />}
        nextLabel={<Icon icon="chevron-right" />}
        size={SIZE.XS}
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
          <CarouselArrow
            context={arrowContext}
            clickFunction={() => changeSlide(GoTo.Previous)}
            direction="left"
            icon={leftArrowIcon}
            position={arrowPosition}
          />
        )}

        {slides ? <CarouselSampleSlide {...current} /> : current || children}

        {hasNavigation && showPagination && paginationPosition === "inside" && renderPagination()}

        {hasNavigation && showArrows && (
          <CarouselArrow
            context={arrowContext}
            clickFunction={() => changeSlide(GoTo.Next)}
            direction="right"
            icon={rightArrowIcon}
            position={arrowPosition}
          />
        )}
      </Wrapper>

      {hasNavigation && showPagination && paginationPosition === "outside" && renderPagination()}
    </>
  )
}

const Wrapper = styled.div`
  height: ${({ height }) => height};
  min-height: ${({ height }) => height};
  margin: 0;
  position: relative;
  width: ${({ width, fullWidth }) => (fullWidth ? "100%" : width)};
`

const PaginationWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
  box-sizing: border-box;
`

Carousel.propTypes = CarouselPropTypes

Carousel.defaultProps = CarouselDefaultProps
