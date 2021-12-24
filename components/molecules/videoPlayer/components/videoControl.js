// Style
import styled from 'styled-components'

import FullScreenIcon from '../../../icons/components/fullScreen'
import SettingIcon from '../../../icons/components/setting'
import ButtonHOC from './ButtonHOC'
import SubtitleIcon from '../../../icons/components/subtitle'
import Volume from './volume'
import MainControlBox from './mainControlBox'

const VideoControl = ({
  handlePlayPause,
  handleSkip,
  setVideoState,
  handleVideoProgress,
  isPlaying,
  progress,
  videoRef,
  videos,
  handleShowSubtitle,
  isSubtitle,
  isShowSetting,
  handleSetVolume,
  volume,
  setShowSetting,
  handleFullScreen
}) => (
  <ControlOverlayWrapper>
    <MainControlBox
      {...{
        handlePlayPause,
        handleSkip,
        setVideoState,
        handleVideoProgress,
        isPlaying,
        progress,
        videoRef,
        videos
      }}
    />
    <SettingWrapper>
      <ButtonHOC onClick={handleShowSubtitle}>
        <SubtitleIcon colour={isSubtitle ? 'white' : '#999999'} />
      </ButtonHOC>
      <Volume {...{ isShowSetting, volume, onChange: handleSetVolume }} />
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
