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

// <li>
//   <span className='fa fa-user' />
//   <span>
//     <a className='blog-detail__author' href='javascript:;'>Deliveroo</a>
//   </span>
// </li>
