/**
 * Dog Name
 */

// React
import { array, object, oneOfType } from 'prop-types'

// UI
import { Icon } from '../../../../'

export const DogName = ({ row: { gender, name } }) =>
  <>
    <Icon
      context={gender}
      icon={gender === 'male' ? 'mars' : 'venus'}
      size='lg'
      style={{ height: '1.5rem', width: '1.5rem', verticalAlign: 'middle' }}
    />

    {' '}

    {name}
  </>

DogName.propTypes = {
  row: oneOfType([array, object]).isRequired
}
