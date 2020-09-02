/**
 * Blog - Card
 * Provides a card that details a blog post
 */

// React
import { any, object, string } from 'prop-types'

// UI
import { BlogCategory, BlogTags, Card, CardImage, Divider, Link, slugify } from '../../../'

import { Button } from '../../atoms/button/components/button/button'
import { CardBody } from '../../molecules/card/components/body'
import { Heading } from '../../atoms/heading/heading'

// Style
import styled, { css } from 'styled-components'

export const BlogCard = ({ article, config, type }) => {
  const { author, category, excerpt, heading, slug } = article

  const articleSlug = slugify(article.slug)
  const categorySlug = slugify(category)

  const articleLink = {
    as: `${config.path}/${categorySlug}/${articleSlug}`,
    href: `${config.path}/[categoryId]/[articleId]`
  }

  return (
    <article role='article' itemProp='blogPost' itemScope itemType='http://schema.org/BlogPosting'>
      <Card shadow>
        <Link to={articleLink}>
          <CardImage alt={heading} src={`/static/blog/${slug}/hero.jpg?v=1.00`} />
        </Link>

        <StyledCardBody type={type}>
          {type === 'normal' && <BlogCategory config={config} to={category} type={type} />}

          <StyledContent type={type}>
            <Link to={articleLink}>
              <StyledHeading content={heading} tag='h1' type={type} />
            </Link>

            {type === 'normal' && <p itemProp='description'>{excerpt}</p>}
          </StyledContent>

          {type === 'normal' && (
            <>
              {article.tags && (
                <TagsContainer>
                  <BlogTags tags={article.tags} />
                </TagsContainer>
              )}

              <Divider size='sm' />

              <BlogCategory author to={author} config={config} type={type} />

              <StyledReadTime>{article.readtime}min read time.</StyledReadTime>
            </>
          )}

          <Link to={articleLink}>
            <StyledButton
              content='Read more'
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
  type: string
}

BlogCard.defaultProps = {
  type: 'normal'
}
