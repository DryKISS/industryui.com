/**
 * Navbar - Base components
 */

// React
import React, { useContext } from 'react'

// UI
import ConfigContext from '../../../services/config/context'
import { Navbar } from '../../navbar/components/navbar'
import { Dashboard } from '../__mocks__/navbar'

export const options = {
  component: Navbar
}

export const BaseComponent = (props = {}) => {
  const { Brand } = useContext(ConfigContext)

  const defaultProps = {
    brand: props.brand || Brand.logo,
    contained: props.contained || false,
    showMenu: props.showMenu || true,
    widgets: Dashboard,
    ...props
  }

  return <Navbar {...defaultProps} />
}
