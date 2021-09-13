/**
 * Form - Label
 */

// React
import React from 'react'

// UI
import Label from '../label'
import Readme from '../README.md'

export default {
  component: Label,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Form/Label'
}

// const BaseComponent = (props = {}) => {
//   const defaultProps = {
//     children: '',
//     id: '',
//     label: 'Label',
//     ...props
//   }

//   return <Label {...defaultProps} />
// }

export const main = (args) => <Label {...args} />
