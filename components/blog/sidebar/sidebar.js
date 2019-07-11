/**
 * Blog Sidebar
 * Showcases the Find Food, Social, Recent, Tags and Archive
 * The News room replaces the Find food with a search
 */

// React
import { array } from 'prop-types'

import {
  BlogArchive,
  BlogAuthor,
  BlogMedia,
  BlogPromo,
  BlogRecent,
  BlogSocial,
  BlogTagCloud
} from '../../'

// Style
import styled from 'styled-components'

export const BlogSidebar = ({ articles, media, promo }) => {
  return (
    <StyledAside>

      {media &&
        <BlogMedia />
      }

      <BlogSocial />

      {promo &&
        <BlogPromo src={promo.src} to={promo.to} />
      }

      <BlogRecent articles={articles} />

      <BlogTagCloud articles={articles} />

      <BlogArchive articles={articles} />

      <BlogAuthor articles={articles} />

    </StyledAside>
  )
}

const StyledAside = styled.aside`
  border-left: 1px solid #797878;
  height: 100%;
  padding-left: 10px;
`

BlogSidebar.propTypes = {
  articles: array.isRequired
}

BlogSidebar.defaultProps = {
  media: true,
  promo: true
}
