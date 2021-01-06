/**
 * IUI Icons Story
 */

// UI
import styled from 'styled-components'
import { MicIcon, ChevronIcon, DownloadIcon, CrossIcon, PaperPlaneIcon } from 'components'
import Readme from '../README.md'

// Data

export default {
  title: 'Icons/AllIcons',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = () => {
  return (
    <Wrapper>
      <MicIcon />
      <ChevronIcon />
      <CrossIcon />
      <DownloadIcon />
      <PaperPlaneIcon />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 4rem;
`
