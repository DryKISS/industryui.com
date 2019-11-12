/**
 * Card Stories
 */

// React
import React from 'react'

import { withKnobs, boolean, text } from '@storybook/addon-knobs'

// UI
import { Button, Card, Column } from 'components'
import Readme from '../README.md'
import vizla from '../__resources__/vizla.jpg'
import seeker from '../__resources__/seeker.png'

export default {
  title: 'Molecules/Card',
  component: Card,
  decorators: [story => <Column md={3}>{story()}</Column>, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Card
    alt='Vizla'
    bordered={boolean('Bordered', true)}
    footer={text('Footer', 'Footer text')}
    image={vizla}
    title={text('Title', 'Title of the article')}
  >
    {text('Description', 'Description of the card.')}
  </Card>
)

export const horizontal = () => (
  <Card
    alt='Vizla'
    bordered={boolean('Bordered', true)}
    horizontal={boolean('Horizontal', true)}
    image={seeker}
    title={text('Title', 'Are you a dog seeker?')}
  >
    <p>
      {text(
        'Description',
        `The wise man therefore always holds in these matters to this
               principle of selection: he rejects pleasures to secure other
               greater pleasures, or else he endures.`
      )}
    </p>

    <Button className='Card-absoluteBottom' secondary>
      View available dogs
    </Button>
  </Card>
)

export const breed = () => (
  <Card alt='Vizla' bordered={boolean('Bordered', true)} footer='Vizsla' image={vizla} />
)

export const noImage = () => (
  <Card bordered={boolean('Bordered', false)} title='No Image'>
    Content
  </Card>
)
