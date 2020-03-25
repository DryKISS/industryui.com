/**
 * HeroInfo - Components - BackgroundImage
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const BackgroundImage = ({ path }) => {
  return <StyledBackground path={path} />
}

const StyledBackground = styled.div`
  background-image: url(${props => props.path});
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.6;
`

BackgroundImage.propTypes = {
  path: string
}

BackgroundImage.defaultProps = {
  path: '/static/blog/static-site-development/hero.jpg'
}
