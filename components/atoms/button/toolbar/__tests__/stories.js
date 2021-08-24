/**
 * Components - Atoms - Button - Toolbar
 */

// React
import React from 'react'

// Storybook
import AlignControl from '../../../../../.storybook/decorators/align'
import SizeControl from '../../../../../.storybook/decorators/size'

// UI
import Button from '../../button/button'
import ButtonToolbar from '../toolbar'
import Dropdown from '../../../../molecules/dropdown/dropdown'
import Icon from '../../../icon/icon/icon'
import THEME_ALIGN from '../../../../constants/align'
import THEME_SIZE from '../../../../constants/size'
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
          size={size}
          startIcon="verticalThreeDots"
          startIconProps={{ colour: 'white', iui: true, size: 'lg' }}
        />
      </Dropdown>

      <Button
        as="a"
        data-tip="Button"
        context="primary"
        itemCount={5}
        onClick={() => {}}
        size={size}
      >
        <Icon icon="user" style={{ pointerEvents: 'none' }} />
      </Button>

      <Button as="a" data-tip="Button" context="primary" onClick={() => {}} size={size}>
        <Icon icon="user" style={{ pointerEvents: 'none' }} />
      </Button>

      <Dropdown caret={false} items={dropdownItems} position="bottom">
        <Button
          context="primary"
          size={size}
          startIcon="verticalThreeDots"
          startIconProps={{ colour: 'white', iui: true, size: 'lg' }}
        />
      </Dropdown>

      <Button as="a" data-tip="Button" context="warning" onClick={() => {}} size={size}>
        <Icon icon="trash" style={{ pointerEvents: 'none' }} />
      </Button>

      <Dropdown caret={false} items={dropdownItems} position="bottom">
        <Button
          context="primary"
          size={size}
          startIcon="verticalThreeDots"
          startIconProps={{ colour: 'white', iui: true, size: 'lg' }}
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
