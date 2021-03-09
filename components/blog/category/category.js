/**
 * Components - Blog - Category
 */

// React
import React from 'react'
import { any, bool, object, oneOfType, shape, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { Link, slugify } from '../../'

export const BlogCategory = ({
  author,
  config,
  className,
  link,
  style,
  to
}) => {
  const path = slugify(to ?? link.to)

  return (
    <StyledCategory className={className} style={style}>
      <Link
        passHref
        to={{
          as: `${config.path}/${path}`,
          href: {
            pathname: author
              ? `${config.path}/author`
              : `${config.path}/category`,
            query: {
              author: path,
              category: path
            }
          }
        }}>
        {path.toUpperCase().replace('-', ' ')}
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
  to: shape({
    passHref: bool,
    to: oneOfType([object, string]).isRequired
  })
}
