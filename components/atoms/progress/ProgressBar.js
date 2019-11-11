import { number, string, bool } from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

const ProgressBarStripesAnimation = keyframes`
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
`

export const ProgressBarDiv = styled.div`
  display: flex;
  width: ${({ now }) => now + '%'};
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: ${({ color }) => color};
  text-align: center;
  white-space: nowrap;
  background-color: ${({ bgColor }) => bgColor};
  transition: ${({ transition }) => transition};
  background-size: ${({ striped, bgSize }) => (striped ? bgSize : 'auto')};
  background-image: ${({ striped, bgImage }) => (striped ? bgImage : 'none')};
  animation: ${({ animated }) =>
    animated
      ? css`
          ${ProgressBarStripesAnimation} 1s linear infinite
        `
      : 'none 0 ease 0 1 normal none running'};
`

ProgressBarDiv.propTypes = {
  now: number,
  color: string,
  bgColor: string,
  transition: string,
  striped: bool,
  bgSize: string,
  bgImage: string,
  animated: bool
}
