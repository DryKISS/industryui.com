/**
 * Twitter Timeline
 */

// React
import React from 'react'
import { func, object } from 'prop-types'

// import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import AbstractWidget from './AbstractWidget'

const TwitterTimeline = ({ dataSource, options, onLoad }) => {
  // const shouldComponentUpdate = (nextProps) => {
  //   const changed = (name) => !isEqual(this.props[name], nextProps[name])
  //   return changed('dataSource') || changed('options')
  // }

  const ready = (tw, element, done) => {
    // Options and dataSource must be cloned since Twitter Widgets modifies it directly
    tw.widgets
      .createTimeline(cloneDeep(dataSource), element, cloneDeep(options))
      .then(() => {
        // Widget is loaded
        done()
        onLoad()
      })
  }

  return React.createElement(AbstractWidget, { ready: ready })
}

TwitterTimeline.propTypes = {
  dataSource: object.isRequired,
  options: object,
  onLoad: func
}

TwitterTimeline.defaultProps = {
  options: {},
  onLoad: () => {}
}
