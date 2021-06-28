/**
 * Components - Atoms - Address - Story
 */

// React
import React from 'react'
import styled from 'styled-components'

// UI
import Readme from '../README.md'

import Modal from '../modal'
import useToggle from '../useToggle'
export default {
  args: { showCloseIcon: true, closeOnBackgroundClick: true, removeChildrenWhenUnmounted: false },
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

  function toggle() {
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
export const main = (args) => <BasicComponent {...args} />
const ModalContent = styled.div`
  width: 400px;
  height: 300px;
  background-color: red;
`
