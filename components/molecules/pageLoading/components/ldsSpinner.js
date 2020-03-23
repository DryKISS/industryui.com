/**
 * Page Loadubg
 */

// React
import React from 'react'
import { number, string } from 'prop-types'

// Sryle
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

export const LdsSpinner = props => {
  return (
    // <svg width="24" height="24" viewBox="0 0 24 24"><path d="M23.583 10.398a11.436 11.436 0 010 3.232.5.5 0 01-.43.428l-2.7.354a8.7 8.7 0 01-.78 1.885l1.66 2.16a.5.5 0 01.002.606 11.743 11.743 0 01-2.284 2.285.5.5 0 01-.606-.002l-2.16-1.66a8.776 8.776 0 01-1.886.783l-.354 2.701a.5.5 0 01-.428.43c-.552.076-1.085.114-1.618.114-.53 0-1.061-.037-1.611-.113a.5.5 0 01-.428-.431l-.353-2.699a8.646 8.646 0 01-1.89-.783l-2.161 1.66a.5.5 0 01-.606.003 11.958 11.958 0 01-2.285-2.282.5.5 0 01.002-.606l1.66-2.16a8.688 8.688 0 01-.785-1.892l-2.7-.354a.5.5 0 01-.43-.428 11.797 11.797 0 010-3.229.5.5 0 01.43-.427l2.7-.354a8.76 8.76 0 01.785-1.891l-1.66-2.16a.5.5 0 01-.001-.607A11.93 11.93 0 014.95 2.678a.5.5 0 01.606.002l2.16 1.661a8.736 8.736 0 011.89-.783l.354-2.7a.5.5 0 01.428-.43 11.415 11.415 0 013.229.001.5.5 0 01.428.43l.354 2.7a8.705 8.705 0 011.886.783l2.16-1.66a.501.501 0 01.606-.002 11.749 11.749 0 012.284 2.286.5.5 0 01-.002.606l-1.661 2.161c.334.597.595 1.229.781 1.884l2.699.354a.5.5 0 01.431.427zm-11.585 5.264a3.651 3.651 0 003.647-3.647 3.651 3.651 0 00-3.647-3.648 3.652 3.652 0 00-3.648 3.648 3.652 3.652 0 003.648 3.647z"></path></svg>
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
