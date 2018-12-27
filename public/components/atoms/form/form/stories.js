/**
 * Form
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withReadme } from 'storybook-readme'

// UI
import { Form, Button, Input } from '../../'
import Readme from './README.md'

storiesOf('Atoms/Form/Form', module)

  .addDecorator(withReadme(Readme))

  .add('Default',
    withInfo()(() =>
      <Form>

        <Input
          label='Email'
          id='email'
          placeholder='Enter email address'
          type='email'
        />

        <Button secondary type='submit'>Send reset link</Button>

      </Form>
    )
  )
