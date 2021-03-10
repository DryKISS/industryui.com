/**
 * Blog - Hero
 * Gets the latest Hero article(s)
 *
 * Select Hero
 * - Exclude terms category
 * - Exclude homepage=false
 *
 * (a.data.hero === true || a.data.hero === 'true') and a.data.category
 * != 'terms' and (a.data.homepage != false || a.data.homepage != 'false')
 */

// React
import React from 'react'
import { any, number, object } from 'prop-types'

// UI
import { BlogCard, Column, Row } from '../../'

export const BlogHero = ({ articles, config, number }) => {
  const _find = () => {
    return articles.find((article) => article.hero === true)
  }

  const renderHero = () => {
    const article = _find()

    return (
      <Column md={12 / number}>
        <BlogCard article={article} config={config} type="hero" />
      </Column>
    )
  }

  return <Row>{renderHero()}</Row>
}

BlogHero.propTypes = {
  articles: any.isRequired,
  config: object.isRequired,
  number: number,
}

BlogHero.defaultProps = {
  number: 1,
}
