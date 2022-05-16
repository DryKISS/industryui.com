/**
 * Components - Molecules - Tile - Story
 */

// React
import React from 'react'

// Storybook
import ContextControl from '../../../../.storybook/decorators/controls/context'
import SizeControl from '../../../../.storybook/decorators/controls/size'

// UI
import Column from '../../../atoms/grid/Column'
import Container from '../../../atoms/grid/Container'
import Row from '../../../atoms/grid/Row'
import Readme from '../README.md'
import Tile from '../tile'

export default {
  args: {
    body: '25',
    colourConfig: {
      10: 'success',
      20: 'warning',
      25: 'danger'
    },
    description: 'This is a description',
    loading: false,
    rounded: true,
    size: 'sm',
    title: 'Reactive Job',
    to: '/'
  },
  argTypes: {
    context: ContextControl(),
    size: SizeControl()
  },
  component: Tile,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Tile'
}

export const Main = (args) => {
  return (
    <Container>
      <Row justify="start">
        <Column md={4}>
          <Tile {...args} />
        </Column>
        <Column md={4}>
          <Tile {...args} />
        </Column>
        <Column md={4}>
          <Tile {...args} />
        </Column>
        <Column md={4}>
          <Tile {...args} />
        </Column>
        <Column md={4}>
          <Tile {...args} />
        </Column>
        <Column md={4}>
          <Tile {...args} />
        </Column>
        <Column md={4}>
          <Tile {...args} />
        </Column>
      </Row>
    </Container>
  )
}

export const Size = (args) => {
  return (
    <Container>
      <Row justify="start">
        <Column md={4}>
          <Tile {...args} context="primary" size="xxs" />
        </Column>
        <Column md={4}>
          <Tile {...args} context="secondary" size="xs" />
        </Column>
        <Column md={4}>
          <Tile {...args} context="success" size="sm" />
        </Column>
        <Column md={4}>
          <Tile {...args} context="info" size="md" />
        </Column>
        <Column md={4}>
          <Tile {...args} context="warning" size="lg" />
        </Column>
        <Column md={4}>
          <Tile {...args} context="danger" size="xl" />
        </Column>
        <Column md={4}>
          <Tile {...args} context="help" size="xxl" />
        </Column>
        <Column md={4}>
          <Tile {...args} context="dark" size="xxxl" />
        </Column>
      </Row>
    </Container>
  )
}
