/**
 * Components - Molecules - Charts - Schedule - Helper - Validate DataSource
 */

// React
import { object } from 'prop-types'

const validateEvent = ({ data, eventTimeSplitting, flag, index }) => {
  const errors = {}

  data.forEach((item) => {
    if (!item[eventTimeSplitting]) errors[eventTimeSplitting] = { index }

    if (!item.id) errors.id = { index }

    if (item[flag] === undefined) errors[flag] = { index }
  })

  return errors
}

const validateHiddenColumn = ({ data, hiddenColumn, index }) => {
  const errors = {}
  hiddenColumn.forEach((item) => {
    if (data[item] === undefined) errors[item] = { index }
  })
  return errors
}

const validateDataSource = ({
  dataSource,
  eventTimeSplitting,
  events,
  flag,
  hiddenColumn,
  title
}) => {
  const errors = []

  dataSource.forEach((data, index) => {
    const vEvent =
      data[events].length > 0
        ? validateEvent({ data: data[events], eventTimeSplitting, flag, index })
        : []

    if (Object.values(vEvent).length) errors.push(vEvent)

    const vHidden = validateHiddenColumn({ data, hiddenColumn, index })

    if (Object.values(vHidden).length) errors.push(vHidden)

    if (!data[title]) {
      errors.push({ [title]: { index } })
    }
  })

  return { isValid: errors.length === 0, errors }
}

validateDataSource.propTypes = {
  dataSource: object.isRequired
}

validateDataSource.defaultProps = {
  dataSource: []
}

export default validateDataSource
