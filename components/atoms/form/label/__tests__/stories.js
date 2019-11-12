/**
 * Label
 */

// React
import React from 'react'

// UI
import { Label } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Form/Label',
  component: Label,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Label children='' text='Select your gender' />
