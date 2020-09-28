/**
 * Organisms - Color picker
 */

// React
import { useState } from 'react'

// Styled Components
import styled from 'styled-components'

// Storybook
import { select, text } from '@storybook/addon-knobs'

// UI
import { ColorPicker, Text } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Color Picker',
  components: ColorPicker,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = ({ onChangeComplete, ...props }) => {
  const [assetIconColor, setAssetIconColor] = useState('green')

  const changeColor = color => {
    setAssetIconColor(color.hex)
  }

  const defaultProps = {
    color: assetIconColor,
    onChangeComplete: changeColor,
    type: select(
      'Type',
      {
        Circle: 'circle',
        Sketch: 'sketch',
        Github: 'github',
        Twitter: 'twitter'
      },
      'github'
    ),
    width: text('width', '214px'),
    ...props
  }

  return (
    <>
      <Text>Color Selected</Text>
      <StyledBackgroundColor assetIconColor={assetIconColor} />
      <ColorPicker {...defaultProps} />
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
