/**
 * Components - Molecules - Video Player - Component -  Video Control
 */

// Style
import styled from 'styled-components'

// UI
import ButtonHOC from './ButtonHOC'
import FullScreenIcon from '../../../icons/components/fullScreen'
import MainControlBox from './mainControlBox'
import SettingIcon from '../../../icons/components/setting'
import SubtitleIcon from '../../../icons/components/subtitle'
import Volume from './volume'

const VideoControl = ({
  handlePlayPause,
  handleSkip,
  handleShowSubtitle,
  handleFullScreen,
  handleVideoProgress,
  handleSetVolume,
  isPlaying,
  isSubtitle,
  isShowSetting,
  progress,
  setVideoState,
  setShowSetting,
  videoRef,
  videos,
  volume
}) => (
  <ControlOverlayWrapper>
    <MainControlBox
      {...{
        handlePlayPause,
        handleSkip,
        handleVideoProgress,
        isPlaying,
        progress,
        setVideoState,
        videoRef,
        videos
      }}
    />
    <SettingWrapper>
      <ButtonHOC onClick={handleShowSubtitle}>
        <SubtitleIcon colour={isSubtitle ? 'white' : '#999999'} />
      </ButtonHOC>
      <Volume {...{ isShowSetting, onChange: handleSetVolume, volume }} />
      <ButtonHOC onClick={() => setShowSetting(!isShowSetting)}>
        <SettingIcon colour="white" />
      </ButtonHOC>

      <ButtonHOC onClick={handleFullScreen}>
        <FullScreenIcon colour="white" />
      </ButtonHOC>
    </SettingWrapper>
  </ControlOverlayWrapper>
)

const SettingWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  @media (max-width: 900px) {
    display: none;
  }
`

const ControlOverlayWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 7px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  left: 0;
  background-color: rgba(102, 102, 102, 0.5);
  z-index: 1;
  padding-top: 5px;
  padding-left: 15px;
`

export default VideoControl
