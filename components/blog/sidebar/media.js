/**
 * Blog Media
 * Showcases some direct links added in the translations
 */

// UI
import { BlogList, BlogSection } from './components'

export const BlogMedia = () => {
  const list = [
    {
      badge: 'Images:',
      name: 'Flickr',
      to: 'https://www.flickr.com/photos/138548000@N08/'
    }
  ]

  return (
    <BlogSection heading='Media'>

      <BlogList list={list} />

    </BlogSection>
  )
}
