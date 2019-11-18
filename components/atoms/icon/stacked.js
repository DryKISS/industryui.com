/**
 * Atoms - Icon - Stacked
 */

// React
import { any, bool, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import { Icon, CONTEXT } from '../../'

export const IconStacked = ({ icon, prefix }) => {
  return (
    <span className='fa-stack fa-1x' style={{ pointerEvents: 'none' }}>
      <Icon className='fa-stack-2x' fixedWidth={false} icon='circle' prefix='fas' color='#eaf0f6' />

      <Icon
        className='fa-stack-1x'
        fixedWidth={false}
        icon={icon}
        prefix={prefix}
        color='#506e91'
      />
    </span>
  )
}

IconStacked.propTypes = {
  icon: string.isRequired,
  prefix: string
}

IconStacked.defaultProps = {
  prefix: 'fad'
}
