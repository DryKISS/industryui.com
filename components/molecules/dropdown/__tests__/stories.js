/**
 * Dropdown
 */

// React
import React, { useContext, useState } from 'react'

// Storybook
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import {
  Avatar,
  Button,
  colourList,
  Dropdown,
  elementTypes,
  Icon,
  InternationalisationContext,
  useTranslation
} from 'components'

import styled, { css } from 'styled-components'

import Readme from '../README.md'
import { Items, Language } from '../__mocks__/dropdown'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  decorators: [withKnobs, Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = props => {
  const { setLocale } = useContext(InternationalisationContext)
  const onChange = data => {
    setLocale({ locale: data.id })
  }
  const defaultProps = {
    caret: boolean('Caret', props.caret || true),
    children: props.children || text('Children', 'Dropdown'),
    items: Items,
    onChange: onChange,
    position: select(
      'Position',
      {
        Top: 'top',
        Bottom: 'bottom'
      },
      props.position || 'bottom'
    ),
    ...props
  }
  return <Dropdown {...defaultProps} />
}

export const main = () => <BaseComponent />

export const language = () => {
  const { t } = useTranslation()

  return (
    <>
      <BaseComponent children='Change language' items={Language} />
      <h1>{t('home')}</h1>
    </>
  )
}

export const rightAligned = () => <BaseComponent position='right' />

export const button = () => (
  <BaseComponent caret={false}>
    <Button>Dropdown</Button>
  </BaseComponent>
)

export const icon = () => (
  <BaseComponent>
    <Icon context='info' icon='user' prefix='fas' />
  </BaseComponent>
)

export const iconButton = () => (
  <BaseComponent caret={false}>
    <Button context='white'>
      <Icon context='info' icon='user' prefix='fas' />
    </Button>
  </BaseComponent>
)

export const avatar = () => (
  <BaseComponent caret={false}>
    <Avatar>KH</Avatar>
  </BaseComponent>
)

export const colourPicker = () => {
  const [SelectedColour, setSelectedColour] = useState('green')

  const changeColor = colour => {
    setSelectedColour(colour.colour)
  }

  return (
    <>
      <ColourBox background={SelectedColour} />
      <BaseComponent
        items={colourList}
        onChange={e => {
          changeColor(e)
        }}
        elementType={elementTypes.Colour}
      >
        please select a colour
      </BaseComponent>
    </>
  )
}
const ColourBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}
`
