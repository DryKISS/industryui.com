/**
 * Blog - Listing
 * Displays articles cards from selected author, category or tag
 *
 * - Published is true
 * - Homepage is not false
 * - Sorted and filtered by date
 */

// React
import { any, string } from 'prop-types'

// Lodash
import _filter from 'lodash/filter'

// UI
import {
  BlogCard,
  Column,
  Row,
  slugify
} from '../../'

export const BlogListing = ({ articles, author, category, tag }) => {
  const _findTag = (articles) => {
    return _filter(articles, { tags: [ tag ] })
  }

  const _findArticle = (articles) => {
    return articles.filter((article) => {
      return (
        slugify(
          category
            ? article.category
            : article.author
        ) === (
          category || author
        ) &&
          article.homepage !== false && article.published
      )
    })
  }

  const _find = () => {
    const _findMe = tag ? _findTag(articles) : _findArticle(articles)

    return _findMe
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
      .slice(0, 10)
  }

  return (
    <Row>
      {_find().map((article, index) => (
        <Column key={index} md={6}>
          <BlogCard article={article} />
        </Column>
      ))}
    </Row>
  )
}

BlogListing.propTypes = {
  articles: any.isRequired,
  author: string,
  category: string,
  tag: string
}
