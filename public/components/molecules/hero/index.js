/**
 * Hero
 */

// React
import React, { Component } from 'react'
import { array, number, objectOf, oneOfType, string } from 'prop-types'

// UI
import { Button, Container, Column, Heading, Image, Link, Row } from '../../'

// Style
import styled, { withTheme } from 'styled-components'

export const Hero = withTheme(
  class Hero extends Component {
    static propTypes = {
      alt: string,
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

    renderButtons = () => {
      const { buttons } = this.props

      return buttons.map(({ content, to }, index) => (
        <Link to={to} key={index}>
          <Button context='primary' size='lg'>{content}</Button>
        </Link>
      ))
    }

    renderLeft = () => {
      const { buttons, strapline, title } = this.props

      return (
        <StyledColumn md={6}>
          { title && <StyledTitle as='h1' children={title} /> }
          { strapline && <StyledStrapline as='h2' children={strapline} /> }
          { buttons && this.renderButtons() }
        </StyledColumn>
      )
    }

    renderImage = () => {
      const { alt, image } = this.props

      return (
        <Column md={6}>
          <StyledImageContainer>
            <StyledImage alt={alt} src={image} />
          </StyledImageContainer>
        </Column>
      )
    }

    render () {
      const { image, title } = this.props

      return (
        <StyledHero className='Hero'>

          <Container>

            <Row>
              { title && this.renderLeft() }
              { image && this.renderImage() }
            </Row>

          </Container>

          <StyledSeperator viewBox='0 0 1366 64' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M1366 54v10H0V8c128.49 26.67 249.904 44.498 364 46h31c249.862-3.741 343.245-65.86 638-52 126.104 5.833 235.532 22.207 333 52z'
              fill='#FFF'
              fillRule='evenodd'
            />
          </StyledSeperator>

        </StyledHero>
      )
    }
  }
)

// Style
const StyledHero = styled.header`
  background-color: #0679d8;
  background-image: ${props => props.background ? `url(${props.background})` : 'none'};
  background-position: center;
  background-size: cover;
  color: #fff;
`

const StyledColumn = styled(Column)`
  margin: 0 auto;
  max-width: 300px;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    margin: 0;
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
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.25rem;
  margin: 0 0 2rem 0;
`

const StyledImageContainer = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: -36px;
    width: initial;
  }
`

const StyledImage = styled(Image)`
  margin-top: 1rem;
  margin-bottom: -23px;
  width: 60%;
`

const StyledSeperator = styled.svg`
  margin-bottom: -.4rem;
  position: relative;

  @media (min-width: 768px) {
    margin-bottom: -.5rem;
  }
`

// import { configuration } from '../../atoms/grid/constants'

// export default css`
//   .Hero {
//     background-color: #0679d8;
//     background-position: center;
//     background-size: cover;
//     color: #fff;
//   }

//   :global(.Hero-cta) {
//     margin: 0 auto;
//     max-width: 300px;
//     text-align: center;
//     width: 100%;
//   }

//   .Hero-title {
//     font-size: 2.25rem;
//     font-weight: 600;
//     line-height: 2.75rem;
//     margin-bottom: 2rem;
//   }

//   .Hero-strapline {
//     font-size: 1rem;
//     font-weight: normal;
//     line-height: 1.25rem;
//     margin: 0 0 2rem 0;
//   }

//   .Hero-image {
//     text-align: center;
//   }

//   .Hero-dog {
//     margin-top: 1rem;
//     margin-bottom: -23px;
//     width: 60%;
//   }

//   .Hero-curve {
//     margin-bottom: -.4rem;
//     position: relative;
//   }

//   // MD
//   @media (min-width: ${configuration.breakpoints.md}px) {
//     :global(.Hero-cta) {
//       margin: 0;
//       text-align: initial;
//     }

//     .Hero-title {
//       font-size: 5rem;
//       line-height: 5rem;
//     }

//     .Hero-dog {
//       margin-bottom: -36px;
//       width: initial;
//     }

//     .Hero-curve {
//       margin-bottom: -.5rem;
//     }
//   }
//   `
