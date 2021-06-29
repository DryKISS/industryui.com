/**
 * Navbar - Base components
 */

// React
import React, { useContext } from 'react'

// UI
import ConfigContext from '../../../services/config/context'
import DASHBOARD from '../__mocks__/dashboard'

const BaseComponent = (props = {}) => {
  const { Brand } = useContext(ConfigContext)

  const defaultProps = {
    brand: props.brand || Brand.logo,
    contained: props.contained || false,
    showMenu: props.showMenu || false,
    widgets: DASHBOARD,
    ...props
  }

  return <Navbar {...defaultProps} />
}

export default BaseComponent
