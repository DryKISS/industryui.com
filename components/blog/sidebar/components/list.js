/**
 * Blog - List
 */

// React
import { Fragment } from 'react'
import { array, bool, object } from 'prop-types'

// UI
import { Badge, Link, slugify, Truncate } from '../../../'

// Style
import styled from 'styled-components'

export const BlogList = ({ author, config, list }) => {
  return (
    <StyledDl>
      {list.map(({ badge, category = '', name, to }, index) => (
        <Fragment key={index}>
          <StyledDt>
            <Badge content={badge} />
          </StyledDt>

          <StyledDd>
            <Link
              to={{
                as: `${config.path}/${category && slugify(category) + '/'}${slugify(to)}`,
                href: {
                  pathname: author ? `${config.path}/author` : `${config.path}/article`,
                  query: {
                    articleSlug: slugify(to),
                    author: slugify(to),
                    category: category && slugify(category)
                  }
                }
              }}
              passHref
            >
              <StyledA>{name}</StyledA>
            </Link>
          </StyledDd>
        </Fragment>
      ))}
    </StyledDl>
  )
}

const StyledDl = styled.dl`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`

const StyledDt = styled.dt`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding: 0 1rem;
`

const StyledDd = styled.dd`
  flex: 0 0 75%;
  max-width: 75%;
  position: relative;
  margin-left: 0;
  min-height: 1px;
  padding: 0.2rem 1rem 0 1rem;
  width: 100%;
`

const StyledA = styled.a`
  ${props => Truncate('100px')}
`

BlogList.propTypes = {
  author: bool,
  config: object.isRequired,
  list: array.isRequired
}

BlogList.defaultProps = {
  author: false
}
