/**
 * Social - Facebook - Share Button
 *
 * @see https://developers.facebook.com/docs/plugins/share-button/
 */

// React
import { bool, number, oneOf, string } from 'prop-types'

export const FacebookShareButton = ({ appId, hashTag, iFrame, layout, size, to }) => {
  return (
    <>
      {iFrame &&
        <iframe
          allow='encrypted-media'
          frameBorder='0'
          height='29'
          scrolling='no'
          src={`https://www.facebook.com/plugins/share_button.php?href=${to}&layout=${layout}&size=${size}&appId=${appId}&width=104&height=30`}
          style={{ border: 'none', overflow: 'hidden' }}
          width='104'
        />
      }

      {!iFrame &&
        <div
          className='fb-share-button'
          data-hashtag={hashTag}
          data-href={to}
          data-layout={layout}
          data-size={size}
        >
          <a
            className='fb-xfbml-parse-ignore'
            href={`https://www.facebook.com/sharer/sharer.php?u=${to}&src=sdkprepars`}
            target='_blank'
          >
            {' '}
          </a>
        </div>
      }
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

// <%
// href = locals[:href] || t(:url)
// layout = locals[:layout] || 'icon_link'
// buttonSize = locals[:size] || 'small'
// hashtag = locals[:hashtag] || I18n.exists?(:'facebook.hashtag') ? t(:'facebook.hashtag') : nil
// quote = locals[:quote] || I18n.exists?(:'facebook.quote') ? t(:'facebook.quote') : nil
// %>

// <% if !locals[:type] || locals[:type] == 'button' %>

//   <div
//     class="fb-share-button"
//     data-href="<%= href %>"
//     data-layout="<%= layout %>"
//     data-size="<%= buttonSize %>"
//     data-mobile_iframe="<%= mobile_iframe %>"
//   >
//   </div>

// <%# Javascript %>
// <% elsif locals[:type] == 'javascript' %>

//   <% link_to('javascript:;', { class: 'facebookShareButton', data: { url: href, hashtag: hashtag, quote: quote } }) do %>

//     <%= partial 'partials/atom/icon.erb', locals: {
//       icon: locals[:icon] || 'fa-facebook-official fa-fw fa-3x'
//     } %>

//   <% end %>

// <%# Link %>
// <% elsif locals[:type] == 'link' %>

//   <% link_to('https://www.facebook.com/dialog/share?mobile_iframe=true&app_id=253027968192447&display=popup&href=https://codeblender.net&redirect_uri=https://codeblender.net') do %>

//     <%= partial 'partials/atom/icon.erb', locals: {
//       icon: locals[:icon] || 'fa-facebook-official fa-fw fa-3x'
//     } %>

//   <% end %>

// <% end %>
