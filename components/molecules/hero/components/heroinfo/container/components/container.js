/**
* HeroInfo Container
* Sets up a container for responsiveness
*/

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Container = ({
  className
}) => {
  return (
    <>
      <StyledContainer className={className} />
    </>
  )
}

const StyledContainer = styled.div`
  background-color: rgba(117, 204, 207, 0.4);
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1rem;
  position: relative;
  `

Container.propTypes = {
  className: string
}

Container.defaultProps = {
  align: 'center',
  backgroundSize: 'cover'
}
