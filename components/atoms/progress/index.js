/**
 * Progress
 */
import React from 'react'
import { number, string, bool } from 'prop-types'
import { Progress } from './Progress'
import { ProgressBarDiv } from './ProgressBar'

const ProgressBar = props => {
  return (
    <ProgressBarDiv
      aria-valuenow={props.now}
      aria-valuemin={props.ariaValueMin}
      aria-valuemax={props.ariaValueMax}
      {...props}
    />
  )
}

ProgressBar.propTypes = {
  now: number,
  color: string,
  bgColor: string,
  transition: string,
  role: string,
  ariaValueMin: number,
  ariaValueMax: number,
  striped: bool,
  bgSize: string,
  bgImage: string,
  animated: bool
}

ProgressBar.defaultProps = {
  now: 0,
  color: 'white',
  bgColor: '#2D9CDB',
  transition: 'width .6s ease',
  role: 'progressbar',
  ariaValueMin: 0,
  ariaValueMax: 100,
  striped: false,
  bgSize: '1rem 1rem',
  bgImage: `
    linear-gradient(
      45deg,
      rgba(255,255,255,.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255,255,255,.15) 50%,
      rgba(255,255,255,.15) 75%,
      transparent 75%,
      transparent
    )
  `,
  animated: false
}

export { Progress, ProgressBar }
