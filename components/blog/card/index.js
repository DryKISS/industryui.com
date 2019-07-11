/**
 * Card
 * Provides a card that details the blog post, usually used on the home page
 */

// React
import { any, string } from 'prop-types'

// UI
import {
  Button,
  Card,
  CardBody,
  Category,
  Heading,
  Link,
  slugify
} from '../../'

// Style
import styled from 'styled-components'

export const BlogCard = ({ article, type }) => {
  const { category, excerpt, heading, slug } = article

  return (
    <article
      role='article'
      itemProp='blogPost'
      itemScope
      itemType='http://schema.org/BlogPosting'
    >
      <Card
        alt={heading}
        bordered
        image={`/static/blog/${slug}/hero.jpg`}
        shadow
        // to={{
        //   as: `/blog/${slug}`,
        //   href: {
        //     pathname: '/blog/article',
        //     query: { slug: slug }
        //   }
        // }}
      >
        <StyledCardBody type={type}>

          {console.log(type)}

          <StyledCategory
            category={category}
            to={`/blog/${slugify(category)}`}
          />

          <StyledContent>

            <StyledTitle content={heading} tag='h1' />
            <p itemProp='description'>{excerpt}</p>

          </StyledContent>

          <StyledButton
            content='Read more'
            context='white'
            size='lg'
          />

        </StyledCardBody>

      </Card>

    </article>
  )
}

const StyledButton = styled(Button)`
  bottom: 25px;
  position: absolute;
  right: 15px;
  z-index: 2;
`

const StyledCardBody = styled(CardBody)`
  background-color: ${({ theme }) => theme.COLOUR.primary};
  min-height: 80px;
  position: relative;

  ${({ type }) => type === 'hero' && `
    &:after {
      background: ${({ theme }) => theme.COLOUR.primary};
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

const StyledCategory = styled(Category)`
  a {
    color: #fff;
  }
`

const StyledContent = styled.div`
  height: 119px;
  overflow: hidden;
`

const StyledTitle = styled(Heading)`
  color: #fff;
  font-size: 34px;
  line-height: 38px;
  max-height: 115px;
  max-width: 500px;
  overflow: hidden;
  position: relative;
  z-index: 2;
`

BlogCard.propTypes = {
  article: any.isRequired,
  type: string
}

BlogCard.defaultProps = {
  type: 'normal'
}
