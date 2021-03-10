/**
 * Services - Config - Provider
 */

// React
import React from 'react'

// Context
import { ConfigContext } from '../config/context'

export const ConfigProvider = (props) => {
  return <ConfigContext.Provider value={props.config} {...props} />
}
