/**
 * Blog - Sidebar
 * Showcases the Find Food, Social, Recent, Tags and Archive
 * The News room replaces the Find food with a search
 */

// React
import React from 'react'
import { array, bool, object } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import BlogArchive from './archive'
import BlogAuthor from './author'
import BlogFindFood from './findFood'
import BlogMedia from './media'
import BlogPromo from './promo'
import BlogRecent from './recent'
import BlogSocial from './social'
import BlogTagCloud from './tag-cloud'

const BlogSidebar = ({ articles, config, facebook, findFood, media, promo, tags }) => {
  return (
    <StyledAside>
      {findFood && <BlogFindFood />}

      {media && <BlogMedia media={media} />}

      <BlogSocial facebook={facebook} />

      {promo && <BlogPromo src={promo.src} to={promo.to} />}

      <BlogRecent articles={articles} config={config} />

      {tags && <BlogTagCloud articles={articles} />}

      <BlogArchive articles={articles} config={config} />

      <BlogAuthor articles={articles} config={config} />
    </StyledAside>
  )
}

const StyledAside = styled.aside`
  border-left: 1px solid #797878;
  height: 100%;
  padding-left: 10px;
`

BlogSidebar.propTypes = {
  articles: array.isRequired,
  config: object.isRequired,
  facebook: object,
  findFood: bool,
  media: array,
  promo: array,
  tags: array
}

BlogSidebar.defaultProps = {
  findFood: false
}

export default BlogSidebar
