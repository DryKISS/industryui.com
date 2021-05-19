/**
 * Article
 * Template to showcase a Blog article
 */

// React
import React from 'react'
import { object, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { BlogCategory } from '../../blog/category/category'
import { BlogDetails } from '../../blog/details/details'
import { Breadcrumb } from '../../molecules/breadcrumb/breadcrumb'
import Heading from '../../atoms/heading/heading'
import Image from '../../atoms/image/image'

const Article = ({ article, className, config, facebook, style }) => {
  return (
    <StyledArticle
      className={className}
      itemProp="blogPost"
      itemScope
      itemType="http://schema.org/BlogPosting"
      role="article"
      style={style}
    >
      <header>
        <StyledImage
          alt={article.heading}
          src={article.image || `/static/blog/${article.slug}/hero.jpg`}
        />

        {article.category && (
          <Breadcrumb category={article.category} page={article.title} path={article.category} />
        )}

        {config && article.category && <BlogCategory config={config} to={article.category} />}

        <StyledHeading content={article.heading} />

        {facebook && <BlogDetails article={article} config={config} facebook={facebook} />}
      </header>

      <span
        dangerouslySetInnerHTML={{
          __html: article.data
        }}
      />
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
  className: string,
  config: object,
  facebook: object,
  style: object
}

export default Article
