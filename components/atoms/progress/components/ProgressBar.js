import { number, string, bool } from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { BACKGROUND } from '../../../';

const ProgressBarStripesAnimation = keyframes`
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
`;

export const ProgressBarDiv = styled.div`
  animation: ${({ animated }) =>
    animated
      ? css`
          ${ProgressBarStripesAnimation} 1s linear infinite
        `
      : 'none 0 ease 0 1 normal none running'};
  background-image: ${({ striped, bgImage }) => (striped ? bgImage : 'none')};
  background-size: ${({ striped, bgSize }) => (striped ? bgSize : 'auto')};
  color: ${({ color, context, theme }) =>
    color || (context === 'white' ? theme.COLOUR.primary : theme.COLOUR.white)};
  display: flex;
  flex-direction: column;
  width: ${({ now }) => now + '%'};
  justify-content: center;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  ${props => BACKGROUND(props)}
  transition: ${({ transition }) => transition};
`;

ProgressBarDiv.propTypes = {
  animated: bool,
  bgColor: string,
  bgImage: string,
  bgSize: string,
  color: string,
  now: number,
  striped: bool,
  transition: string,
};
