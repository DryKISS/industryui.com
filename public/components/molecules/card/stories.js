/**
 * Card Stories
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'

// UI
import { Button, Card, Column } from '../../'
import Readme from './README.md'
import vizla from './__resources__/vizla.jpg'
import seeker from './__resources__/seeker.png'

storiesOf('Molecules/Card', module)

  .addDecorator(story => (
    <Column md={3}>{story()}</Column>
  ))
  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Card
        bordered={boolean('Bordered', true)}
        footer={text('Footer', 'Footer text')}
        image={vizla}
        title={text('Title', 'Title of the article')}
      >
        {text('Description', 'Description of the card.')}
      </Card>
    )
  )

  .add('Horizontal',
    withInfo()(() =>
      <Card
        bordered={boolean('Bordered', true)}
        horizontal={boolean('Horizontal', true)}
        image={seeker}
        title={text('Title', 'Are you a dog seeker?')}
      >
        <p>
          {text('Description',
            `The wise man therefore always holds in these matters to this
               principle of selection: he rejects pleasures to secure other
               greater pleasures, or else he endures.`)}
        </p>

        <Button className='Card-absoluteBottom' secondary>
          View available dogs
        </Button>

      </Card>
    )
  )

  .add('Breed',
    withInfo()(() =>
      <Card
        bordered={boolean('Bordered', true)}
        footer='Vizsla'
        image={vizla}
      />
    )
  )

  .add('No Image',
    withInfo()(() =>
      <Card
        bordered={boolean('Bordered', false)}
        title='No Image'
      >
        Content
      </Card>
    )
  )
