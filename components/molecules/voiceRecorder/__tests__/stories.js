/**
 * voiceRecorder
 */

// UI
import { VoiceRecorder } from 'components'
import Readme from '../README.md'

// Style
import styled from 'styled-components'

export default {
  component: VoiceRecorder,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/VoiceRecorder'
}

export const noOverlay = () => {
  const handleVoiceRecorded = e => {
    console.info(e)
  }

  return (
    <Wrapper>
      <VoiceRecorder onVoiceRecord={handleVoiceRecorded} overlayStyle={{ display: 'none' }} />
    </Wrapper>
  )
}
export const withOverlay = () => {
  const handleVoiceRecorded = e => {
    console.info(e)
  }

  return (
    <Wrapper>
      <VoiceRecorder onVoiceRecord={handleVoiceRecorded} overlayStyle={{ top: '0.5rem' }} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 2rem;
`
