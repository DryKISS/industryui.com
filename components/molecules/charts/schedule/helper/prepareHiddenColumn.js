/**
 * Components - Molecules - Charts - Schedule - Helper - Hidden Column
 */

// React
import { array } from 'prop-types'

const prepareHiddenColumn = (hiddenColumn) => {
  if (hiddenColumn.length) {
    const result = {}

    hiddenColumn.forEach((item) => {
      result[item] = true
    })

    return result
  } else {
    return {}
  }
}

prepareHiddenColumn.propTypes = {
  hiddenColumn: array.isRequired
}

prepareHiddenColumn.defaultProps = {
  hiddenColumn: []
}

export default prepareHiddenColumn
