
/**
 * Hero
 */

// React
import { any, array, number, object, objectOf, oneOfType, string } from 'prop-types'

// UI
import { Container, MEDIA_QUERY, Row, Heading, Column, Image } from '../../../../../'

// Style
import styled from 'styled-components'

export const SimpleHero = ({
  alt,
  align,
  background,
  backgroundSize,
  buttons,
  className,
  image,
  message,
  title,
  strapline,
  width
}) => {
  const renderText = () => {
    return (
      <StyledColumn md={4}>
        {title && <StyledTitle tag='h1' content={title} />}
        {strapline && <StyledStrapline tag='h2' content={strapline} />}
      </StyledColumn>
    )
  }

  return (
    <StyledSimpleHero background={background} backgroundSize={backgroundSize} className={className}>
      <Container>
        <Row>
          {image && <StyledImage alt={alt} src={image} />}

          {title && renderText()}
        </Row>
      </Container>
    </StyledSimpleHero>
  )
}

const StyledSimpleHero = styled.header`
  background-color: #fff;
  background-image: ${({ background }) => (background ? `url(${background})` : 'none')};
  background-position: center;
  background-size: cover;
`

const StyledColumn = styled(Column)`
  text-align: center;
  position: absolute;
  bottom: 100px;
  left: 120px;
  background-color: white;
  opacity: .8;
  padding: 50px;
  ${MEDIA_QUERY.desktop`
    // margin-bottom: 3rem;
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

const StyledImage = styled(Image)`
  width: 100%;
  position: relative;
  ${MEDIA_QUERY.desktop`
    font-size: 3rem;
    line-height: 3.25rem;
  `}
`

SimpleHero.propTypes = {
  alt: string,
  align: string,
  className: any,
  background: string,
  backgroundSize: string,
  buttons: array,
  image: string,
  strapline: oneOfType([object, string]),
  style: objectOf(oneOfType([number, string])),
  title: string.isRequired,
  width: number
}

SimpleHero.defaultProps = {
  align: 'flex-end',
  backgroundSize: 'cover',
  style: {}
}
