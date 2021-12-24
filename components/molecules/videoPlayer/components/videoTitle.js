/**
 * Components - Molecules - Video Player - Component -  Video Title
 */

// Style
import styled from 'styled-components'

// UI
import ButtonHOC from './ButtonHOC'
import StarIcon from '../../../icons/components/star'
const VideoTitle = ({ description, favorite, title, setFavorite }) => (
  <VideoTitleWrapper>
    <Title>
      <h3>{title}</h3>
      <p>{description}</p>
    </Title>
    <ButtonHOC onClick={() => setFavorite(!favorite)}>
      {favorite ? <StarIcon colour="white" /> : <StarIcon colour="transparent" stroke="white" />}
    </ButtonHOC>
  </VideoTitleWrapper>
)

const VideoTitleWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 60px;
  background: rgba(81, 81, 81, 0.5);
  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    display: none;
  }
`

const Title = styled.div`
  p,
  h3 {
    padding: 0px;
    margin: 0px;
    color: #ffffff;
    margin-left: 15px;
    margin-top: 3px;
  }
`

export default VideoTitle
