/**
 * Blog - Social
 */

// React
import React from 'react'
import { bool, object } from 'prop-types'

// UI
import { FacebookPagePlugin } from '../../'
import { BlogSection } from './components'

export const BlogSocial = ({ facebook, instagram, twitter }) => {
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

      {twitter && (
        <BlogSection heading="Twitter">
          {/* <a className='twitter-timeline' data-lang='en' data-theme='light'
          href='https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw'>
          National Park Tweets - Curated tweets by TwitterDev</a>
          <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8' /> */}
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
