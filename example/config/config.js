/**
 * Config
 */

export const Blog = {
  path: '/blog'
}

export const Brand = {
  logo: '/images/logos/maitai.png',
  name: 'MaiTai'
}

const Canonical = require('./canonical')
export { Canonical }

export const Facebook = {
  appId: '',
  appPath: '',
  domain: Canonical,
  hashTag: 'MaiTai'
}

export const Google = {
  analytics: '',
  adsense: '',
  apiKey: '',
  verification: ''
}

export const Config = {
  Blog,
  Brand,
  Canonical,
  Facebook,
  Google
}
