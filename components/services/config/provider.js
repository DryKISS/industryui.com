/**
 * Services - Config - Provider
 */

// React
import React from 'react'

// UI
import ConfigContext from './context'

const ConfigProvider = (props) => {
  return <ConfigContext.Provider value={props.config} {...props} />
}

export default ConfigProvider