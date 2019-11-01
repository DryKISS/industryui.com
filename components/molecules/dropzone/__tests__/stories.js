/**
 * Dropzone
 */

// React
import React from 'react'

// UI
import { Dropzone } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Dropzone',
  component: Dropzone,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <div style={{ margin: '1rem' }}>
    <Dropzone />
  </div>
)

export const allFiles = () => (
  <div style={{ margin: '1rem' }}>
    <Dropzone accept='' />
  </div>
)

export const disabled = () => (
  <div style={{ margin: '1rem' }}>
    <Dropzone disabled />
  </div>
)
