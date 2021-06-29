/**
 * Blog - Tag Cloud
 * List the 20 most prominent tags from all the articles.
 *
 * - Collate all the tags from all the articles
 * - Choose the top 20 most prominent tags
 * - Provide each a weight based on how many there are
 * - Randomly show them in a cloud
 */

// React
import React, { useEffect, useState } from 'react'
import { array, number } from 'prop-types'

// Lodash
// import countBy from 'lodash/countBy'

// UI
import slugify from '../../utils/slugify/slugify'
import BlogSection from './components/section'

const BlogTagCloud = ({ articles, total }) => {
  const [cloud, setCloud] = useState([])

  useEffect(() => {
    setCloud(_find())
  }, [])

  const _find = () => {
    const tagArray = []

    articles.forEach(({ tags }) => {
      if (!tags) {
        return []
      }

      for (const tag of tags) {
        tagArray.push(slugify(tag))
      }
    })

    // const tagsCounted = countBy(tagArray)

    // Sort
    // const tagsSorted = Object
    //   .entries(tagsCounted)
    //   .sort((a, b) => { return tagsCounted[b] - tagsCounted[a] })
    //   // .map(key => {
    //   //   key
    //   // })

    // newO[key] = list[key]

    // return countBy(tagArray)

    // .filter((article) => {
    //   return (article.category !== 'terms' && article.homepage !== false)
    // })
    // .sort((a, b) => {
    //   return new Date(b.date) - new Date(a.date)
    // })
    // .slice(0, total)
    // .map((opt) => ({
    //   tag: 'Deliveroo',
    //   count: 10
    // }))
  }

  // const data = [
  //   { value: 'JavaScript', count: 38 },
  //   { value: 'React', count: 30 },
  //   { value: 'Nodejs', count: 28 },
  //   { value: 'Express.js', count: 25 },
  //   { value: 'HTML5', count: 33 },
  //   { value: 'MongoDB', count: 18 },
  //   { value: 'CSS3', count: 20 }
  // ]

  return <BlogSection heading="Tags">{cloud}</BlogSection>
}

BlogTagCloud.propTypes = {
  articles: array.isRequired,
  total: number
}

BlogTagCloud.defaultProps = {
  total: 5
}

export default BlogTagCloud
