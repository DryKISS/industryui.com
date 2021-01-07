/**
 * Blog - Category
 */

// React
import { any, bool, object, oneOfType, shape, string } from 'prop-types'

// UI
import { Link, slugify } from '../../'

// Style
import styled from 'styled-components'

export const BlogCategory = ({ author, config, className, link, style }) => {
  const path = slugify(link.to)

  return (
    <StyledCategory className={className} style={style}>
      <Link
        passHref
        prefetch={link.prefetch}
        to={{
          as: `${config.path}/${path}`,
          href: {
            pathname: author ? `${config.path}/author` : `${config.path}/category`,
            query: {
              author: path,
              category: path
            }
          }
        }}
      >
        {link.to.toUpperCase().replace('-', ' ')}
      </Link>
    </StyledCategory>
  )
}

const StyledCategory = styled.div`
  display: inline;
  font-size: 12px;
  margin-bottom: 5px;
  position: relative;
  z-index: 2;
`

BlogCategory.propTypes = {
  author: bool,
  className: any,
  config: object.isRequired,
  style: any,
  link: shape({
    passHref: bool,
    prefetch: bool,
    to: oneOfType([object, string]).isRequired
  })
}
