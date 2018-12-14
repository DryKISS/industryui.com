/**
 * Grid
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Container, Row, Column } from '../../'
import Readme from './README.md'

//import { COLUMNS } from './__mocks__'

const colStyle = { border: '1px gray solid' }

storiesOf('Atoms/Grid', module)

  .addDecorator(withReadme(Readme))

  .add('Default', withInfo()(() =>
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
  ))

  .add('With column sizes & offsets', withInfo()(() =>
    <Container>
      <Row>
        <Column md={4} style={colStyle}>
          {`md=4`}
        </Column>
        <Column style={colStyle} md={4} offset={{ md: 4 }} style={colStyle} >
          {`md=4 offset={md:4}`}
        </Column>
      </Row>
      <Row>
        <Column md={3} offset={{ md: 3 }} style={colStyle} >
          {`md=3 offset={md:3}`}
        </Column>
        <Column md={3} offset={{ md: 3 }} style={colStyle} >
          {`md=3 offset={md:3}`}
        </Column>
      </Row>
      <Row>
        <Column md={6} offset={{ md: 3 }} style={colStyle} >
          {`md=6 offset={md:3}`}
        </Column>
      </Row>
    </Container>
  ))
