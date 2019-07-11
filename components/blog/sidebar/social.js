/**
 * Blog Social
 */

// React
import { bool } from 'prop-types'

// UI
import { BlogSection } from './components'

export const BlogSocial = ({ facebook, instagram, twitter }) => {
  const url = 'https//www.facebook.com/drykissltd'
  const appId = '285418984933747'

  return (
    <>
      {facebook &&
        <BlogSection heading='Facebook'>
          <iframe
            src={`https://www.facebook.com/plugins/page.php?href=${url}&height=200&width=339&small_header=true&appId=${appId}`}
            width='339'
            height='auto'
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling='no'
            frameBorder='0'
            allow='encrypted-media'
          />
        </BlogSection>
      }

      {instagram &&
        <BlogSection heading='Instagram'>
          <iframe
            src='http://lightwidget.com/widgets/ff03b23658a55244989ab894695973f9.html'
            scrolling='no'
            style={{ width: '100%', border: '0', overflow: 'hidden' }}
          />
        </BlogSection>
      }

      {twitter &&
        <BlogSection heading='Twitter'>
          {/* <a className='twitter-timeline' data-lang='en' data-theme='light' href='https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw'>National Park Tweets - Curated tweets by TwitterDev</a>
          <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8' /> */}
        </BlogSection>
      }
    </>
  )
}

BlogSocial.propTypes = {
  facebook: bool,
  instagram: bool,
  twitter: bool
}

BlogSocial.defaultProps = {
  facebook: true,
  instagram: true,
  twitter: false
}
