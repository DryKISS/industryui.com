/**
 * Progress - Bar Div
 */

// React
import { number, string, bool } from 'prop-types'

// Style
import styled, { css, keyframes } from 'styled-components'

// UI
import themeBackground from '../../../utils/background/background'

const ProgressBarStripesAnimation = keyframes`
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
`

const ProgressBarDiv = styled.div`
  ${(props) => themeBackground(props)}
  animation: ${({ animated }) =>
    animated
      ? css`
          ${ProgressBarStripesAnimation} 1s linear infinite
        `
      : 'none 0 ease 0 1 normal none running'};
  background-image: ${({
    striped,
    theme: {
      PROGRESSBAR: { bgImage }
    }
  }) => (striped ? bgImage : 'none')};
  background-size: ${({
    striped,
    theme: {
      PROGRESSBAR: { bgSize }
    }
  }) => (striped ? bgSize : 'auto')};
  color: ${({ color, context, theme }) =>
    color || (context === 'white' ? theme.COLOUR.primary : theme.COLOUR.white)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  transition: ${({
    theme: {
      PROGRESSBAR: { transition }
    }
  }) => transition};
  white-space: nowrap;
  width: ${({ now }) => now + '%'};
`

ProgressBarDiv.propTypes = {
  animated: bool,
  bgImage: string,
  bgSize: string,
  now: number,
  striped: bool,
  transition: string
}

export default ProgressBarDiv
