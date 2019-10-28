/**
 * Icon
 */

// React
import { any, bool, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// UI
import { CONTEXT } from '../../'

export const Icon = ({ icon, prefix, ...props }) => {
  return <FontAwesomeIcon icon={[prefix, icon]} {...props} />
}

Icon.propTypes = {
  className: any,
  context: oneOf(Object.values(CONTEXT)),
  fixedWidth: bool,
  icon: string.isRequired,
  prefix: string,
  style: objectOf(oneOfType([number, string]))
}

Icon.defaultProps = {
  context: 'primary',
  fixedWidth: true,
  prefix: 'far'
}
