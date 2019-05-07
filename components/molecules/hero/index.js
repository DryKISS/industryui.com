/**
 * Hero
 */

// React
import { any, array, number, object, objectOf, oneOfType, string } from 'prop-types'

// UI
import { Container, Column, Heading, Row } from '../../'
import { HeroButtons, HeroImage } from './components'
import { MEDIA_QUERY } from '../../../utils'

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
        { title && <StyledTitle tag='h1' content={title} /> }
        { strapline && <StyledStrapline tag='h2' content={strapline} /> }
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
  strapline: oneOfType([object, string]),
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
  padding: 1rem 0 0;
`

const StyledColumn = styled(Column)`
  margin: 0 auto;
  text-align: center;

  ${MEDIA_QUERY.desktop`
    margin-bottom: 3rem;
    text-align: initial;
  `}
`

const StyledTitle = styled(Heading)`
  line-height: 2.75rem;

  ${MEDIA_QUERY.desktop`
    font-size: 3rem;
    line-height: 3.25rem;
  `}
`

const StyledStrapline = styled(Heading)`
  font-size: 1.25rem;
  font-weight: normal;
  line-height: 1.5rem;
  margin: 0 0 2rem 0;
`
