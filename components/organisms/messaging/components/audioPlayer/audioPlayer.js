// React
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Next
import dynamic from 'next/dynamic'

let AudioPlayer

const RHAP_UI = {
  CURRENT_TIME: 'CURRENT_TIME',
  CURRENT_LEFT_TIME: 'CURRENT_LEFT_TIME',
  PROGRESS_BAR: 'PROGRESS_BAR',
  DURATION: 'DURATION',
  ADDITIONAL_CONTROLS: 'ADDITIONAL_CONTROLS',
  MAIN_CONTROLS: 'MAIN_CONTROLS',
  VOLUME_CONTROLS: 'VOLUME_CONTROLS',
  LOOP: 'LOOP',
  VOLUME: 'VOLUME'
}

const MessagingAudioPlayer = ({ inMessage, src }) => {
  const [playerLoaded, setPlayerLoaded] = useState(false)

  useEffect(() => {
    AudioPlayer = dynamic(() => import('react-h5-audio-player'), { ssr: false })
    setPlayerLoaded(true)
  }, [])

  const showPlayer = () => {
    if (!playerLoaded) return <div>Loading ...</div>
    return (
      <AudioPlayer
        customProgressBarSection={
          inMessage
            ? [
                RHAP_UI.MAIN_CONTROLS,
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.VOLUME,
                <Spacer key="rh1" style={{ margin: '0 5px', width: '5px' }} />,
                RHAP_UI.CURRENT_TIME,
                <Slash key="rh2">/</Slash>,
                RHAP_UI.DURATION
              ]
            : [RHAP_UI.MAIN_CONTROLS, RHAP_UI.PROGRESS_BAR]
        }
        customControlsSection={[]}
        showJumpControls={false}
        showFilledVolume
        src={src}
      />
    )
  }

  return <Wrapper>{showPlayer()}</Wrapper>
}

const Wrapper = styled.div`
  flex: 1;
`

const Spacer = styled.div`
  margin: 0 5px;
  width: 5px;
`

const Slash = styled.div``
export default MessagingAudioPlayer
