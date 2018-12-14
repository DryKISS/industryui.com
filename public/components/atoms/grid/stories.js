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

storiesOf('Atoms/Grid', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Container />
    )
  )

  .add('Columns sizes & offsets', withInfo()(() => {
    const style = {
      border: '1px gray solid'
    }

    return (
      <Container>
        <Row>
          <Column md={4} style={style}>
            {`md={4}`}
          </Column>
          <Column style={style} md={4} offset={{ md: 4 }} style={style} >
            {`md={4} offset={{md:4}}`}
          </Column>
        </Row>
        <Row>
          <Column md={3} offset={{ md: 3 }} style={style} >
            {`md={3} offset={{md:3}} `}
          </Column>
          <Column md={3} offset={{ md: 3 }} style={style} >
            {`md={3} offset={{md:3}}`}
          </Column>
        </Row>
        <Row>
          <Column md={6} offset={{ md: 3 }} style={style} >
            {`md={6} offset={{md:3}}`}
          </Column>
        </Row>
      </Container>
    )
  }
  )
  )
