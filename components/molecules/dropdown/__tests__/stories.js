/**
 * Dropdown
 */

// React
import { useContext, useState } from 'react'

// UI
import {
  Avatar,
  Button,
  Dropdown,
  elementTypes,
  Icon,
  InternationalisationContext,
  Space,
  useTranslation
} from '../../../'

import { THEME_COLOUR_LIST } from '../../../theme/constants/colourList'

import Readme from '../README.md'
import { Icons, Items, Language } from '../__mocks__/dropdown'

// Style
import styled, { css } from 'styled-components'

export default {
  args: { caret: true, children: 'Dropdown', position: 'bottom' },
  argTypes: { control: { type: 'select', options: ['top', 'bottom'] } },
  title: 'Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = props => {
  const { setLocale } = useContext(InternationalisationContext)

  const onChange = data => {
    setLocale({ locale: data.id })
  }

  const defaultProps = {
    children: props.children || 'Dropdown',
    items: Items,
    onChange: onChange,

    ...props
  }

  return <Dropdown {...defaultProps} />
}

export const main = args => <BaseComponent {...args} />

export const language = args => {
  const { t } = useTranslation()

  return (
    <>
      <BaseComponent children='Change language' items={Language} {...args} />
      <h1>{t('home')}</h1>
    </>
  )
}

export const button = args => (
  <BaseComponent {...args} caret={false}>
    <Button>Dropdown</Button>
  </BaseComponent>
)

export const icon = args => (
  <BaseComponent {...args}>
    <Icon context='info' icon='user' prefix='fas' />
  </BaseComponent>
)

export const iconButton = args => (
  <BaseComponent {...args} caret={false}>
    <Button context='white'>
      <Icon context='info' icon='user' prefix='fas' />
    </Button>
  </BaseComponent>
)

export const avatar = args => (
  <BaseComponent {...args} caret={false}>
    <Avatar>KH</Avatar>
  </BaseComponent>
)

export const colourPicker = args => {
  const [selectedColour, setSelectedColour] = useState('green')

  const changeColor = colour => {
    setSelectedColour(colour.colour)
  }

  return (
    <>
      <ColourBox background={selectedColour} />
      <Space />

      <BaseComponent
        {...args}
        items={THEME_COLOUR_LIST}
        onChange={e => {
          changeColor(e)
        }}
        elementType={elementTypes.Colour}
      >
        Select a colour
      </BaseComponent>
    </>
  )
}

export const iconPicker = args => {
  const [selectedIcon, setSelectedIcon] = useState({ icon: 'cloud', prefix: 'fas' })

  const changeIcon = icon => {
    setSelectedIcon(icon)
  }

  return (
    <>
      <Icon icon={selectedIcon?.icon} prefix={selectedIcon?.prefix} />
      <Space />

      <BaseComponent
        {...args}
        items={Icons}
        onChange={e => {
          changeIcon(e)
        }}
        elementType={elementTypes.Icon}
      >
        Select an icon
      </BaseComponent>
    </>
  )
}

const ColourBox = styled.div`
  height: 1rem;
  width: 1rem;
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}
`
