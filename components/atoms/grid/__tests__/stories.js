/**
 * Atoms - Grid
 */

// React
import React from 'react'

// UI
import { Container, Row } from '../index'
import Readme from '../README.md'
import { StyledColumn } from '../__mocks__/grid'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Atoms/Grid',
}

export const main = () => (
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

export const scaledColumns = () => (
  <Container>
    <Row>
      <StyledColumn md={3} lg={6} xl={9}>
        Wide screen
      </StyledColumn>
      <StyledColumn md={9} lg={6} xl={3}>
        Narrow screen
      </StyledColumn>
    </Row>
  </Container>
)

export const offsets = () => (
  <Container>
    <Row>
      <StyledColumn md={4}>md=4</StyledColumn>
      <StyledColumn md={4} offset={{ md: 4 }}>
        offset: 4
      </StyledColumn>
    </Row>
    <Row>
      <StyledColumn md={3} offset={{ md: 3 }}>
        offset: 3
      </StyledColumn>
      <StyledColumn md={3} offset={{ md: 3 }}>
        offset: 3
      </StyledColumn>
    </Row>
    <Row>
      <StyledColumn md={6} offset={{ md: 3 }}>
        offset: 3
      </StyledColumn>
    </Row>
  </Container>
)
