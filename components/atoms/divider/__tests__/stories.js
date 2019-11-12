/**
 * Divider
 */

// React
import React from 'react'

// UI
import { Divider } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Divider />
export const medium = () => <Divider size='md' />
export const large = () => <Divider size='lg' />
