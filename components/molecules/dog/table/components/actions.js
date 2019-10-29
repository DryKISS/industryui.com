/**
 * Actions
 */

// React
import { object, string } from 'prop-types'

// React Tooltip
import ReactTooltip from 'react-tooltip'

// UI
import { Button, ButtonToolbar, Icon, Link } from '../../../../'

export const Actions = ({ path, row }) => {
  const { dogId, uId } = row

  const action = (action, context, icon, route, tooltip) => (
    <Link
      to={{
        href: {
          pathname: `${path}/${route}`,
          query: uId ? { dogId: dogId, uId: uId } : { dogId: dogId }
        }
      }}
    >
      <Button data-tip={tooltip} context={context} size='sm' title={action}>
        <Icon context='white' icon={icon} style={{ pointerEvents: 'none' }} />
      </Button>
    </Link>
  )

  return (
    <>
      <ReactTooltip
        border
        effect='solid'
        event='mouseover'
        globalEventOff='click'
        multiline
        place='top'
      />

      <ButtonToolbar className='float-right'>
        {action('Edit', 'primary', 'edit', 'details', 'Edit this dogs profile details')}
        {action('Photos', 'secondary', 'images', 'photos', 'Add or Edit this dogs photos')}
        {action('Health', 'info', 'stethoscope', 'health', 'Add or Edit this dogs health details')}
        {action('Delete', 'danger', 'trash', 'delete', 'Delete this dog')}
      </ButtonToolbar>
    </>
  )
}

Actions.propTypes = {
  path: string.isRequired,
  row: object.isRequired
}
