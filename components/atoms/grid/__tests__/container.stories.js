/**
 * Atoms - Grid - Container - Story
 */

// React
import React from 'react'

// UI
import { Container } from '../components/Container'
import Readme from '../README.md'

const debug = {
  border: '1px solid black',
}

export default {
  component: Container,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Atoms/Grid/Container',
}

export const container = (args) => (
  <Container {...args} style={debug}>
    Container
  </Container>
)
