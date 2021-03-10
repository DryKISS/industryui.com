/**
 * Components - Organisms - Bar
 */

// React
import React from 'react'

// Storybook
import { ControlTypes } from '../../../../.storybook/decorators'

// UI
import { Bar, Divider, List, ListItem } from '../../../'
import { BarConfig } from '../components/config'
import Readme from '../README.md'

// Data
import { barMock } from '../__mocks__/barMock'

// Style
import styled from 'styled-components'

export default {
  args: {
    minSize: '5rem',
    open: true,
    placement: BarConfig.PLACEMENT.LEFT,
    variant: BarConfig.VARIANT.OVERLAY,
    backdrop: false,
    width: 15,
    toggle: true,
  },
  component: Bar,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Organisms/Bar',
}

const BaseComponent = (args) => {
  const defaultProps = {
    ...args,
  }

  return (
    <StyledWrapper>
      <Bar {...defaultProps}>
        <List group>
          {barMock.map(({ Component, divider, icon, name, to }, index) => {
            return (
              <ListItem key={index}>
                {divider ? <Divider size="sm" /> : Component ? <Component /> : to ? name : name}
              </ListItem>
            )
          })}
        </List>
      </Bar>
    </StyledWrapper>
  )
}

export const main = (args) => {
  return <BaseComponent {...args} />
}

const StyledWrapper = styled.div`
  height: 40rem;
`

main.argTypes = {
  minSize: {
    control: {
      type: ControlTypes.Select,
      options: ['5rem', '10rem', '12rem'],
    },
  },
  width: {
    control: { type: ControlTypes.Range, min: 10, max: 30, step: 1 },
  },
}
