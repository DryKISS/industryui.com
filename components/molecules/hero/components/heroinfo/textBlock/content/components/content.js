
/**
 * HeroInfo - TextBlock - Content
 */

// React
import { any, number, object, objectOf, oneOfType, string } from 'prop-types'

// UI
import { Container, Heading, Row } from '../../../../../../../'

// Style
import styled from 'styled-components'

export const Content = ({
  align,
  className,
  strapline,
  width
}) => {
  return (
    <StyledContent className={className}>
      <Container>
        <Row>
          {strapline && <StyledStrapline tag='h2' content={strapline} />}
        </Row>
      </Container>
    </StyledContent>
  )
}

const StyledContent = styled.header`
  background-color: #fff;
  background-image: ${({ background }) => (background ? `url(${background})` : 'none')};
  background-position: center;
  background-size: cover;
`

const StyledStrapline = styled(Heading)`
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5rem;
  margin: 0 0 2rem 0;
`

Content.propTypes = {
  alt: string,
  align: string,
  className: any,
  strapline: oneOfType([object, string]),
  style: objectOf(oneOfType([number, string])),
  width: number
}

Content.defaultProps = {
  align: 'center',
  backgroundSize: 'cover',
  style: {}
}
