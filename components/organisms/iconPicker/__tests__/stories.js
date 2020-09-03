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
import { IconPicker, Icon, Text } from 'components'
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
    { id: 1, icon1: <Icon context='info' icon='user' prefix='fas' /> },
    { id: 2, icon2: <Icon context='info' icon='user' prefix='fas' /> },
    { id: 3, icon3: <Icon context='info' icon='user' prefix='fas' /> }
  ]
  const defaultProps = {
    iconOptions: iconList,
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
