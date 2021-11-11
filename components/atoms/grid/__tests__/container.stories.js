/**
 * Components - Atoms - Grid - Container - Story
 */

// React
import React from 'react'

// UI
import Container from '../Container'
import Readme from '../README.md'

export default {
  component: Container,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Grid/Container'
}

export const Main = (args) => (
  <Container
    {...args}
    style={{
      border: '1px solid black'
    }}
  >
    Container
  </Container>
)
