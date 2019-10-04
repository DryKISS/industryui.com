/**
 * Grid
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Container, Row } from '../'
import Readme from '../README.md'

import { StyledColumn } from '../__mocks__/grid'

const debug = {
  border: '1px solid black'
}

storiesOf('Atoms/Grid', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Container', () =>
    <Container style={debug}>Container</Container>
  )

  .add('Container Fluid', () =>
    <Container fluid style={debug}>Container</Container>
  )

  .add('Row', () =>
    <Row style={debug}>Row</Row>
  )

  .add('Row Justified', () =>
    <>
      <Row justify='end'>
        <StyledColumn md={3}>md={3}</StyledColumn>
        <StyledColumn md={3}>md={3}</StyledColumn>
      </Row>
      <Row justify='start'>
        <StyledColumn md={3}>md={3}</StyledColumn>
        <StyledColumn md={3}>md={3}</StyledColumn>
      </Row>
    </>
  )

  .add('Row Align', () => {
    const style = { backgroundColor: 'rgba(255,0,0,.1)', minHeight: '10rem' }

    return (
      <>
        <Row align='start' style={style}>
          <StyledColumn md={3}>md={3} Align Start</StyledColumn>
          <StyledColumn md={3}>md={3} Align Start</StyledColumn>
        </Row>
        <br />
        <Row align='end' style={style}>
          <StyledColumn md={3}>md={3} Align End</StyledColumn>
          <StyledColumn md={3}>md={3} Align End</StyledColumn>
        </Row>
      </>
    )
  })

  .add('Row Wrap', () =>
    <>
      <Row noWrap>
        <StyledColumn md={5}>md={5} NoWrap</StyledColumn>
        <StyledColumn md={5}>md={5} NoWrap</StyledColumn>
        <StyledColumn md={5}>md={5} NoWrap</StyledColumn>
      </Row>
    </>
  )

  .add('Default', () =>
    <Container>
      <Row>
        <StyledColumn>11</StyledColumn>
        <StyledColumn>12</StyledColumn>
      </Row>
      <Row>
        <StyledColumn>21</StyledColumn>
        <StyledColumn>22</StyledColumn>
        <StyledColumn>23</StyledColumn>
      </Row>
      <Row>
        <StyledColumn>31</StyledColumn>
      </Row>
    </Container>
  )

  .add('Scaled columns', () =>
    <Container>
      <Row>
        <StyledColumn md={3} lg={6} xl={9}>Wide screen</StyledColumn>
        <StyledColumn md={9} lg={6} xl={3}>Narrow screen</StyledColumn>
      </Row>
    </Container>
  )

  .add('Offsets', () =>
    <Container>
      <Row>
        <StyledColumn md={4}>md=4</StyledColumn>
        <StyledColumn md={4} offset={{ md: 4 }}>offset: 4</StyledColumn>
      </Row>
      <Row>
        <StyledColumn md={3} offset={{ md: 3 }}>offset: 3</StyledColumn>
        <StyledColumn md={3} offset={{ md: 3 }}>offset: 3</StyledColumn>
      </Row>
      <Row>
        <StyledColumn md={6} offset={{ md: 3 }}>offset: 3</StyledColumn>
      </Row>
    </Container>
  )
