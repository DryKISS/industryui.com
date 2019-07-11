/**
 * Blog Tag Cloud
 * List the 20 most prominent tags from all the articles.
 *
 * - Collate all the tags from all the articles
 * - Choose the top 20 most prominent tags
 * - Provide each a weight based on how many there are
 * - Randomly show them in a cloud
 */

// React
import { useEffect, useState } from 'react'
import { array, number } from 'prop-types'

// Lodash
import countBy from 'lodash/countBy'

// UI
import { slugify } from '../../'
import { BlogSection } from './components'

export const BlogTagCloud = ({ articles, total }) => {
  const [cloud, setCloud] = useState([])

  useEffect(() => {
    // console.log(_find())
    setCloud(_find())
  }, [])

  const _find = () => {
    const tagArray = []

    articles.map(({ tags }) => {
      if (!tags) {
        return []
      }

      for (var tag of tags) {
        tagArray.push(slugify(tag))
      }
    })

    const tagsCounted = countBy(tagArray)

    // Sort
    const tagsSorted = Object
      .entries(tagsCounted)
      .sort((a, b) => { return tagsCounted[b] - tagsCounted[a] })
      // .map(key => {
      //   console.log(key)
      // })

    // newO[key] = list[key]

    // return countBy(tagArray)
    // console.log(tagsSorted)

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

  const data = [
    { value: 'JavaScript', count: 38 },
    { value: 'React', count: 30 },
    { value: 'Nodejs', count: 28 },
    { value: 'Express.js', count: 25 },
    { value: 'HTML5', count: 33 },
    { value: 'MongoDB', count: 18 },
    { value: 'CSS3', count: 20 }
  ]

  return (
    <BlogSection heading='Tags'>

      {/* {cloud} */}

    </BlogSection>
  )
}

BlogTagCloud.propTypes = {
  articles: array.isRequired,
  total: number
}

BlogTagCloud.defaultProps = {
  total: 5
}

// .#{ $module } {
//   clear: both;
//   margin-bottom: 19px;
//   // Label
//   //--------------------------------------------------------------------------//
//   .label {
//     border-radius: 0;
//     display: inline-block;
//     line-height: 140%;

//     &:hover {
//       background-color: #CAC7C7;
//       color: #000;
//     }
//   }

//   // Tag
//   //--------------------------------------------------------------------------//
//   &__tag {
//     margin-bottom: 4px;
//     margin-right: 5px;
//     vertical-align: baseline;
//   }

// <%
// sizeMin = 80
// sizeMax = 200
// precision = 0
// unit = '%'
// threshold = locals[:threshold] || 1
// total = 20
// %>

// <%# Tag map %>
// <% tagMap = blog(blog).tags.map do |tag, articles| %>
//   <% [tag, articles.count] if articles.count >= threshold %>
// <% end %>

// <% tagMap = tagMap.compact.sort_by{|k, v| v}.reverse[0...total] %>

// <%# Shuffling the tags means a complete re-write each time %>
// <%# tagMap = tagMap.compact.sort_by{ | k, v | v }.reverse[ 0...total ].shuffle %>

// <% min, max = tagMap.map( &:last ).minmax %>

// <section class="tag-cloud">

//   <div class="tag-cloud__tags">

//     <% tagMap.each do |tag, count| %>
//       <% weight = (Math.log(count) - Math.log(min)) / (Math.log(max) - Math.log(min)) %>
//       <% fontSize = sprintf("%.#{precision}f", sizeMin + ((sizeMax - sizeMin) * weight).to_f) %>

//       <% link_to(tag_path(tag, blog), class: 'tag-cloud__tag label label-info', style: "font-size: #{fontSize}#{unit}") do %>
//         <%= tag %>
//       <% end %>

//     <% end %>

//   </div>

// </section>
