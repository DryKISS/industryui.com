/**
 * Blog Archive
 * Lists the years and total number of blogs in that year
 *
 * - Group the articles by the year they were written
 * - Link to the archive/yyyy page
 */

// React
import { useEffect, useState } from 'react'
import { array, number } from 'prop-types'

// UI
import { formatIntDateYear } from '../../'
import { BlogList, BlogSection } from './components'

export const BlogArchive = ({ articles, total }) => {
  const [list, setList] = useState([])

  useEffect(() => {
    setList(_find())
  }, [])

  const _find = () => {
    const counts = articles

      .filter((article) => {
        return (article.category !== 'terms' && article.homepage !== false)
      })

      .reduce((p, c) => {
        const year = formatIntDateYear(new Date(c.date))

        if (!p.hasOwnProperty(year)) {
          p[year] = 0
        }

        p[year]++

        return p
      }, {})

    const countsMapped = Object
      .keys(counts)
      .map(k => {
        return {
          badge: k,
          name: counts[k],
          to: `/archive/${k}.html`
        }
      })
      .reverse()

    return countsMapped
  }

  return (
    <BlogSection heading='Archive'>

      <BlogList list={list} />

    </BlogSection>
  )
}

BlogArchive.propTypes = {
  articles: array.isRequired,
  total: number
}

BlogArchive.defaultProps = {
  total: 5
}
