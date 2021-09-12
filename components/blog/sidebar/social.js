/**
 * Blog - Social
 */

// React
import React from 'react'
import { bool, object } from 'prop-types'

// UI
import FacebookPagePlugin from '../../social/facebook/pagePlugin'
import BlogSection from './components/section'

const BlogSocial = ({ facebook, instagram, twitter }) => {
  return (
    <>
      {facebook && (
        <BlogSection heading="Facebook">
          <FacebookPagePlugin appId={facebook.appId} to={facebook.appPath} width={349} />
        </BlogSection>
      )}

      {instagram && (
        <BlogSection heading="Instagram">
          <iframe
            src="https://lightwidget.com/widgets/ff03b23658a55244989ab894695973f9.html"
            scrolling="no"
            style={{ width: '100%', border: '0', overflow: 'hidden' }}
          />
        </BlogSection>
      )}
    </>
  )
}

BlogSocial.propTypes = {
  facebook: object,
  instagram: bool,
  twitter: bool
}

BlogSocial.defaultProps = {
  instagram: false,
  twitter: false
}

export default BlogSocial
