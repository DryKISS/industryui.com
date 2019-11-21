import { useState } from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'

// UI
import { OffCanvas } from '../'
import Readme from '../README.md'

import { Button, Input, Form, Progress, ProgressBar, CONTEXT } from '../../../'

export default {
  title: 'Molecules/OffCanvas',
  components: OffCanvas,
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const storyHOC = Component => {
  return () => {
    const [isChecked, toggleCheck] = useState(true)
    const contextKnob = select('context', CONTEXT, 'primary')
    const textKnob = text('headerText', 'Homyze')

    return (
      <>
        <label htmlFor='offCanvas'>Show/Hide OffCanvas </label>
        <input
          onChange={e => toggleCheck(!isChecked)}
          id='offCanvas'
          type='checkbox'
          checked={isChecked}
        />
        <Component
          contextKnob={contextKnob}
          isChecked={isChecked}
          textKnob={textKnob}
          toggleCheck={toggleCheck}
        />
      </>
    )
  }
}

export const main = storyHOC(({ contextKnob, isChecked, textKnob, toggleCheck }) => {
  return (
    <>
      <OffCanvas
        context={contextKnob}
        headerText={textKnob}
        show={isChecked}
        toggleShow={toggleCheck}
      >
        Components go here
      </OffCanvas>
    </>
  )
})

export const withMailForm = storyHOC(({ contextKnob, isChecked, textKnob, toggleCheck }) => {
  return (
    <>
      <OffCanvas
        context={contextKnob}
        headerText={textKnob}
        show={isChecked}
        toggleShow={toggleCheck}
      >
        <Form submit={() => {}}>
          <Input
            change={() => {}}
            label='Email'
            id='email'
            placeholder='Enter email address'
            type='email'
          />
          <Button secondary type='submit'>
            Send reset link
          </Button>
        </Form>
        <br />
        <Progress size='md'>
          <ProgressBar striped animated now={90}>
            90%
          </ProgressBar>
        </Progress>
      </OffCanvas>
    </>
  )
})

export const withDynamicContent = storyHOC(({ contextKnob, isChecked, toggleCheck }) => {
  const [previewIndex, changePreview] = useState(1)
  const previews = {
    1: {
      headerText: 'Homyze First',
      component: function () {
        return (
          <>
            <Form submit={() => {}}>
              <Input
                change={() => {}}
                label='Email'
                id='email'
                placeholder='Enter email address'
                type='email'
              />
              <Button secondary type='submit'>
                Send reset link
              </Button>
            </Form>
            <br />
            <Progress size='md'>
              <ProgressBar striped animated now={90}>
                90%
              </ProgressBar>
            </Progress>
          </>
        )
      }
    },
    2: {
      headerText: 'Homyze Second',
      component: function () {
        return <div>2</div>
      }
    },
    3: {
      headerText: 'Homyze Third',
      component: function () {
        return <div>3</div>
      }
    }
  }

  return (
    <>
      <br />
      <Button onClick={e => changePreview(1)}>Preview one</Button>
      <br />
      <br />
      <Button onClick={e => changePreview(2)}>Preview two</Button>
      <br />
      <br />
      <Button onClick={e => changePreview(3)}>Preview three</Button>
      <OffCanvas
        context={contextKnob}
        headerText={previews[previewIndex].headerText}
        show={isChecked}
        toggleShow={toggleCheck}
      >
        {previews[previewIndex].component()}
      </OffCanvas>
    </>
  )
})
