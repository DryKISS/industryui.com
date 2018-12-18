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

storiesOf('Molecules/Carousel', module)

  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))

  .add('Primary',
    withInfo()(() =>
      <Carousel>
        <div>
          <Image src="http://placehold.it/350x300/0000FF/808080?text=1" alt="" />
        </div>
        <div>
          <Image src="http://placehold.it/350x300/FFFF00/000000?text=2" alt=""/>
        </div>
        <div>
          <Image src="http://placehold.it/350x300/DDEEFF/000000?text=3" alt="" />
        </div>
        <div>
          <Image src="http://placehold.it/350x300/EE1111?text=4" alt=""/>
        </div>
        <div>
          <img src="http://placehold.it/350x300/AA00CC/DDEEFF?text=5+no+width" alt="" />
        </div>
        <div>
          <Image src="http://placehold.it/350x300/FF0033/DDEEFF?text=6" alt="" />
        </div>
        <div style={{ width: '100%', border: 'dotted' }}> 
          7. this is div
        </div>
        <div>
          <Image src="http://placehold.it/350x300/CC1133/DDEEFF?text=8" alt="" />
        </div>

      </Carousel>
    )
  )

const Image = styled.img`
  width: 100%;
`
