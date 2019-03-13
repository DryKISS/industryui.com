/**
 * Tags
 */

// React
import { array } from 'prop-types'

// UI
import { Badge } from '../../'

export const Tags = ({ tags }) => {
  const tagMap = () => {
    return tags.map(({ content, to }, index) =>
      <Badge content={content} key={`${to}_${index}`} to={to} />
    )
  }

  return (
    <div className='Tags'>
      {tagMap()}
    </div>
  )
}

Tags.propTypes = {
  tags: array.isRequired
}
