/**
 * Services - Internationalisation - Context
 */
import { createContext } from 'react'

export const InternationalisationContext = createContext({
  locale: 'es',
  setLocale: () => null
})
