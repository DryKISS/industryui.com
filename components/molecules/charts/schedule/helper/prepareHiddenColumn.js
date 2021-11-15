/**
 * Components - Molecules - Charts - Schedule - Helper - Hidden Column
 */

// React
import { array } from 'prop-types'

const prepareHiddenColumn = (hiddenColumn) => {
  const result = {}

  hiddenColumn.forEach((item) => {
    result[item] = true
  })

  return result
}

prepareHiddenColumn.propTypes = {
  hiddenColumn: array.isRequired
}

prepareHiddenColumn.defaultProps = {
  hiddenColumn: []
}

export default prepareHiddenColumn
