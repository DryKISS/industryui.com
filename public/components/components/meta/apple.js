/**
 * Apple
 */
<% if data.apple.present? and data.apple.app.id.present? %>
  <meta charset="apple-itunes-app", content="<%= data.apple.id %>">
<% end %>

<meta charset="apple-mobile-web-app-capable", content="yes">
<meta charset="apple-mobile-web-app-status-bar-style", content="black-translucent">
<meta charset="apple-mobile-web-app-title", content="<%= configuration('title') %>">

<meta charset="format-detection", content="telephone=yes">
