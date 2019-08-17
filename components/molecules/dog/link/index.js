/**
 * Dog link
 */

// React
import { string } from 'prop-types'

// UI
import { Link } from '../../../'

export const DogLink = ({ name }) => {
  const slugify = (breed) => {
    const slug = breed.toLowerCase().replace(/ /g, '-').replace(/'/, '')
    return slug
  }

  const slug = slugify(name)

  return (
    <Link to={{
      as: `/dogs/breeds/${slug}`,
      href: {
        pathname: '/dogs/breeds/profile',
        query: { dogSlug: slug }
      }
    }}>
      <a>{name}</a>
    </Link>
  )
}

DogLink.propTypes = {
  name: string.isRequired
}
