import { string } from 'prop-types';
import styled from 'styled-components';
import { COLOUR } from '../../../theme/variables/colour';

export const Progress = styled.div`
  display: flex;
  height: ${({ height }) => height};
  overflow: hidden; /* force rounded corners by cropping it */
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

Progress.propTypes = {
  bgColor: string,
  borderRadius: string,
  fontSize: string,
  height: string,
};

Progress.defaultProps = {
  bgColor: COLOUR.light,
  borderRadius: '.25rem',
  fontSize: 1 * 0.75 + 'rem',
  height: '1rem',
};
