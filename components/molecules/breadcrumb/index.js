/**
 * Breadcrumb
 * Allows a breadcrumb list of two deep
 */

// React
import { string } from 'prop-types'

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Style
import styled from 'styled-components'

export const Breadcrumb = ({ category, path, page }) => {
  const categoryFormatted = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')

  return (
    <nav aria-label='breadcrumb'>

      <StyledOl
        itemScope=''
        itemType='http://schema.org/BreadcrumbList'
      >

        {/* Home link - always static and routes to / */}
        <StyledLi
          itemProp='itemListElement'
          itemScope=''
          itemType='http://schema.org/ListItem'
        >
          <a
            href='javascript:;'
            itemProp='item'
            itemScope='itemscope'
            itemType='http://schema.org/Thing'
          >
            <FontAwesomeIcon icon={['far', 'home-heart']} />
          </a>

          <meta itemProp='position' content='1' />
        </StyledLi>

        {/* Category link - Need name and path */}
        <StyledLi
          itemProp='itemListElement'
          itemScope=''
          itemType='http://schema.org/ListItem'
        >
          <a
            href={path}
            itemProp='item'
            itemScope='itemscope'
            itemType='http://schema.org/Thing'
          >
            {categoryFormatted}
          </a>

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

const StyledOl = styled.ol`
  background-color: rgba(62, 62, 62, 0.5);
  border-bottom: 1px #ddd solid;
  border-radius: 0;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: .75rem 1rem;
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
    padding-left: .5rem;
    padding-right: .5rem;
  }
`

Breadcrumb.propTypes = {
  category: string.isRequired,
  page: string.isRequired,
  path: string.isRequired
}
