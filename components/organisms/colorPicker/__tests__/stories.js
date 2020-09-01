/**
 * Big Calendar
 */

// React
import React, { useState } from 'react'

// Styled Components
import styled from 'styled-components'

// Storybook
import { Wrapper } from 'decorators'
import { select } from '@storybook/addon-knobs'

// UI
import { ColorPicker } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Color Picker',
  components: ColorPicker,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const type = 'Circle'
export const main = () => {
  const defaultProps = {
    type: select(
      'Type',
      {
        Circle: 'circle',
        Sketch: 'sketch',
        Github: 'github',
        Twitter: 'twitter'
      },
      'sketch'
    ),
    color: select(
      'Color',
      {
        Red: 'red',
        Blue: 'blue',
        Green: 'green',
        Orange: 'orange'
      },
      'red'
    )
  }
  const [assetIconColor, setAssetIconColor] = useState(defaultProps.color)

  const changeColor = color => {
    console.log('color', color)
    setAssetIconColor(color)
  }

  return (
    <div>
      <p>Color Selected </p>
      <StyledBackgroundColor assetIconColor={assetIconColor} />

      <ColorPicker
        type={type}
        onChangeComplete={newColor => changeColor(newColor.hex)}
        {...defaultProps}
      />
    </div>
  )
}

const StyledBackgroundColor = styled.div`
  margin: 20px;
  height: 20px;
  width: 20px;
  background-color: ${({ assetIconColor }) => assetIconColor};
`
