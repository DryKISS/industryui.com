/**
 * Article
 * Template to showcase a Blog article
 */

// React
import { object } from 'prop-types'

// UI
import { BlogCategory, BlogDetails, Breadcrumb, Heading, Image } from '../../'

// Style
import styled from 'styled-components'

export const Article = ({ article, config, facebook }) => {
  return (
    <StyledArticle
      itemProp='blogPost'
      itemScope
      itemType='http://schema.org/BlogPosting'
      role='article'
    >
      <header>
        <StyledImage
          alt={article.heading}
          slant
          src={article.image || `/static/blog/${article.slug}/hero.jpg`}
        />

        <Breadcrumb category={article.category} page={article.title} path={article.category} />

        {config && <BlogCategory config={config} to={article.category} />}

        <StyledHeading content={article.heading} />

        {facebook && <BlogDetails article={article} config={config} facebook={facebook} />}
      </header>

      <span
        dangerouslySetInnerHTML={{
          __html: article.data
        }}
      />

      {/*
        <footer>
          <% if locals[:pager] %>
            <% prevPage = article.article_previous || false %>
            <% nextPage = article.article_next || false %>
            <%= partial 'partials/molecule/pager.erb', locals: {
              prevPage: prevPage,
              nextPage: nextPage
            } %>
          <% end %>
        </footer>
      */}
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  max-width: 750px;
  margin: 0 auto;
  position: relative;

  .article--instagram {
    display: grid;
    justify-items: center;
  }
`

const StyledImage = styled(Image)`
  position: relative;
`

const StyledHeading = styled(Heading)`
  margin-bottom: 1rem;
`

Article.propTypes = {
  article: object.isRequired,
  config: object.isRequired,
  facebook: object
}

// li:before {
//   color: #000 !important;
// }

// li.active,
// a {
//   color: red;
// }

// a:hover {
//   color: red;
// }

// .image__img {
//   width: 100%;
// }

// h1 {
// line-height: 44px;
// margin: 20px 0;
// }

// h2 {
// line-height: 27px;
// margin: 20px 0;
// }

// h3 {
// line-height: 22px;
// margin: 20px 0;
// }

// .img-responsive {
// margin-bottom: 15px;
// }

// a {
// color: $brand-primary;

// &:hover {
// color: #bdbaba;
// }
// }

// p {
// margin-bottom: 20px;
// }

// ul {
// list-style: none;
// margin-bottom: 20px;
// padding-left: 25px;

// li {
// &::before {
// color: $brand-primary;
// content: '\002022';
// display: inline-block;
// width: 14px;
// }
// }
// }

// .table {
// tr {
// td {
// border-top: 0;
// padding: 0;
// }
// }

// p {
// margin: 0;
// }
// }
// }

// &--instagram {
// display: grid;
// justify-items: center;
// }

// // Media queries - Mobile Landscape
// @media only screen and (orientation: portrait) and (min-width: 320px) and (max-width: 767px) {
// // Image
// //------------------------------------------------------------------------//
// &__image {
// margin: 0 -15px;

// // Background slant
// &:after {
// height: 40px;
// }
// }
// }

// // Media queries - Mobile
// @media only screen and (min-width: 320px) and (max-width: 767px) {
// margin-bottom: 30px;
// margin-top: 171px;
// position: initial;

// &__image {
// margin: 0 -15px;
// }

// &.newsroom {
// margin-top: 0;
// }

// .embed-responsive {
// margin-left: -15px;
// margin-right: -15px;
// }

// &__breadcrumb {
// margin-left: -15px;
// margin-right: -15px;
// }
// }
