/**
 * Blog - Recent
 * Creates a module to showcase five of the most recent blog articles.
 *
 * Select
 * - Not terms
 * - Not homepage false
 */

// React
import React, { useEffect, useState } from 'react'
import { array, number, object } from 'prop-types'

// UI
import { formatIntDateShort } from '../../'
import { BlogList, BlogSection } from './components'

export const BlogRecent = ({ articles, config, total }) => {
  const [list, setList] = useState([])

  useEffect(() => {
    setList(_find())
  }, [])

  const _find = () => {
    return articles
      .filter((article) => {
        return article.category !== 'terms' && article.homepage !== false
      })
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
      .slice(0, total)
      .map((opt) => ({
        badge: formatIntDateShort(new Date(opt.date)),
        category: opt.category,
        name: opt.heading,
        to: opt.slug
      }))
  }

  return (
    <BlogSection heading="Recent">
      <BlogList config={config} list={list} />
    </BlogSection>
  )
}

BlogRecent.propTypes = {
  articles: array.isRequired,
  config: object.isRequired,
  total: number
}

BlogRecent.defaultProps = {
  total: 5
}
