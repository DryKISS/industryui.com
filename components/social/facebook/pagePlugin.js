/**
 * Components -Social - Facebook - Page Plugin
 *
 * - height: Min. is 70
 * - tabs: Tabs to render i.e. [timeline, events, messages]
 * - width: Min. is 180 & Max. is 500
 */

// React
import React from 'react'
import { bool, number, string } from 'prop-types'

const p = 'https://www.facebook.com/plugins/page.php'

const FacebookPagePlugin = ({
  appId,
  iFrame,
  adaptContainerWidth,
  height,
  hideCover,
  hideCta,
  showFacepile,
  smallHeader,
  tabs,
  to,
  width
}) => {
  const url = `${p}?href=${to}&tabs=${tabs}&width=${width}&height=${height}
    &small_header=${smallHeader} &adapt_container_width=${adaptContainerWidth}
    &hide_cover=${hideCover}&show_facepile=${showFacepile}&appId=${appId}`

  return (
    <>
      {iFrame && (
        <iframe
          allow="encrypted-media"
          frameBorder="0"
          height={height}
          scrolling="no"
          src={url}
          style={{ border: 'none', overflow: 'hidden' }}
          width={width}
        />
      )}

      {!iFrame && (
        <div
          className="fb-page"
          data-adapt-container-width="true"
          data-height=""
          data-hide-cover="false"
          data-href={to}
          data-layout="button_count"
          data-show-facepile="true"
          data-small-header="false"
          data-tabs="timeline"
          data-width=""
        >
          <blockquote
            cite="https://www.facebook.com/maitaidating/"
            className="fb-xfbml-parse-ignore"
          >
            <a href={to}>Mai Tai Dating</a>
          </blockquote>
        </div>
      )}
    </>
  )
}

FacebookPagePlugin.propTypes = {
  appId: number.isRequired,
  adaptContainerWidth: bool,
  height: number,
  hideCover: bool,
  hideCta: bool,
  iFrame: bool,
  showFacepile: bool,
  smallHeader: bool,
  tabs: string,
  to: string.isRequired,
  width: number
}

FacebookPagePlugin.defaultProps = {
  adaptContainerWidth: true,
  height: 500,
  hideCover: false,
  hideCta: false,
  iFrame: true,
  showFacepile: true,
  smallHeader: true,
  tabs: 'timeline,messages,events',
  width: 340
}

export default FacebookPagePlugin
