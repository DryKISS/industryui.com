/**
 * Config
 */

export const apiConfig = {}
export const jwtConfig = {}
export const AccessPages = {}
export const AccessRules = {}

const Canonical = require('./canonical')
export { Canonical }

export const Blog = {
  path: '/blog'
}

export const Brand = {
  logo: '/images/logos/maitai.png',
  name: 'MaiTai'
}

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

export const Sidebar = {}

// Internationalisation
export const defaultLocale = 'en'
export const locales = ['en']

export const languageNames = {
  en: 'English',
  es: 'Spanish'
}

export const Translations = {}

export const Config = {
  Blog,
  Brand,
  Canonical,
  defaultLocale,
  Facebook,
  Google,
  languageNames,
  locales,
  Translations
}
