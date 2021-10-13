/**
 * Services - Config - useConfig
 */

// React
import { useContext } from 'react'

// UI
import ConfigContext from './context'

const useConfig = () => {
  const config = useContext(ConfigContext)

  if (!config) {
    throw new Error('useConfig must be used within the ConfigProvider')
  }

  return config
}

export default useConfig