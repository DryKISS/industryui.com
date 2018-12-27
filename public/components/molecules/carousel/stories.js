/**
 * Carousel
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'

// Style
import styled from 'styled-components'

// UI
import { Carousel } from '../../'
import Readme from './README.md'

import dog1 from './__mocks__/images/dog1.jpg'
import dog2 from './__mocks__/images/dog2.jpg'
import dog3 from './__mocks__/images/dog3.jpg'
import dog4 from './__mocks__/images/dog4.jpg'
import dog5 from './__mocks__/images/dog5.jpg'

storiesOf('Molecules/Carousel', module)

  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))

  .add('Detailed',
    withInfo()(() =>
      <Carousel>
        <div>
          <TextLabel style={{ objectFit: 'contain' }}>objectFit: contain</TextLabel>
          <Image src={dog1} alt='' style={{ objectFit: 'contain', border: 'dotted lightgray' }} />
        </div>
        <div>
          <TextLabel>objectFit: cover</TextLabel>
          <Image src={dog2} alt='' style={{ border: 'dotted lightgray' }} />
        </div>
        <div>
          <TextLabel>objectFit: none</TextLabel>
          <Image src={dog3} alt='' style={{ objectFit: 'none' }} />
        </div>
        <div style={{ width: '100%', height: '300px' }}>
          this is text div
        </div>
        <div>
          <TextLabel>objectFit: cover</TextLabel>
          <Image src={dog4} alt='' />
        </div>
        <div>
          <TextLabel>objectFit: cover</TextLabel>
          <Image src={dog5} alt='' />
        </div>

      </Carousel>
    )
  )

  .add('One slide',
    withInfo()(() =>
      <Carousel>
        <div>
          <Image src={dog1} alt='' />
        </div>

      </Carousel>
    )
  )

  .add('Two slides',
    withInfo()(() =>
      <Carousel>
        <div>
          <Image src={dog1} alt='' />
        </div>
        <div>
          <Image src={dog2} alt='' />
        </div>
      </Carousel>
    )
  )

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;  /* or 'contain' to show all image */
`

const TextLabel = styled.span`
  position: absolute;
  text-shadow: 2px 2px #000000;
  color: white;
  font-size: 24px;
  padding: 2em;
`
