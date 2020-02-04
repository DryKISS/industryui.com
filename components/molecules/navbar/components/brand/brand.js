/**
 * Navbar - Brand
 * Adds the client logo if required to the left of the Navbar
 */

// React
import { string } from 'prop-types'

// UI
import { Link } from '../../../../'

export const Brand = ({ brand }) => {
  return (
    <Link border={false} to='/' passHref>
      <img alt='Logo' draggable='false' src={brand} />
    </Link>
  )
}

Brand.propTypes = {
  brand: string
}
