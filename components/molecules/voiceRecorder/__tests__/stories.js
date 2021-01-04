/**
 * voiceRecorder
 */

// UI
import styled from 'styled-components'
import { VoiceRecorder } from 'components'
import Readme from '../README.md'

// Data

export default {
  title: 'Molecules/VoiceRecorder',
  component: VoiceRecorder,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const noOverlay = () => {
  const handleVoiceRecorded = e => {
    console.log(e)
  }
  return (
    <Wrapper>
      <VoiceRecorder onVoiceRecord={handleVoiceRecorded} overLayStyle={{ display: 'none' }} />
    </Wrapper>
  )
}
export const withOverlay = () => {
  const handleVoiceRecorded = e => {
    console.log(e)
  }
  return (
    <Wrapper>
      <VoiceRecorder onVoiceRecord={handleVoiceRecorded} overLayStyle={{ top: '0.5rem' }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 2rem;
`
