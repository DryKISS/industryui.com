/**
 * Components - Atoms - Grid - Container - Story
 */

// React
import React from 'react'

// UI
import Component from '../Container'
import Readme from '../README.md'

export default {
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Grid'
}

export const Container = (args) => (
  <Container
    {...args}
    style={{
      border: '1px solid black'
    }}
  >
    Container
  </Container>
)
