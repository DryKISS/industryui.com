/**
 * Components - Organisms - Bar - Story
 */

// React
import React from 'react'

// Storybook
import ControlTypes from '../../../../.storybook/decorators/controls/controlTypes'

// UI
import Bar from '../bar'
import Divider from '../../../atoms/divider/divider'
import List from '../../../atoms/list/list'
import ListItem from '../../../atoms/list/listItem'
import BarConfig from '../components/config'
import Readme from '../README.md'

// Data
import DATA from '../__mocks__/bar'

export default {
  args: {
    backdrop: false,
    minSize: '5rem',
    open: true,
    placement: BarConfig.PLACEMENT.LEFT,
    toggle: true,
    variant: BarConfig.VARIANT.OVERLAY,
    width: 15
  },
  argTypes: {
    minSize: {
      control: {
        type: ControlTypes.Select,
        options: ['5rem', '10rem', '12rem']
      }
    },
    width: {
      control: { type: ControlTypes.Range, min: 10, max: 30, step: 1 }
    }
  },
  component: Bar,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Bar'
}

export const Main = (args) => {
  return (
    <Bar {...args}>
      <List group>
        {DATA.map(({ Component, divider, icon, name, to }, index) => {
          return (
            <ListItem icon={icon} key={index}>
              {divider ? <Divider size="xs" /> : Component ? <Component /> : to ? name : name}
            </ListItem>
          )
        })}
      </List>
    </Bar>
  )
}
