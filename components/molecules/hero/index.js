/**
 * Hero
 */

// React
import { any, array, number, objectOf, oneOfType, string } from 'prop-types'

// UI
import { Container, Column, Heading, Row } from '../../'
import { HeroButtons, HeroImage } from './components'

// Style
import styled from 'styled-components'

export const Hero = ({
  alt,
  align,
  background,
  buttons,
  className,
  image,
  message,
  strapline,
  title,
  width
}) => {
  const renderLeft = () => {
    return (
      <StyledColumn md={6}>
        { title && <StyledTitle as='h1' children={title} /> }
        { strapline && <StyledStrapline as='h2' children={strapline} /> }
        { buttons && <HeroButtons buttons={buttons} /> }
        { message && <p children={message} /> }
      </StyledColumn>
    )
  }

  return (
    <StyledHero background={background} className={className}>

      <Container>

        <Row>

          { title && renderLeft() }
          { image && <HeroImage alt={alt} align={align} image={image} width={width} /> }

        </Row>

      </Container>

    </StyledHero>
  )
}

Hero.propTypes = {
  alt: string,
  align: string,
  className: any,
  background: string,
  buttons: array,
  image: string,
  strapline: string,
  style: objectOf(oneOfType([
    number,
    string
  ])),
  title: string.isRequired,
  width: number
}

Hero.defaultProps = {
  align: 'flex-end',
  style: {}
}

const StyledHero = styled.header`
  background-color: #fff;
  background-image: ${({ background }) => background ? `url(${background})` : 'none'};
  background-position: center;
  background-size: 20%;
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
    font-size: 3rem;
    line-height: 3.25rem;
  }
`

const StyledStrapline = styled(Heading)`
  font-size: 1.25rem;
  font-weight: normal;
  line-height: 1.5rem;
  margin: 0 0 2rem 0;
`
