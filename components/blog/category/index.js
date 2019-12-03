/**
 * Blog - Category
 */

// React
import { any, bool, object, string } from 'prop-types'

// UI
import { Link, slugify } from '../../'

// Style
import styled from 'styled-components'

export const BlogCategory = ({ author, config, className, style, to }) => (
  <StyledCategory className={className} style={style}>
    <Link
      to={{
        as: `${config.path}/${slugify(to)}`,
        href: {
          pathname: author ? `${config.path}/author` : `${config.path}/category`,
          query: {
            author: slugify(to),
            category: slugify(to)
          }
        }
      }}
      passHref
    >
      <StyledA>{to.toUpperCase().replace('-', ' ')}</StyledA>
    </Link>
  </StyledCategory>
)

const StyledCategory = styled.div`
  display: inline;
  font-size: 12px;
  margin-bottom: 5px;
  position: relative;
  z-index: 2;
`

const StyledA = styled.a`
  color: ${({ theme: { COLOUR } }) => COLOUR.primary};
`

BlogCategory.propTypes = {
  author: bool,
  className: any,
  config: object.isRequired,
  style: any,
  to: string.isRequired
}
