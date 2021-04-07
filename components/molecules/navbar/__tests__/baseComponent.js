/**
 * Navbar - Base components
 */

// React
import React, { useContext } from 'react'

// UI
import ConfigContext from '../../../services/config/context'
import Navbar from '../../navbar/navbar'
import Dashboard from '../__mocks__/dashboard'

export const options = {
  component: Navbar
}

export const BaseComponent = (props = {}) => {
  const { Brand } = useContext(ConfigContext)

  const defaultProps = {
    brand: props.brand || Brand.logo,
    contained: props.contained || false,
    showMenu: props.showMenu || false,
    widgets: Dashboard,
    ...props
  }

  return <Navbar {...defaultProps} />
}
