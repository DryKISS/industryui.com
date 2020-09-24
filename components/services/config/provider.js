/**
 * Services - Config - Provider
 */

// React
import React from 'react'

// Context
import { ConfigContext } from './'

// Default Config
// import { Config } from 'config'

export const ConfigProvider = props => {
  return <ConfigContext.Provider value={props.config} {...props} />
}
