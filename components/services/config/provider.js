/**
 * Services - Config - Provider
 */

// React
import React, { useState } from 'react'
import { node, object } from 'prop-types'

// UI
import ConfigContext from './context'

const ConfigProvider = ({ children, config: initial }) => {
  const [config, setConfig] = useState(initial)

  return <ConfigContext.Provider value={{config, setConfig}}>{children}</ConfigContext.Provider>
}


ConfigProvider.propTypes = {
  children: node.isRequired,
  config: object.isRequired
}

export default ConfigProvider