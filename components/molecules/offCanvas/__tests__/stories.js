/**
 * Off Canvas
 */

// React
import { useState } from 'react'

// Storybook
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

// UI
import { Button, Form, Input, OffCanvas, Progress, ProgressBar } from '../../../'
import Readme from '../README.md'

export default {
  title: 'Molecules/OffCanvas',
  components: OffCanvas,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const storyHOC = Component => {
  return () => {
    const [isChecked, toggleCheck] = useState(true)
    const contextKnob = Context()
    const textKnob = text('Header', 'Homyze')
    const placementKnob = select(
      'Placement',
      {
        Top: 'top',
        Right: 'right',
        Bottom: 'bottom',
        Left: 'left'
      },
      'right'
    )

    return (
      <>
        <label htmlFor='offCanvas'>Show/Hide OffCanvas </label>
        <input
          checked={isChecked}
          id='offCanvas'
          onChange={e => toggleCheck(!isChecked)}
          type='checkbox'
        />
        <Component
          contextKnob={contextKnob}
          isChecked={isChecked}
          textKnob={textKnob}
          placementKnob={placementKnob}
          toggleCheck={toggleCheck}
        />
      </>
    )
  }
}

export const main = storyHOC(({ contextKnob, isChecked, placementKnob, textKnob, toggleCheck }) => {
  return (
    <>
      <OffCanvas
        context={contextKnob}
        headerText={textKnob}
        placement={placementKnob}
        show={isChecked}
        toggleShow={toggleCheck}
      >
        Components go here
      </OffCanvas>
    </>
  )
})

export const withMailForm = storyHOC(
  ({ contextKnob, isChecked, placementKnob, textKnob, toggleCheck }) => {
    return (
      <>
        <OffCanvas
          context={contextKnob}
          headerText={textKnob}
          placement={placementKnob}
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
  }
)

export const withDynamicContent = storyHOC(
  ({ contextKnob, isChecked, placementKnob, toggleCheck }) => {
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
          placement={placementKnob}
          show={isChecked}
          toggleShow={toggleCheck}
        >
          {previews[previewIndex].component()}
        </OffCanvas>
      </>
    )
  }
)
