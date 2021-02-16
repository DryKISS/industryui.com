/**
 * Atoms - Icon - Stacked
 */

// React
import React from 'react'
import { string } from 'prop-types'

// UI
import { Icon } from '../../../'

export const IconStacked = ({ icon, prefix }) => {
  return (
    <span className='fa-stack fa-1x' style={{ pointerEvents: 'none' }}>
      <Icon className='fa-stack-2x' color='#eaf0f6' fixedWidth={false} icon='circle' prefix='fas' />

      <Icon
        className='fa-stack-1x'
        color='#506e91'
        fixedWidth={false}
        icon={icon}
        prefix={prefix}
      />
    </span>
  )
}

IconStacked.propTypes = {
  icon: string.isRequired,
  prefix: string
}

IconStacked.defaultProps = {
  prefix: 'fas'
}
