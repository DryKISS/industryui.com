/**
 * Page Loading
 */

// React
import React from 'react'
import { number, string } from 'prop-types'

// Style
import styled from 'styled-components'

const SPINNER = Array(12).fill('')

const LdsSpinnerWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  div {
    transform-origin: ${({ size }) => size / 2}px ${({ size }) => size / 2}px;
    animation: lds-spinner 1.2s linear infinite;
    ::after {
      content: ' ';
      display: block;
      position: absolute;
      top: ${({ size }) => size / 10 - 5}px;
      left: ${({ size }) => size / 2 - 3}px;
      width: ${({ size }) => size / 10 - 2}px;
      height: ${({ size }) => size / 4 - 2}px;
      border-radius: ${({ size }) => size / 4}%;
      background: ${({ color }) => color};
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
  color: string
}

LdsSpinner.defaultProps = {
  size: 80,
  color: '#333'
}

export default LdsSpinner
