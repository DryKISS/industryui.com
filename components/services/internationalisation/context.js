/**
 * Services - Internationalisation - Context
 */

// React
import { createContext } from 'react'

export const InternationalisationContext = createContext({
  locale: 'es',
  setLocale: () => null,
})
