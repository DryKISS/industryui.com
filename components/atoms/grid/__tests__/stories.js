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

storiesOf('Atoms/Grid', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Container', () =>
    <Container style={{ border: '1px solid black' }}>
      Container
    </Container>
  )

  .add('Container Fluid', () =>
    <Container fluid style={{ border: '1px solid black' }}>
      Container
    </Container>
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
        <StyledColumn md={3} lg={6} xl={9}>
          I love wide screen
        </StyledColumn>
        <StyledColumn md={9} lg={6} xl={3}>
          I love narrow screen
        </StyledColumn>
      </Row>
    </Container>
  )

  .add('Offsets', () =>
    <Container>
      <Row>
        <StyledColumn md={4}>
          {'md=4'}
        </StyledColumn>
        <StyledColumn md={4} offset={{ md: 4 }}>
          {'md=4 offset={md:4}'}
        </StyledColumn>
      </Row>
      <Row>
        <StyledColumn md={3} offset={{ md: 3 }}>
          {'md=3 offset={md:3}'}
        </StyledColumn>
        <StyledColumn md={3} offset={{ md: 3 }}>
          {'md=3 offset={md:3}'}
        </StyledColumn>
      </Row>
      <Row>
        <StyledColumn md={6} offset={{ md: 3 }}>
          {'md=6 offset={md:3}'}
        </StyledColumn>
      </Row>
    </Container>
  )
