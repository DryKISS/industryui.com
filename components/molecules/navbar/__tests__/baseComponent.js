/**
 * Navbar - Base components
 */

// React
import React, { useContext } from 'react'

// Storybook
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { ConfigContext, Navbar } from 'components'
import { Dashboard } from '../__mocks__'

export const options = {
  component: Navbar,
  decorators: [withKnobs, Wrapper]
}

export const BaseComponent = (props = {}) => {
  const { Brand } = useContext(ConfigContext)

  const defaultProps = {
    animational: boolean('Animational', props.animational || false),
    brand: text('Brand', props.brand || Brand.logo),
    contained: boolean('Contained', props.contained || false),
    custom: boolean('Custom', props.custom || false),
    showMenu: boolean('Show Menu', props.showMenu || true),
    widgets: Dashboard,
    ...props
  }

  return <Navbar {...defaultProps} />
}
