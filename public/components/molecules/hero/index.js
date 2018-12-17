/**
 * Hero
 */

// React
import React, { Component } from 'react'
import { any, array, number, objectOf, oneOfType, string } from 'prop-types'

// UI
import { Container, Column, Heading, Row } from '../../'
import { HeroButtons, HeroImage } from './components'

// Style
import styled, { withTheme } from 'styled-components'

export const Hero = withTheme(
  class Hero extends Component {
    static propTypes = {
      alt: string,
      className: any,
      background: string,
      buttons: array,
      image: string,
      strapline: string,
      style: objectOf(oneOfType([
        number,
        string
      ])),
      title: string.isRequired
    }

    static defaultProps = {
      style: {}
    }

    renderLeft = () => {
      const { buttons, strapline, title } = this.props

      return (
        <StyledColumn md={6}>
          { title && <StyledTitle as='h1' children={title} /> }
          { strapline && <StyledStrapline as='h2' children={strapline} /> }
          { buttons && <HeroButtons buttons={buttons} /> }
        </StyledColumn>
      )
    }

    render () {
      const { alt, background, className, image, title } = this.props

      return (
        <StyledHero background={background} className={className}>

          <Container>

            <Row>
              { title && this.renderLeft() }
              { image && <HeroImage alt={alt} image={image} /> }
            </Row>

          </Container>

        </StyledHero>
      )
    }
  }
)

// Style
const StyledHero = styled.header`
  background-color: #fff;
  background-image: ${props => props.background ? `url(${props.background})` : 'none'};
  background-position: center;
  background-size: 20%;
  border-bottom: 4px solid #ecf0f3;
  margin-top: -2rem;
`

const StyledColumn = styled(Column)`
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    text-align: initial;
  }
`

const StyledTitle = styled(Heading)`
  font-size: 2.25rem;
  line-height: 2.75rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 5rem;
    line-height: 5rem;
  }
`

const StyledStrapline = styled(Heading)`
  font-size: 1.25rem;
  font-weight: normal;
  line-height: 1.5rem;
  margin: 0 0 2rem 0;
`
