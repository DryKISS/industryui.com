/**
 * Components - Atoms - Button - Toolbar
 */

// React
import React from 'react'

// Storybook
import { AlignControl, SizeControl } from '../../../../../.storybook/decorators'

// UI
import { Button, ButtonToolbar, Icon } from '../../../../'
import { Dropdown } from '../../../../molecules/dropdown/components/dropdown'
import { THEME_ALIGN } from '../../../../theme/constants/align'
import { THEME_SIZE } from '../../../../theme/constants/size'
import Readme from '../README.md'

export default {
  args: {
    align: THEME_ALIGN.Start,
    size: THEME_SIZE.MD
  },
  argTypes: {
    align: AlignControl(),
    size: SizeControl()
  },
  component: ButtonToolbar,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Button/Toolbar'
}

const dropdownItems = [
  {
    id: 'settings',
    name: 'Settings',
    to: '/?path=/story/molecules-dropdown--main'
  },
  {
    id: 'profile',
    name: 'Profile',
    to: '/?path=/story/molecules-dropdown--main'
  },
  {
    id: 'logout-divider',
    divider: true
  },
  {
    id: 'logout',
    name: 'Logout',
    to: '/?path=/story/molecules-dropdown--main'
  }
]

const Children = ({ size }) => {
  return (
    <>
      <Dropdown caret={false} items={dropdownItems} position="bottom">
        <Button
          context="primary"
          startIconProps={{ colour: 'white', iui: true, size: 16 }}
          size={size}
          startIcon="verticalThreeDots"
        />
      </Dropdown>

      <Button
        as="a"
        data-tip="Button"
        context="primary"
        key={1}
        itemCount={5}
        onClick={() => {}}
        size={size}
      >
        <Icon icon="user" prefix="fas" style={{ pointerEvents: 'none' }} />
      </Button>

      <Button as="a" data-tip="Button" context="primary" key={1} onClick={() => {}} size={size}>
        <Icon icon="user" prefix="fas" style={{ pointerEvents: 'none' }} />
      </Button>

      <Dropdown caret={false} items={dropdownItems} position="bottom">
        <Button
          context="primary"
          startIconProps={{ colour: 'white', iui: true, size: 16 }}
          size={size}
          startIcon="verticalThreeDots"
        />
      </Dropdown>

      <Button as="a" data-tip="Button" context="warning" key={2} onClick={() => {}} size={size}>
        <Icon icon="trash" prefix="fas" style={{ pointerEvents: 'none' }} />
      </Button>

      <Dropdown caret={false} items={dropdownItems} position="bottom">
        <Button
          context="primary"
          startIconProps={{ colour: 'white', iui: true, size: 16 }}
          size={size}
          startIcon="verticalThreeDots"
        />
      </Dropdown>
    </>
  )
}

export const main = (args) => {
  return (
    <ButtonToolbar {...args}>
      <Children size={args.size} />
    </ButtonToolbar>
  )
}
