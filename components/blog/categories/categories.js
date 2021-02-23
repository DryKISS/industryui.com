/**
 * Blog - Categories
 * Displays two article cards from each category.
 *
 * - Only shows if homepage is not false
 * - Sorted and filtered by date.
 */

// React
import React, { Fragment } from 'react'
import { any, object } from 'prop-types'

// UI
import { BlogCard, Column, Heading, Link, Row, slugify } from '../../'

// Style
import styled from 'styled-components'

export const BlogCategories = ({ articles, config }) => {
  const _uniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(articles.map((article) => article.category))
    ]
    return uniqueCategories
  }

  const _find = () => {
    const categories = _uniqueCategories()

    return categories.map((category) => {
      return articles
        .filter((article) => {
          return article.category === category && article.homepage !== false
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
          <Link
            to={{
              as: `${config.path}/${slugify(articles[0].category)}`,
              href: {
                pathname: `${config.path}/category`,
                query: {
                  category: slugify(articles[0].category)
                }
              }
            }}>
            <StyledHeading content={articles[0].category} tag="h2" />
          </Link>

          <Row>
            {articles.map((article, index) => (
              <Column key={index} md={6}>
                <BlogCard article={article} config={config} />
              </Column>
            ))}
          </Row>
        </Fragment>
      ))}
    </section>
  )
}

const StyledHeading = styled(Heading)`
  font-size: 1.5rem;
  margin-top: 2rem;
  text-align: center;

  &:hover {
    color: #00ccbc;
  }
`

BlogCategories.propTypes = {
  articles: any.isRequired,
  config: object.isRequired
}
