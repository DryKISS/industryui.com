/**
 * Organisms - Icon picker
 */

// React
import React, { useState } from 'react'

// Styled Components
// import styled from 'styled-components'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { IconPicker, Text } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Icon Picker',
  components: IconPicker,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = ({ onChangeComplete, ...props }) => {
  const [iconSelected, setIconSelected] = useState()

  const selectIcon = icon => {
    setIconSelected(icon)
    console.log('icon selected ', iconSelected)
  }

  const defaultProps = {
    iconOptions: [],
    selectIcon: selectIcon
  }

  return (
    <>
      <Text>Icon Selected</Text>
      <IconPicker {...defaultProps} />
    </>
  )
}

export const main = () => <BaseComponent />

/* TODO: add when we are selecting the iconn
const StyledIcon = styled(Icon)`
  /*color: ${({ styles }) => (styles?.color ? styles?.color : 'red')};
  position: absolute;
  background-color: white;
` */
