/**
 * Blog - Card
 */

// React
import React from 'react'
import { any, object, oneOf } from 'prop-types'

// UI
import { BlogCategory, BlogTags, Button, Card, CardImage, Divider, Link, slugify } from '../../'
import { CardBody } from '../../molecules/card/components/body'
import { Heading } from '../../atoms/heading/heading'

// Style
import styled, { css } from 'styled-components'

export const BlogCard = ({ article, config, link, type }) => {
  const { author, category, excerpt, heading, slug } = article

  const articleSlug = article ? slugify(slug) : null
  const categorySlug = category ? slugify(category) : null

  const articleLink = {
    as: article?.linkAs || `${config.path}/${categorySlug}/${articleSlug}`,
    href: article?.linkHref || `${config.path}/[categoryId]/[articleId]`
  }

  return (
    <article role="article" itemProp="blogPost" itemScope itemType="http://schema.org/BlogPosting">
      <Card shadow>
        <Link to={articleLink} {...link}>
          <CardImage alt={heading} src={article?.image || `/static/blog/${slug}/hero.jpg?v=1.00`} />
        </Link>

        <StyledCardBody type={type}>
          {type === 'normal' && category && (
            <BlogCategory config={config} link={{ to: category, ...link }} type={type} />
          )}

          <StyledContent type={type}>
            <Link to={articleLink} {...link}>
              <StyledHeading content={heading} tag="h1" noWrap type={type} />
            </Link>

            {type === 'normal' && <p itemProp="description">{excerpt}</p>}
          </StyledContent>

          {type === 'normal' && (
            <>
              {article.tags && (
                <TagsContainer>
                  <BlogTags tags={article.tags} />
                </TagsContainer>
              )}

              <Divider size="sm" />

              {author && (
                <BlogCategory author link={{ to: author, ...link }} config={config} type={type} />
              )}

              {article.readtime && (
                <StyledReadTime>{article.readtime}min read time.</StyledReadTime>
              )}
            </>
          )}

          <Link to={articleLink} {...link}>
            <StyledButton
              content="Read more"
              context={type === 'normal' ? 'primary' : 'white'}
              size={type === 'normal' ? 'sm' : 'lg'}
              position={type}
            />
          </Link>
        </StyledCardBody>
      </Card>
    </article>
  )
}

const TagsContainer = styled.div`
  height: 1.75rem;
  margin-top: 0.25rem;
  overflow: hidden;
`

const StyledButton = styled(Button)`
  bottom: 1.25rem;
  position: absolute;
  right: 1rem;
  z-index: 2;
  ${({ position }) =>
    position === 'hero' &&
    css`
      bottom: 1.25rem;
    `}
`

const StyledCardBody = styled(CardBody)`
  min-height: 303px;
  position: relative;
  z-index: 0;
  ${({ theme: { COLOUR }, type }) =>
    type === 'hero' &&
    css`
      background-color: ${COLOUR.primary};
      min-height: 80px;
      &:after {
        background: ${COLOUR.primary};
        content: '';
        display: block;
        height: 120px;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: skewy(6deg);
        transform-origin: 100% 0;
        z-index: -1;
      }
    `}
`

const StyledContent = styled.div`
  height: 128px;
  margin-bottom: 1rem;
  overflow: hidden;
  ${({ type }) =>
    type === 'hero' &&
    css`
      height: 122px;
      margin-bottom: 0;
    `}
`

const StyledHeading = styled(Heading)`
  color: #000;
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin-bottom: 0;
  max-width: 500px;
  overflow: hidden;
  position: relative;
  z-index: 2;

  &:hover {
    color: ${({ type, theme: { COLOUR } }) =>
      type === 'hero' ? COLOUR.light : COLOUR.drykiss_lightBlue};
  }

  ${({ type }) =>
    type === 'hero' &&
    css`
      color: #fff;
      font-size: 2rem;
      line-height: 2rem;
      max-height: 115px;
    `}
`

const StyledReadTime = styled.p`
  font-size: 0.75rem;
  margin: 0;
`

BlogCard.propTypes = {
  article: any.isRequired,
  config: object.isRequired,
  type: oneOf(['hero', 'normal'])
}

BlogCard.defaultProps = {
  type: 'normal'
}
