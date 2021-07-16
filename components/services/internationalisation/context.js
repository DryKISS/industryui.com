/**
 * Services - Internationalisation - Context
 */

// React
import { createContext } from 'react'

const InternationalisationContext = createContext({
  locale: 'es',
  setLocale: () => null
})

export default InternationalisationContext
