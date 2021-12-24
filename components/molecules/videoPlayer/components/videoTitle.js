// Style
import styled from 'styled-components'
import StarIcon from '../../../icons/components/star'

const VideoTitle = ({ title, description, favorite, setFavorite }) => (
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
// TODO: separate component
const ButtonHOC = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px 10px;
  z-index: 1000;
`
export default VideoTitle
