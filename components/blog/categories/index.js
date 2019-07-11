/**
 * Post Categories
 * Displays two article cards from each category.
 * Only shows if homepage is not false
 * Sorted and filtered by date.
 */

// React
import { Fragment } from 'react'
import { any } from 'prop-types'

// UI
import {
  BlogCard,
  Column,
  Heading,
  Row
} from '../../'

export const BlogCategories = ({ articles }) => {
  const _uniqueCategories = () => {
    const uniqueCategories = [...new Set(
      articles.map(article => article.category)
    )]

    return uniqueCategories
  }

  const _find = () => {
    const categories = _uniqueCategories()

    return categories.map((category) => {
      return articles
        .filter((article) => {
          return (article.category === category && article.homepage !== false)
        })
        .sort((a, b) => {
          return new Date(b.date) - new Date(a.date)
        })
        .slice(0, 2)
    })
  }

  return (
    <section>

      {_find().map((articles, index) => (
        <Fragment key={index}>

          <div className='text-center' style={{ marginTop: '2rem' }}>
            <Heading content={articles[0].category} tag='h3' />
          </div>

          <Row>

            {articles.map((article, index) => (
              <Column key={index} md={6}>
                <BlogCard article={article} />
              </Column>
            ))}

          </Row>

        </Fragment>
      ))}

    </section>
  )
}

BlogCategories.propTypes = {
  articles: any
}
