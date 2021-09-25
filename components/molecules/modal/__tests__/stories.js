/**
 * Components - Molecules - Modal - Story
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

// UI
import Modal from '../modal'
import Readme from '../README.md'
import useToggle from '../useToggle'

export default {
  args: {
    showCloseIcon: true,
    closeOnBackgroundClick: true,
    removeChildrenWhenUnmounted: false
  },
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Modal'
}

const BasicComponent = (props) => {
  const [isOpen, setIsOpen] = useToggle(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button type="button" onClick={toggle}>
        open modal
      </button>

      <Modal open={isOpen} onClose={toggle} {...props}>
        {<ModalContent />}
      </Modal>
    </>
  )
}

const ModalContent = styled.div`
  background-color: red;
  height: 300px;
  width: 400px;
`

export const main = (args) => <BasicComponent {...args} />
