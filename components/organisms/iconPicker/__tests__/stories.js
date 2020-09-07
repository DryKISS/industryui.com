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
import { IconPicker, Text, elementTypes } from 'components'
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

  const handleSelectIcon = icon => {
    setIconSelected(icon)
    console.log('icon selected ', iconSelected)
  }
  const iconList = [
    { id: 1, icon: { prefix: 'fas', iconModel: 'user' } },
    { id: 2, icon: { prefix: 'fas', iconModel: 'user' } },
    { id: 3, icon: { prefix: 'fas', iconModel: 'user' } },
    { id: 4, icon: { prefix: 'fas', iconModel: 'user' } }
  ]
  const defaultProps = {
    iconOptions: iconList,
    elementType: elementTypes.Icon,
    selectIcon: handleSelectIcon,
    children: <Text>Icon picker</Text>
  }

  return (
    <>
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
