/**
 * Blog - Tags
 * Comile the list of tags for the article details
 *
 * - Slugify these
 * - Unique them
 */

// React
import { array } from 'prop-types'

// UI
import { Badge, slugify } from '../../'

export const BlogTags = ({ className, style, tags }) => {
  const tagMap = () => {
    const tagsSlugged = tags.map((tag, index) => {
      return slugify(tag)
    })

    const tagsUnique = [...new Set(tagsSlugged)]

    return tagsUnique.map((tag, index) => {
      return (
        <Badge
          className={className}
          content={tag}
          key={`${tag}_${index}`}
          style={style}
          to={`/blog/tag/${tag}`}
        />
      )
    })
  }

  return <div>{tagMap()}</div>
}

BlogTags.propTypes = {
  tags: array.isRequired
}
