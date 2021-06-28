/**
 * Components - Social - Facebook - Share Button
 */

// React
import React from 'react'
import { bool, number, oneOf, string } from 'prop-types'

const p = 'https://www.facebook.com/plugins/share_button.php'

export const FacebookShareButton = ({ appId, hashTag, iFrame, layout, size, to }) => {
  return (
    <>
      {iFrame && (
        <iframe
          allow="encrypted-media"
          frameBorder="0"
          height="29"
          scrolling="no"
          src={`${p}?href=${to}&layout=${layout}&size=${size}&appId=${appId}&width=104&height=30`}
          style={{ border: 'none', overflow: 'hidden' }}
          width="104"
        />
      )}

      {!iFrame && (
        <div
          className="fb-share-button"
          data-hashtag={hashTag}
          data-href={to}
          data-layout={layout}
          data-size={size}
        >
          <a
            className="fb-xfbml-parse-ignore"
            href={`https://www.facebook.com/sharer/sharer.php?u=${to}&src=sdkprepars`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {' '}
          </a>
        </div>
      )}
    </>
  )
}

FacebookShareButton.propTypes = {
  appId: number.isRequired,
  hashTag: string,
  iFrame: bool,
  layout: oneOf(['box_count', 'button', 'button_count', 'icon_link']),
  size: oneOf(['large', 'small']),
  to: string.isRequired
}

FacebookShareButton.defaultProps = {
  iFrame: true,
  layout: 'button',
  size: 'large'
}
export default FacebookShareButton
