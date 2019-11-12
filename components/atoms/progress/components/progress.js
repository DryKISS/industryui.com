/**
 * Progress
 */

// React
import { oneOf } from 'prop-types'

// Styled
import styled from 'styled-components'

// UI
import { SIZE } from '../../../'

export const Progress = styled.div`
  background-color: ${({
    theme,
    theme: {
      PROGRESS: { bgColor }
    }
  }) => {
    return bgColor
  }};
  border-radius: ${({
    theme: {
      PROGRESS: { borderRadius }
    }
  }) => borderRadius};
  display: flex;
  font-size: ${({
    size,
    theme: {
      PROGRESS: { fontSize }
    }
  }) => fontSize[size]};
  height: ${({
    size,
    theme: {
      PROGRESS: { height }
    }
  }) => height[size]};
  overflow: hidden;
`

Progress.propTypes = {
  size: oneOf(Object.values(SIZE))
}

Progress.defaultProps = {
  size: 'md'
}
