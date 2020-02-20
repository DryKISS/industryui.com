/**
 * Table Loading
 */

import { bool, number } from 'prop-types'

// UI
import { LdsSpinner, PageLoading } from '../../../'

export const TableLoading = ({ colsLength, show }) => {
  if (!show) return null
  return (
    <PageLoading
      backgroundColor='#fff'
      indicator={<LdsSpinner color='#000' size={50} />}
      opacity={0.7}
      position='absolute'
    />
  )
}

TableLoading.propTypes = {
  colsLength: number,
  show: bool
}
