/**
 * Decorator
 */

// React
import { string } from 'prop-types'

export const Decorator = ({ padding, story }) => {
  return <div style={{ backgroundColor: '#eee', padding: padding }}>{story()}</div>
}

Decorator.propTypes = {
  padding: string
}

Decorator.defaultProps = {
  padding: '1rem'
}
