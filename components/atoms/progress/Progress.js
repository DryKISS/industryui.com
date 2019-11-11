import { string } from 'prop-types'
import styled from 'styled-components'
import { COLOUR } from '../../theme/variables/colour'

export const Progress = styled.div`
  display: flex;
  height: ${({ height }) => height};
  overflow: hidden; /* force rounded corners by cropping it */
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ borderRadius }) => borderRadius};
`

Progress.propTypes = {
  height: string,
  fontSize: string,
  bgColor: string,
  borderRadius: string
}

Progress.defaultProps = {
  height: '1rem',
  fontSize: 1 * 0.75 + 'rem',
  bgColor: COLOUR.light,
  borderRadius: '.25rem'
}

// export const Progress = (props) => {
//   <ProgressDiv {...props}>
//     {props.children}
//   </ProgressDiv>
// }
