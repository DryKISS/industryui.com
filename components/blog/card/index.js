/**
 * Blog - Card
 * Provides a card that details the blog post
 */

// React
import { any, object, string } from 'prop-types'

// UI
import {
  BlogCategory,
  BlogTags,
  Button,
  Card,
  CardBody,
  CardImage,
  Divider,
  Heading,
  Link,
  slugify
} from '../../'

// Style
import styled from 'styled-components'

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
          <a>
            <CardImage alt={heading} src={`/static/blog/${slug}/hero.jpg`} />
          </a>
        </Link>

        <StyledCardBody type={type}>
          {type === 'normal' && <BlogCategory config={config} to={category} type={type} />}

          <StyledContent type={type}>
            <Link to={articleLink}>
              <a>
                <StyledHeading content={heading} tag='h1' type={type} />
              </a>
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

              <Divider size='md' style={{ marginTop: '.5rem' }} />

              <BlogCategory author to={author} config={config} type={type} />

              <p style={{ fontSize: '14px', margin: '0' }}>{article.readtime}min read time.</p>
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
  height: 28px;
  margin-top: 5px;
  overflow: hidden;
`

const StyledButton = styled(Button)`
  bottom: 20px;
  position: absolute;
  right: 15px;
  z-index: 2;

  ${({ position }) =>
    position === 'hero' &&
    `
    bottom: 25px;
  `}
`

const StyledCardBody = styled(CardBody)`
  min-height: 303px;
  position: relative;

  ${({ theme, type }) =>
    type === 'hero' &&
    `
    background-color: ${theme.COLOUR.primary};
    min-height: 80px;
    &:after {
      background: ${theme.COLOUR.primary};
      content: '';
      display: block;
      height: 80px;
      left: 0;
      position: absolute;
      right: 0;
      top: -80px;
      transform: skewy(6deg);
      transform-origin: 0 100%;
      z-index: 1;
    }
  `}
`

const StyledContent = styled.div`
  height: 128px;
  margin-bottom: 1rem;
  overflow: hidden;

  ${({ type }) =>
    type === 'hero' &&
    `
    height: 122px;
    margin-bottom: 0;
  `}
`

const StyledHeading = styled(Heading)`
  color: #000;
  font-size: 20px;
  line-height: 22px;
  margin-bottom: 0;
  max-width: 500px;
  overflow: hidden;
  position: relative;
  z-index: 2;

  &:hover {
    color: #00ccbc;
  }

  ${({ type }) =>
    type === 'hero' &&
    `
    color: #fff;
    font-size: 34px;
    line-height: 38px;
    max-height: 115px;

    &:hover {
      color: #f2f1f1;
    }
  `}
`

BlogCard.propTypes = {
  article: any.isRequired,
  config: object.isRequired,
  type: string
}

BlogCard.defaultProps = {
  type: 'normal'
}
