/**
 * Input Tags
 */

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { InputTags } from './'
import Readme from './README.md'

storiesOf('Atoms/Form/InputTags', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <>
      (not implemented yet)
      <InputTags
        change={() => {}}
      />
    </>
  )
