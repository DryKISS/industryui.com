/**
 * Config
 */
const Canonical = require('./canonical')
export { Canonical }

export const Blog = {
  path: '/blog'
}

export const Brand = {
  logo: '/images/logo/drykiss-white.svg',
  name: 'DryKISS Ltd'
}

export const Facebook = {
  appId: 285418984933747,
  appPath: 'https//www.facebook.com/drykissltd',
  domain: Canonical,
  hashTag: 'DryKISS'
}

export const Google = {
  analytics: 'UA-49976138-1',
  adsense: 'ca-pub-4390370568784157',
  apiKey: '',
  verification: 'KV07s1r94b_CG89V9Tuh7a5FYEv4kG8-WbLMGLCOIjw'
}

export const HubSpot = {
  id: 6190637,
  contactFormId: '3a36aae9-8343-45f6-9268-15acd39190fe'
}

export const Mailchimp = {
  username: 'drykiss',
  dc: 'us7',
  u: '4862895059f8ff67d43123d97',
  id: '9ea724a203'
}

export const Pinterest = {
  verify: '18cdcea1be80cd72ded2e50bb5d21050'
}

export const Config = {
  Blog,
  Brand,
  Canonical,
  Facebook,
  Google,
  HubSpot,
  Mailchimp,
  Pinterest
}
