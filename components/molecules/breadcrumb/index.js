/**
 * Breadcrumb
 * Allows a breadcrumb list of two deep
 */

// React
import { string } from 'prop-types'

// Fontawesome
import { Icon, Link, slugify } from '../../'

// Style
import styled from 'styled-components'

export const Breadcrumb = ({ category, path, page }) => {
  const categoryFormatted = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')

  return (
    <nav aria-label='breadcrumb'>
      <StyledOl itemScope='' itemType='http://schema.org/BreadcrumbList'>
        {/* Home link - always static and routes to / */}
        <StyledLi itemProp='itemListElement' itemScope='' itemType='http://schema.org/ListItem'>
          <Link to='/' passHref>
            <StyledA itemProp='item' itemScope='itemscope' itemType='http://schema.org/Thing'>
              <Icon icon='home-heart' />
            </StyledA>
          </Link>

          <meta itemProp='position' content='1' />
        </StyledLi>

        {/* Category link - Need name and path */}
        <StyledLi itemProp='itemListElement' itemScope='' itemType='http://schema.org/ListItem'>
          <Link
            to={{
              as: `/blog/${slugify(path)}`,
              href: {
                pathname: '/blog/category',
                query: {
                  category: slugify(path)
                }
              }
            }}
            passHref
          >
            <StyledA itemProp='item' itemScope='itemscope' itemType='http://schema.org/Thing'>
              {categoryFormatted}
            </StyledA>
          </Link>

          <meta itemProp='position' content='2' />
        </StyledLi>

        {/* Current page */}
        <StyledLi
          aria-current='page'
          itemProp='itemListElement'
          itemScope=''
          itemType='http://schema.org/ListItem'
        >
          <span itemProp='name'>{page}</span>
          <meta itemProp='position' content='3' />
        </StyledLi>
      </StyledOl>
    </nav>
  )
}

const StyledA = styled.a`
  color: #fff;

  &:hover {
    color: #00ccbc;
  }
`

const StyledOl = styled.ol`
  background-color: rgba(62, 62, 62, 0.5);
  border-bottom: 1px #aaa solid;
  border-radius: 0;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0.75rem 1rem;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`

const StyledLi = styled.li`
  &:not(:first-child):before {
    color: #ccc;
    content: '/';
    display: inline-block;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`

Breadcrumb.propTypes = {
  category: string.isRequired,
  page: string.isRequired,
  path: string.isRequired
}
