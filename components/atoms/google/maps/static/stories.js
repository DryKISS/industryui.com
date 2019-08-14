/**
 * Static Map
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'

// UI
import { GoogleMapsStatic, GoogleMapsStaticPath } from './'
import Readme from './README.md'

storiesOf('Atoms/Google/Static Map', module)

  .addDecorator(withKnobs)
  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <GoogleMapsStatic size='600x600' apiKey=''>
        <GoogleMapsStaticPath
          color='0xff0000ff'
          weight='5'
          points={[
            { lat: 40.737102, lng: -73.990318 },
            '40.749825,-73.987963',
            { lat: 40.752946, lng: -73.987384 },
            { lat: 40.755823, lng: -73.986397 }
          ]}
        />
      </GoogleMapsStatic>
    )
  )
