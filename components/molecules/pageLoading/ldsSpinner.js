/**
 * Page Loading
 */

// React
import React from 'react'
import { number, oneOf } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import THEME_CONTEXT from '../../constants/context'

const SPINNER = Array(12).fill('')

const LdsSpinnerWrapper = styled.div`
  display: inline-block;
  height: ${({ size }) => size}px;
  position: relative;
  width: ${({ size }) => size}px;

  div {
    animation: lds-spinner 1.2s linear infinite;
    transform-origin: ${({ size }) => size / 2}px ${({ size }) => size / 2}px;

    ::after {
      background: ${({ context }) => context};
      border-radius: ${({ size }) => size / 4}%;
      content: ' ';
      display: block;
      height: ${({ size }) => size / 4 - 2}px;
      left: ${({ size }) => size / 2 - 3}px;
      position: absolute;
      top: ${({ size }) => size / 10 - 5}px;
      width: ${({ size }) => size / 10 - 2}px;
    }
  }

  ${({ spinner }) => {
    let temp = ''

    spinner.forEach((s, i) => {
      temp += `
        div:nth-child(${i + 1}) {
          transform: rotate(${i * 30}deg);
          animation-delay: ${-1.1 + parseFloat(i * 0.1)}s;
        }
      `
    })

    return temp
  }}

  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

const LdsSpinner = (props) => {
  return (
    <LdsSpinnerWrapper {...props} spinner={SPINNER}>
      {SPINNER.map((s, i) => (
        <div key={'spin' + i} />
      ))}
    </LdsSpinnerWrapper>
  )
}

LdsSpinner.propTypes = {
  size: number,
  context: oneOf(Object.values(THEME_CONTEXT))
}

LdsSpinner.defaultProps = {
  context: 'white',
  size: 56
}

export default LdsSpinner
