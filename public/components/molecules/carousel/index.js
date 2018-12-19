/**
 * Carousel
 */

// React
import React, { Component } from 'react'
import { array, string } from 'prop-types'

// UI
import { Column, Container, Link, Row } from '../../'

// Style
import styled, { withTheme } from 'styled-components'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

//import $ from "jquery"

import { loadjs, canUseDOM } from './domutil'

export const Carousel = withTheme(
  class Carousel extends Component {
    state = {
      currentSlide: 0,
    }

    static propTypes = {
    }

    getSlickParams() {
      let slickParams = {
        infinite: true,
        /* centerMode: true, */
        dots: false,
        slidesToScroll: 1,
        /* appendArrows: Selector, htmlString, Array, Element, jQuery  */
        /* appendDots: Selector, htmlString, Array, Element, jQuery  */
      }

      // TODO: check https://stackoverflow.com/a/38755312/1948511 width-handling solution
      if (window.innerWidth < 450) {
        slickParams = {
          ...slickParams,
          arrows: false,             
          slidesToShow: 1.06,
          initialSlide: this.state.currentSlide || 1,  // 1 - to fix bug of displaying last slide
        }
      } else {
        slickParams = {
          ...slickParams,
          arrows: true,
          prevArrow: '#slider-prev-button',
          nextArrow: '#slider-next-button',
          initialSlide: this.state.currentSlide || 0, 

          /* centerMode: true, */
          slidesToShow: 1.667,  // magic number to display one slide at center and two BIG beside 
        }
      }
      return slickParams
    }

    initCarousel () {
      $(".slider").slick(this.getSlickParams())
      $(".slider").on('afterChange', this.handleSlideChanged)
    }

    handleSlideChanged = (event, slick, currentSlide) => {
      this.setState({ currentSlide })
    }

    handleWindowResize = () => {
      $('.slider').slick('unslick')
      this.initCarousel()
    }
    
    componentDidMount () {
      if (!canUseDOM) return;

      //!!temporary
      Promise.resolve(
      ).then( () => loadjs('https://code.jquery.com/jquery-2.2.0.min.js')
      ).then( () => loadjs('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js')
      ).then( () => {
        this.initCarousel()
      })

      window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount () {
      if (!canUseDOM) return;

      window.removeEventListener("resize", this.handleWindowResize);
      $('.slider').slick('unslick')
    }
    
    render () {
      return (
        <CarouselStyled className="carousel">
          <CarouselButton type="prev" id="slider-prev-button">&lt;</CarouselButton>
          <CarouselButton type="next" id="slider-next-button">&gt;</CarouselButton>
          <section className="slider">
            { this.props.children }
          </section>
        </CarouselStyled>
      )
    }
  }
)

const CarouselStyled = styled.section`
  /* border: dotted; */
  position: relative; /* to position arrows absolute inside container */
`

const CarouselButton = styled.div`      
  @media only screen and (max-width: 450px) {
    display: none;
  }

  position: absolute;
  z-index: 10;

  font: 48px bold;
  top: calc(50% - 0.5em);
  
  ${ ({ type }) => type === 'prev' ? 'left: 12%' : 'right: 12%' }
`  


