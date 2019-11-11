/**
 * Input
 */

// React
import React from 'react'

// UI
import { Input } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Form/Input',
  component: Input,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Input change={() => {}} label='Email' placeholder='Enter your email' />
