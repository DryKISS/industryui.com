/**
 * Components - Messaging
 */

// React
import { useEffect, useRef, useState } from 'react'

// Style
import styled, { css } from 'styled-components'

// UI
import { MessageNames, MessagingCommunicationService, MessagingActions } from 'components/services'
import { Microphone } from './microphone'
import { Close, Text, toHHMMSS } from '../../../../'

let AudioRecorder
let mpegEncoder

export const VoiceRecorder = props => {
  const [recorderLoaded, setRecorderLoaded] = useState(false)
  const [timer, settimer] = useState(0)
  const recorder = useRef()
  const timerInterval = useRef()

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
    return () => {
      stopTimer()
    }
  }, [])

  const stopTimer = () => {
    clearInterval(timerInterval.current)
    timerInterval.current = null
    setTimeout(() => {
      settimer(0)
    }, 300)
  }
  const handleStartRecord = () => {
    window &&
      window.navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
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
          stopTimer()
        })

        // Start recording
        recorder.current.start()
        timerInterval.current = setInterval(() => {
          settimer(time => time + 1)
        }, 1000)
        setisRecording(true)
      })
  }

  const handleStopRecord = () => {
    recorder.current.stop()
    // Remove "recording" icon from browser tab
    recorder.current.stream.getTracks().forEach(i => i.stop())
    setisRecording(false)
    stopTimer()
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
          {isRecording && (
            <OverlayRecorderIconWrapper>
              <Microphone isRecording />
            </OverlayRecorderIconWrapper>
          )}
          <Text content='Recording' context='blackText' />

          <Loader>
            <Dot>.</Dot>
            <Dot>.</Dot>
            <Dot>.</Dot>
          </Loader>

          <TimerWrapper>
            {toHHMMSS({ sec: timer + '', hasMinute: true, hasSecond: true })}
          </TimerWrapper>
          <Close click={handleCancelRecord} context='danger' />
        </OverLay>
        <Wrapper onClick={isRecording ? handleStopRecord : handleStartRecord}>
          {isRecording ? <StopIcon /> : <Microphone />}
        </Wrapper>
      </>
    )
  }

  return <div>{showRecorder(props)}</div>
}

const StopIcon = styled.div`
  background-color: ${({ theme }) => theme.COLOUR.danger};
  border-radius: 3px;
  height: 1rem;
  margin-top: -0.5rem;
  width: 1rem;
`
const Dot = styled.span``
const Loader = styled.div`
  margin-top: -0.25rem;
  @keyframes blink {
    50% {
      color: transparent;
    }
  }
  ${Dot} {
    animation: 1s blink infinite;
    font-size: 1.5rem;
  }
 /*prettier-ignore */
  ${Dot}:nth-child(2) {
    animation-delay: 250ms;
  }
  /*prettier-ignore */
  ${Dot}:nth-child(3) {
    animation-delay: 500ms;
  }
`
const OverlayRecorderIconWrapper = styled.div`
  margin-right: 1rem;
  margin-top: 0.5rem;
`
const TimerWrapper = styled.div`
  color: ${({ theme: { MESSAGING } }) => MESSAGING.timerColour};
  flex: 1;
  text-align: end;
  padding-right: 1rem;
`
const Wrapper = styled.div`
  cursor: pointer;
  padding-top: 0.25rem;
`
const OverLay = styled.div`
  align-items: center;
  background-color: ${({ theme: { MESSAGING } }) => MESSAGING.inputSectionBackground};
  display: flex;
  height: 45px;
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
