# Twitter Service

Allows for the usage of the Twitter plugins and widgets

## Links

- [Twitter Developer](https://developer.twitter.com/)
- [Plugins](https://developer.twitter.com/en/docs/twitter-for-websites/overview)

https://github.com/andrewsuzuki/react-twitter-widgets#readme

Follow Button
Hashtag
Mention
Share
[Timelines](https://developer.twitter.com/en/docs/twitter-for-websites/timelines/overview)
[Tweet Button](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview)
Tweets

<%#
Timeline
%>
<% link_to "https://twitter.com/#{string(locals[:href])}", {
  class: 'twitter-timeline',
  data: {
    height: locals[:height],
    'tweet-limit': locals[:limit]
  }
} do %>
  Tweets
<% end %>

angular.module('app.directive').directive('twitterShareButton', [
  '$log', function ($log) {
    'use strict'
    return {
      restrict: 'C',
      scope: true,
      replace: true,
      link: function (scope, element, attrs, ctrl) {
        $log.info('twitterShareButton - Attrs :', attrs.url)
        element.on('click', function (e) {
          $log.info('twitterShareButton - event :', e)
          twttr.widgets.createShareButton(attrs.url, document.getElementById('share'))
          return twttr.widgets.createShareButton('/', document.getElementById('share'), {
            count: 'none',
            text: 'Sharing a URL using the Tweet Button'
          }).then(function (error) {
            console.error('Button created.', error)
          })
        })
      }
    }
  }
])

<%= link_to('Follow @SocialTriangle', 'https://twitter.com/SocialTriangle', {
  class: 'twitter-follow-button',
  data: {
    lang: 'en',
    'show-count': 'true',
    'show-screen-name': true,
    size: 'large'
  }
} ) %>
