/**
 * Blog - Tags
 * Comile the list of tags for the article details
 *
 * - Slugify these
 * - Unique them
 */

// React
import { any, array } from 'prop-types'

// UI
import { Badge, slugify } from '../../'

const TagMap = ({ className, style, tags }) => {
  tags.map((tag, index) => slugify(tag))

  const tagsUnique = [...new Set(tags)]

  return tagsUnique.map((tag, index) => (
    <Badge
      className={className}
      content={tag}
      key={`${tag}_${index}`}
      style={style}
      to={`/blog/tag/${tag}`}
    />
  ))
}

export const BlogTags = ({ className, style, tags }) => {
  return <TagMap className={className} style={style} tags={tags} />
}

BlogTags.propTypes = {
  className: any,
  style: any,
  tags: array.isRequired
}
