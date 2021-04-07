/**
 * App - Compose
 */

// React
import React from 'react'

const compose = (wrappers) => {
  return wrappers.reduce((Acc, Current) => {
    return (props) =>
      React.createElement(Current, null, React.createElement(Acc, Object.assign({}, props)))
  })
}

export default compose
