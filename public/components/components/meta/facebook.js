/**
 * Facebook
 */
<% url = t(:url) + current_page.url %>
<% appID = development? ? data.facebook.app.testID : (appID == 'locale') ? t(:'facebook.app.id') : data.facebook.app.id %>

<meta content="<%= configuration('title') %>" property="og:title">
<meta content="<%= configuration('description') %>" name="description" property="og:description">
<meta content="<%= t(:url) + configuration('image') %>" property="og:image">
<meta content="<%= configuration('siteName') %>" property="og:site_name">
<meta content="<%= configuration('type') %>" property="og:type">
<meta content="<%= url %>" property="og:url">
<meta content="<%= t(:'facebook.locale') %>" property="og:locale">
<meta content="<%= appID %>", property="fb:app_id">

{/* // <!-- Facebook Open Graph data --></meta>
// <meta property="og:type" content="website">
// <meta property="og:url" content="https://.app/">
// <meta property="og:title" content="Get a puppy from a trusted, safe breeder">
// <meta property="og:image:url" content="http://www..com/img/social.jpg">
// <meta property="og:image:secure_url" content="https://www..com/img/social.jpg">
// <meta property="og:description" content="---">
// <meta property="og:site_name" content="--">
// <meta property="og:locale" content="en_GB">
// <meta property="og:image:width" content="1200">
// <meta property="og:image:height" content="630"> */}
