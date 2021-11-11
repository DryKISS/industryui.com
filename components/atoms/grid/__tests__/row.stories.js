/**
 * Components - Atoms - Grid - Row - Story
 */

// React
import React from 'react'

// UI
import { Row as Component } from '../Row'
import Readme from '../README.md'
import { StyledColumn } from '../__mocks__/grid'

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

export const Row = (args) => (
  <>
    <Row {...args}>
      <StyledColumn md={6}>Flexible Row md={6}</StyledColumn>
    </Row>
    <Row {...args} justify="end">
      <StyledColumn md={3}>End md={3}</StyledColumn>
      <StyledColumn md={3}>End md={3}</StyledColumn>
    </Row>
    <Row {...args} justify="start">
      <StyledColumn md={3}>Start md={3}</StyledColumn>
      <StyledColumn md={3}>Start md={3}</StyledColumn>
    </Row>
  </>
)

export const RowAlign = (args) => {
  const style = { backgroundColor: 'rgba(255,0,0,.1)', minHeight: '10rem' }

  return (
    <Row {...args} style={style}>
      <StyledColumn md={3}>md={3} Align Start</StyledColumn>
      <StyledColumn md={3}>md={3} Align Start</StyledColumn>
    </Row>
  )
}

export const RowWrap = (args) => (
  <Row {...args}>
    <StyledColumn md={5}>md={5} NoWrap</StyledColumn>
    <StyledColumn md={5}>md={5} NoWrap</StyledColumn>
    <StyledColumn md={5}>md={5} NoWrap</StyledColumn>
  </Row>
)
