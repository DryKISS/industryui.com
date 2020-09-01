/**
 * Big Calendar
 */

// React
import React, { useState } from 'react'

// Styled Components
import styled from 'styled-components'

// Storybook
import { Wrapper } from 'decorators'
import { select, text } from '@storybook/addon-knobs'

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
const BaseComponent = ({ onChangeComplete, ...props }) => {
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
    width: text('width', '254px'),

    ...props
  }

  return <ColorPicker onChangeComplete={onChangeComplete} {...defaultProps} />
}

export const main = () => {
  const [assetIconColor, setAssetIconColor] = useState('green')
  const changeColor = color => {
    console.info('color', color)
    setAssetIconColor(color.hex)
  }

  return (
    <div>
      <p>Color Selected </p>
      <StyledBackgroundColor assetIconColor={assetIconColor} />
      <BaseComponent onChangeComplete={changeColor} color={assetIconColor} />
    </div>
  )
}

const StyledBackgroundColor = styled.div`
  margin: 20px;
  height: 20px;
  width: 20px;
  background-color: ${({ assetIconColor }) => assetIconColor};
`
