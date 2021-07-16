/**
 * Blog - Media
 * Showcases some direct links added in the translations
 */

// React
import React from 'react'
import { array, object } from 'prop-types'

// UI
import BlogList from './components/list'
import BlogSection from './components/section'

const BlogMedia = ({ config, media }) => {
  return (
    <BlogSection heading="Media">
      <BlogList config={config} list={media} />
    </BlogSection>
  )
}

BlogMedia.propTypes = {
  config: object.isRequired,
  media: array.isRequired
}

export default BlogMedia
