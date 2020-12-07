// React
import { useEffect, useRef, useState } from 'react'
import { MessageNames, MessagingCommunicationService, MessagingActions } from 'components/services'
import styled, { css } from 'styled-components'
import { Microphone } from './microphone'
import { Close, Text } from 'components'

let AudioRecorder
let mpegEncoder

export const IUIVoiceRecorder = props => {
  const [recorderLoaded, setRecorderLoaded] = useState(false)
  const recorder = useRef()
  const canSendData = useRef(true)
  const [isRecording, setisRecording] = useState(false)
  const loadModules = async () => {
    AudioRecorder = (await import('audio-recorder-polyfill')).default
    mpegEncoder = (await import('audio-recorder-polyfill/mpeg-encoder')).default
    AudioRecorder.encoder = mpegEncoder
    AudioRecorder.prototype.mimeType = 'audio/mpeg'
    if (window) {
      window.MediaRecorder = AudioRecorder
    }
    setRecorderLoaded(true)
  }
  useEffect(() => {
    loadModules()
  }, [])

  const handleStartRecord = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      recorder.current = new window.MediaRecorder(stream)
      // Set record to <audio> when recording will be finished
      recorder.current.addEventListener('dataavailable', e => {
        if (canSendData.current === true) {
          setTimeout(() => {
            MessagingCommunicationService.send({
              name: MessageNames.Messaging.MESSAGING_ACTION,
              payload: { action: MessagingActions.SET_RECORDED_VOICE, data: e.data }
            })
          }, 200)
        } else {
          canSendData.current = true
        }
      })

      // Start recording
      recorder.current.start()
      setisRecording(true)
    })
  }

  const handleStopRecord = () => {
    recorder.current.stop()
    // Remove “recording” icon from browser tab
    recorder.current.stream.getTracks().forEach(i => i.stop())
    setisRecording(false)
  }
  const handleCancelRecord = () => {
    canSendData.current = false
    handleStopRecord()
  }

  const showRecorder = props => {
    if (!recorderLoaded) return <Microphone isLoading />
    return (
      <>
        <OverLay isRecording={isRecording}>
          <Text content='Recording... ' context='blackText' />
          <Close click={handleCancelRecord} context='danger' />
        </OverLay>
        <Wrapper onClick={isRecording ? handleStopRecord : handleStartRecord}>
          <Microphone isRecording={isRecording} />
        </Wrapper>
      </>
    )
  }

  return <div>{showRecorder(props)}</div>
}
const Wrapper = styled.div`
  cursor: pointer;
  padding-top: 0.25rem;
`
const OverLay = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.COLOUR.light};
  display: flex;
  height: 45px;
  justify-content: space-between;
  left: 4rem;
  overflow: hidden;
  position: absolute;
  top: -2px;
  transition-property: padding-left, padding-right, width, opacity;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  ${({ isRecording }) => css`
    opacity: ${isRecording ? '1' : '0'};
    padding-left: ${isRecording ? '1rem' : '0rem'};
    padding-right: ${isRecording ? '1rem' : '0rem'};
    width: ${isRecording ? 'calc(100% - 8rem)' : '0px'};
  `}
`
