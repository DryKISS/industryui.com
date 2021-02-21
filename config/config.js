/**
 * Config
 */

// React
import React from 'react'

// UI
import { Sidebar as SidebarUI } from '../components'

export const apiConfig = {}
export const jwtConfig = {}

export const AccessPages = {}
export const AccessRules = {}

export const Brand = {
  logo: 'drykiss.svg',
  name: 'IndustryUI'
}

export const Canonical = 'https://industryui.com'

export const GetAddressConfig = {
  apiKey: 'AG2YtZS2HEKCTOsZcDCFTg28696'
}

export const RapidApi = {
  apiKey: '1882a05a31mshaf0342eab29f980p18a203jsna9807a52e188'
}

export const Google = {
  analytics: ''
}

export const Icons = {
  proRegular: ['faBars'],
  brands: ['faGithub']
}

// Internationalisation
export const defaultLocale = 'en'
export const locales = ['en', 'es']
export const languageNames = {
  en: 'English',
  es: 'Spanish'
}

export const Translations = {
  en: {
    home: 'Home sweet home',
    contact: 'Contact',
    index: 'This is the index in english',
    contactFormTitle: 'Title contact form',
    contactForm: 'Contact us',
    about: 'About us',
    painting: 'The Painting',
    artist: 'The Artist',
    hello: 'hello'
  },
  es: {
    home: 'Inicio',
    contact: 'Contacto',
    index: 'Este es el index spanish',
    contactFormTitle: 'Formulario de contacto título',
    contactForm: 'Contáctanos',
    about: 'Sobre nosotros',
    painting: 'La pintura',
    artist: 'El artista',
    hello: 'Hola'
  }
}

const sidebarData = [
  {
    icon: ['fas', 'tachometer-alt-average'],
    name: 'Dashboard',
    to: '/dashboard'
  },
  {
    name: 'Issues',
    to: '/dashboard/issues'
  },
  {
    name: 'Calendar',
    to: '/dashboard/calendar'
  },
  {
    divider: true
  },
  {
    name: 'Messages',
    to: '/dashboard/messages'
  }
]

export const Sidebar = () => (
  <SidebarUI brand="/drykiss.svg" data={sidebarData} />
)

export const Config = {
  apiConfig,
  Brand,
  Canonical,
  defaultLocale,
  GetAddressConfig,
  Google,
  Icons,
  jwtConfig,
  languageNames,
  locales,
  RapidApi,
  Sidebar,
  Translations
}
