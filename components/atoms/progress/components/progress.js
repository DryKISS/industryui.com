/**
 * Progress
 */

// React
import { string } from 'prop-types'

// UI
import { COLOUR } from '../../../'

// Styled
import styled from 'styled-components'

export const Progress = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  display: flex;
  font-size: ${({ fontSize }) => fontSize};
  height: ${({ height }) => height};
  overflow: hidden;
`

Progress.propTypes = {
  bgColor: string,
  borderRadius: string,
  fontSize: string,
  height: string
}

Progress.defaultProps = {
  bgColor: COLOUR.light,
  borderRadius: '.25rem',
  fontSize: 1 * 0.75 + 'rem',
  height: '1rem'
}
