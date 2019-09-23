/**
 * Grid
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Container, Row, Column } from './'
import Readme from './README.md'

import { StyledColumn, colStyle } from './__mocks__/grid'

storiesOf('Atoms/Grid', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Container>
      <Row>
        <Column>
          11
        </Column>
        <Column>
          12
        </Column>
      </Row>
      <Row >
        <Column>
          21
        </Column>
        <Column>
          22
        </Column>
        <Column>
          23
        </Column>
      </Row>
      <Row>
        <Column>
          31
        </Column>
      </Row>
    </Container>
  )

  .add('Size depending on screen width', () =>
    <Container>
      <Row>
        <StyledColumn md={3} lg={6} lx={9}>
          I love wide screen
        </StyledColumn>
        <StyledColumn md={9} lg={6} xl={3}>
          I love narrow screen
        </StyledColumn>
      </Row>
    </Container>
  )

  .add('With column sizes & offsets', () =>
    <Container>
      <Row>
        <StyledColumn md={4}>
          {`md=4`}
        </StyledColumn>
        <StyledColumn style={colStyle} md={4} offset={{ md: 4 }}>
          {`md=4 offset={md:4}`}
        </StyledColumn>
      </Row>
      <Row>
        <StyledColumn md={3} offset={{ md: 3 }}>
          {`md=3 offset={md:3}`}
        </StyledColumn>
        <StyledColumn md={3} offset={{ md: 3 }}>
          {`md=3 offset={md:3}`}
        </StyledColumn>
      </Row>
      <Row>
        <StyledColumn md={6} offset={{ md: 3 }}>
          {`md=6 offset={md:3}`}
        </StyledColumn>
      </Row>
    </Container>
  )
