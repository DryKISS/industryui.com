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

import jQuery from 'jquery'
import slick from 'slick-carousel' // seems enough for loading slick.js

import { loadjs } from './domutil'

export const Carousel = withTheme(
  class Carousel extends Component {
    state = {
      currentSlide: null,
      slideCount: null,
    }

    static propTypes = {
    }

    getSlickParams() {
      //console.log('GSP')
      const { slideCount, currentSlide } = this.state
      let slickParams = {
        infinite: true,
        /* centerMode: true, */
        dots: false,
        slidesToScroll: 1,
      }

      // TODO: check https://stackoverflow.com/a/38755312/1948511 width-handling solution
      if (window.innerWidth < 450) {
                       
        //const initialSlide = this.state.slideCount
        console.log('>>', this.state.currentSlide, this.state.slideCount)
        slickParams = {
          ...slickParams,
          arrows: false,             
          slidesToShow: 1.06, //this.state.slideCount == 1 ? 1 : 1.06, // fix: wide>narrow resize with 1 slide
        }

        if (slideCount) {
          slickParams.initialSlide = (currentSlide + 1) % slideCount
        }

      } else {
        slickParams = {
          ...slickParams,
          arrows: true,
          prevArrow: '#slider-prev-button',
          nextArrow: '#slider-next-button',
          slidesToShow: 1.667,  // magic number to display one slide at center and two BIG beside 
        }
        if (currentSlide) {
          slickParams.initialSlide = currentSlide
        }
      }
      return slickParams
    }

    initCarousel () {
      // update count of slides  by recipy https://stackoverflow.com/a/25847520/1948511 
      jQuery(".slider").on('init reInit beforeChange', (event, slick) => {
        //console.log('IRA')
        this.setState({ slideCount: slick.slideCount })
      }
      )

      jQuery(".slider").on('afterChange', this.handleSlideChanged)

      jQuery(".slider").slick(this.getSlickParams())
    }

    handleSlideChanged = (event, slick, currentSlide, nextSlide) => {
      //console.log('HSC')
      this.setState({
        currentSlide: currentSlide
      })
    }

    handleWindowResize = () => {
      jQuery('.slider').slick('unslick')
      this.initCarousel()
    }
    
    componentDidMount () {
      if (typeof window === 'undefined') return;

      window.jQuery = jQuery  // to make slick.js work

      //works but hacky script loading way
      /* Promise.resolve(
       * ).then( () => loadjs('https://code.jquery.com/jquery-2.2.0.min.js')
       * ).then( () => loadjs('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js')
       * ).then( () => {
       *   window.jQuery = jQuery  // to make slick.js work
       *   this.initCarousel()
       * })
       */
      // works with timeout only somewhy TODO: check on built code
      setTimeout( () => {
        this.initCarousel()
        window.addEventListener("resize", this.handleWindowResize)
      }, 700)  

    }

    componentWillUnmount () {
      if (typeof window === 'undefined') return;

      window.removeEventListener("resize", this.handleWindowResize);
      jQuery('.slider').slick('unslick')
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
  color: white;
  text-shadow: 2px 2px black; 
  
  top: calc(50% - 0.5em);
  
  ${ ({ type }) => type === 'prev' ? 'left: 12%' : 'right: 12%' }
`  


