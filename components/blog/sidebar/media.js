/**
 * Blog - Media
 * Showcases some direct links added in the translations
 */

// React
import React from 'react'
import { array, object } from 'prop-types'

// UI
import { BlogList, BlogSection } from './components'

export const BlogMedia = ({ config, media }) => {
  return (
    <BlogSection heading='Media'>
      <BlogList config={config} list={media} />
    </BlogSection>
  )
}

BlogMedia.propTypes = {
  config: object.isRequired,
  media: array.isRequired
}
