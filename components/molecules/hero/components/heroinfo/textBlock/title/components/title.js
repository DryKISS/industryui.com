
/**
 * Hero
 */

// React
import { any, number, objectOf, oneOfType, string } from 'prop-types'

// UI
import { Container, Row, MEDIA_QUERY, Heading } from '../../../../../../../'

// Style
import styled from 'styled-components'

export const Title = ({
  align,
  className,
  title,
  width
}) => {
  return (
    <StyledMyTitle className={className}>
      <Container>
        <Row>
          {title && <StyledTitle tag='h1' content={title} />}
        </Row>
      </Container>
    </StyledMyTitle>
  )
}

const StyledMyTitle = styled.header`
  background-color: #fff;
  background-image: ${({ background }) => (background ? `url(${background})` : 'none')};
  background-position: center;
  background-size: cover;
`
const StyledTitle = styled(Heading)`
  line-height: 2.75rem;
  ${MEDIA_QUERY.desktop`
    font-size: 1rem;
    line-height: 3.25rem;
  `}
`
Title.propTypes = {
  align: string,
  className: any,
  style: objectOf(oneOfType([number, string])),
  title: string.isRequired,
  width: number
}

Title.defaultProps = {
  align: 'flex-start',
  backgroundSize: 'cover',
  style: {}
}
