/**
 * Carousel (Pure React Carousel)
 */

// React
import React, { Children, cloneElement } from 'react'
import { string, array } from 'prop-types'

// PRC
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

export const PRCarousel = ({ children, width, height }) => {
  return (
    <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3}>
      <Slider>
        {Children.map(children, (child, index) => {
          return cloneElement(child, {
            index
          })
        })}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  )
}

PRCarousel.propTypes = {
  children: array,
  width: string,
  height: string
}

export const PRCarouselSlide = Slide
