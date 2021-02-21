/**
 * Components - Molecules - Loading
 */

// React
import React, { memo } from 'react'
import { bool, number } from 'prop-types'

// UI
import { LdsSpinner, PageLoading } from '../../../'

export const TableLoading = memo(({ colsLength, show }) => {
  if (!show) {
    return null
  }

  return (
    <PageLoading
      indicator={<LdsSpinner size={50} />}
      opacity={0.7}
      position="absolute"
    />
  )
})

TableLoading.propTypes = {
  colsLength: number,
  show: bool
}
