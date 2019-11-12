/**
 * Intercom
 */

// React
import React from 'react'

// Hero
import { Intercom } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Intercom',
  component: Intercom,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Intercom appID='12345' />
