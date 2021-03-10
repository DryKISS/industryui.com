/**
 * Blog - Author
 * List the 5 Authors who have written the most
 */

// React
import React, { useEffect, useState } from 'react'
import { array, number, object } from 'prop-types'

// UI
import { slugify } from '../../'
import { BlogList, BlogSection } from './components'

export const BlogAuthor = ({ articles, config, total }) => {
  const [list, setList] = useState([])

  useEffect(() => {
    setList(_find())
  }, [])

  const _find = () => {
    const counts = articles

      .filter((article) => {
        return article.category !== 'terms' && article.homepage !== false
      })

      .reduce((p, c) => {
        const author = c.author

        if (!Object.prototype.hasOwnProperty.call(p, author)) {
          p[author] = 0
        }

        p[author]++

        return p
      }, {})

    const countsMapped = Object.keys(counts)
      .filter((article, v) => {
        return article !== 'undefined'
      })
      .map((k) => {
        return {
          badge: k,
          name: counts[k],
          to: `${slugify(k)}`,
        }
      })

    return countsMapped
  }

  return (
    <BlogSection heading="Author">
      <BlogList config={config} author list={list} />
    </BlogSection>
  )
}

BlogAuthor.propTypes = {
  articles: array.isRequired,
  config: object.isRequired,
  total: number,
}

BlogAuthor.defaultProps = {
  total: 5,
}
