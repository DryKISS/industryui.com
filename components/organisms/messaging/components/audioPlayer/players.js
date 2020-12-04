import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import styled from 'styled-components'

export const MessageAudioPlayer = ({ src }) => {
  return (
    <AudioPlayer
      src={src}
      customProgressBarSection={[
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.VOLUME,
        <Spacer key='rh1' style={{ margin: '0 5px', width: '5px' }} />,
        RHAP_UI.CURRENT_TIME,
        <Slash key='rh2'>/</Slash>,
        RHAP_UI.DURATION
      ]}
      customControlsSection={[]}
      showJumpControls={false}
      showFilledVolume
    />
  )
}

export const PreviewAudioPlayer = ({ src }) => {
  return (
    <AudioPlayer
      src={src}
      customProgressBarSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.PROGRESS_BAR]}
      customControlsSection={[]}
      showJumpControls={false}
      showFilledVolume
    />
  )
}

const Spacer = styled.div`
  margin: 0 5px;
  width: 5px;
`
const Slash = styled.div``
