/**
 * Organisms - Color picker
 */

// React
import React, { useState } from 'react'

// Styled Components
import styled from 'styled-components'

// Storybook
import { Wrapper } from 'decorators'
import { text } from '@storybook/addon-knobs'

// UI
import { ColorDropdown, Text } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Color Dropdown',
  components: ColorDropdown,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = ({ onChangeComplete, ...props }) => {
  const [assetIconColor, setAssetIconColor] = useState('green')

  const changeColor = colour => {
    setAssetIconColor(colour.colour)
  }

  const defaultProps = {
    color: assetIconColor,
    onColorSelect: changeColor,
    width: text('width', '200px'),
    ...props
  }

  return (
    <>
      <Text>Color Selected</Text>
      <StyledBackgroundColor assetIconColor={assetIconColor} />
      <ColorDropdown {...defaultProps}>please select a colour</ColorDropdown>
    </>
  )
}

export const main = () => <BaseComponent />

const StyledBackgroundColor = styled.div`
  background-color: ${({ assetIconColor }) => assetIconColor};
  height: 20px;
  margin: 20px;
  width: 20px;
`
