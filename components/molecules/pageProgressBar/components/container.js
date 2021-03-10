/**
 * Molecules - Page Progress Bar - Container
 */

// React
import React from 'react'
import { bool, node, number } from 'prop-types'

export const Container = ({ children, isFinished, animationDuration }) => (
  <div
    style={{
      opacity: isFinished ? 0 : 1,
      pointerEvents: 'none',
      transition: `opacity ${animationDuration}ms linear`
    }}
  >
    {children}
  </div>
)

Container.propTypes = {
  animationDuration: number.isRequired,
  children: node.isRequired,
  isFinished: bool.isRequired
}
