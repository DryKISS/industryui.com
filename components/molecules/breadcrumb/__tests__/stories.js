/**
 * Breadcrumb
 */

// React
import React from 'react'

// UI
import { Breadcrumb } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Breadcrumb category='Ian Warner' page='Home' path='/' />
