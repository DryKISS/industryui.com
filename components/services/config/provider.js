/**
 * Services - Config - Provider
 */

// React
import React from 'react'
import { node, object } from 'prop-types'

// UI
import ConfigContext from './context'

const ConfigProvider = ({ children, config }) => {
  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
}


ConfigProvider.propTypes = {
  children: node.isRequired,
  config: object.isRequired
}

export default ConfigProvider