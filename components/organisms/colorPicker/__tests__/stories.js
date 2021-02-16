/**
 * Organisms - Color picker
 */

// React
import { useState } from 'react'

// Styled Components
import styled from 'styled-components'

// UI
import { ColorPicker, Text } from '../../../'
import Readme from '../README.md'

export default {
  args: { type: 'github', width: 214 },
  argTypes: {
    type: { control: { type: 'select', options: ['circle', 'sketch', 'github', 'twitter'] } },
    width: { control: { type: 'range', min: 100, max: 400 } }
  },
  title: 'Organisms/Color Picker',
  components: ColorPicker,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
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
    width: props.width + 'px',
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

export const main = args => <BaseComponent {...args} />

const StyledBackgroundColor = styled.div`
  background-color: ${({ assetIconColor }) => assetIconColor};
  height: 20px;
  margin: 20px;
  width: 20px;
`
