/**
 * Author
 */

// React
import { string } from 'prop-types'

export const Author = ({ author }) => {
  return (
    <a href='javascript:;'>
      {author}
    </a>
  )
}

Author.propTypes = {
  author: string.isRequired
}
