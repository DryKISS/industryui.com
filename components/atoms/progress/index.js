/**
 * Progress
 */
import React from 'react'
import { number, string, bool, oneOf } from 'prop-types'
import { Progress, ProgressBarDiv } from './components'
import { CONTEXT } from '../../'

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
  animated: bool,
  ariaValueMax: number,
  ariaValueMin: number,
  bgColor: string,
  bgImage: string,
  bgSize: string,
  color: string,
  context: oneOf(Object.values(CONTEXT)),
  now: number,
  role: string,
  striped: bool,
  transition: string,
}

ProgressBar.defaultProps = {
  animated: false,
  ariaValueMax: 100,
  ariaValueMin: 0,
  bgColor: '#2D9CDB',
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
  bgSize: '1rem 1rem',
  context: 'primary',
  now: 0,
  role: 'progressbar',
  striped: false,
  transition: 'width .6s ease',
}

export { Progress, ProgressBar }
