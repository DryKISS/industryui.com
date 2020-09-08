/**
 * Organisms - Icon picker
 */

// React
import React, { useState } from 'react'

// Styled Components
import styled from 'styled-components'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { IconPicker, Icon, elementTypes } from 'components'
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
    console.log('icon selected ', icon)

    setIconSelected(icon)
  }
  const iconList = [
    { id: 1, icon: 'user', prefix: 'fas' },
    { id: 2, icon: 'user', prefix: 'fas' },
    { id: 3, icon: 'user', prefix: 'fas' },
    { id: 4, icon: 'user', prefix: 'fas' }
  ]
  const defaultProps = {
    iconOptions: iconList,
    elementType: elementTypes.Icon,
    handleSelectIcon: handleSelectIcon
  }

  return (
    <Container>
      {iconSelected && <Icon icon={iconSelected?.icon} prefix={iconSelected?.prefix} />}
      <IconPicker {...defaultProps} />
      <div>Select Icon</div>
    </Container>
  )
}

export const main = () => <BaseComponent />

/* const StyledIcon = styled(Icon)`
  background-color: transparent;
` */
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 15rem;
`
