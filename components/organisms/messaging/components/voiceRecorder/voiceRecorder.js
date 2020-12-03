import { useRef, useState } from 'react'
import AudioRecorder from 'audio-recorder-polyfill'
import mpegEncoder from 'audio-recorder-polyfill/mpeg-encoder'
import styled, { css } from 'styled-components'
import { Microphone } from './microphone'
import { Close, Text } from 'components'
import { MessageNames, MessagingActions, MessagingCommunicationService } from 'components/services'

AudioRecorder.encoder = mpegEncoder
AudioRecorder.prototype.mimeType = 'audio/mpeg'
if (window) {
  window.MediaRecorder = AudioRecorder
}
export const VoiceRecorder = props => {
  const recorder = useRef()
  const canSendData = useRef(true)
  const [isRecording, setisRecording] = useState(false)

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
    recorder.current.stop()
    // Remove “recording” icon from browser tab
    recorder.current.stream.getTracks().forEach(i => i.stop())
    setisRecording(false)
  }

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
