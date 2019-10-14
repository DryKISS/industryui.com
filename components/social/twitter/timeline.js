/**
 * Twitter Timeline
 */
import React from 'react'
import PropTypes from 'prop-types'
// import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import AbstractWidget from './AbstractWidget'

const TwitterTimeline = () => {
  // const shouldComponentUpdate = (nextProps) => {
  //   const changed = (name) => !isEqual(this.props[name], nextProps[name])
  //   return changed('dataSource') || changed('options')
  // }

  const ready = (tw, element, done) => {
    const { dataSource, options, onLoad } = this.props

    // Options and dataSource must be cloned since Twitter Widgets modifies it directly
    tw.widgets.createTimeline(cloneDeep(dataSource), element, cloneDeep(options))
      .then(() => {
        // Widget is loaded
        done()
        onLoad()
      })
  }

  return React.createElement(AbstractWidget, { ready: ready })
}

TwitterTimeline.propTypes = {
  dataSource: PropTypes.object.isRequired,
  options: PropTypes.object,
  onLoad: PropTypes.func
}

TwitterTimeline.defaultProps = {
  options: {},
  onLoad: () => {}
}
