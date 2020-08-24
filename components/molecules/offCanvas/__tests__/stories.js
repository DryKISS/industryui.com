/**
 * Molecules - OffCanvas
 */
// React
import React, { useState } from 'react'

// Storybook
import { select, text, withKnobs, number, boolean } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

// UI
import { Button, Form, Input, OffCanvas, Progress, ProgressBar } from 'components'

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

const BaseComponent = props => {
  const show = boolean('Show', true)
  const widthKnob = number('Width (%)', 25, {
    range: true,
    min: 1,
    max: 100,
    step: 1
  })

  const defaultProps = {
    variant: select('Variant', {
      Normal: 'normal',
      Extended: 'extended'
    }),
    hasAvatar: boolean('Avatar', false),
    context: Context('', 'primary'),
    headerText: text('Header', 'Homyze'),
    headerContent: text('headerContent', 'This is the header content example'),
    placement: select(
      'Placement',
      {
        Top: 'top',
        Right: 'right',
        Bottom: 'bottom',
        Left: 'left'
      },
      'right'
    ),
    width: widthKnob + '%',
    show
  }

  return <OffCanvas {...defaultProps} />
}

export const main = () => <BaseComponent>Components go here</BaseComponent>

const storyHOC = Component => {
  return () => {
    const [isChecked, toggleCheck] = useState(true)
    const contextKnob = Context()
    const variant = select('Variant', {
      Normal: 'normal',
      Extended: 'extended'
    })
    const headerContent = text('headerContent', 'This is the header content example')
    const textKnob = text('Header', 'Homyze')
    const widthKnob = number('Width (%)', 25, {
      range: true,
      min: 1,
      max: 100,
      step: 1
    })

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
          headerText={textKnob}
          headerContent={headerContent}
          placement={placementKnob}
          toggleCheck={toggleCheck}
          width={widthKnob + '%'}
          variant={variant}
        />
      </>
    )
  }
}

export const withOverlay = storyHOC(
  ({
    contextKnob,
    headerText,
    isChecked,
    placement,
    toggleCheck,
    width,
    variant,
    headerContent
  }) => {
    const opacityKnob = number('Overlay Opacity', 0.3, {
      range: true,
      min: 0.1,
      max: 1,
      step: 0.1
    })
    return (
      <>
        <OffCanvas
          context={contextKnob}
          headerText={headerText}
          headerContent={headerContent}
          overlay
          overlayOpacity={opacityKnob}
          placement={placement}
          show={isChecked}
          toggleShow={toggleCheck}
          width={width}
          variant={variant}
        >
          Components go here
        </OffCanvas>
      </>
    )
  }
)

export const withMailForm = storyHOC(
  ({
    contextKnob,
    headerText,
    isChecked,
    placement,
    toggleCheck,
    width,
    variant,
    headerContent
  }) => {
    return (
      <>
        <OffCanvas
          context={contextKnob}
          headerText={headerText}
          placement={placement}
          show={isChecked}
          toggleShow={toggleCheck}
          width={width}
          variant={variant}
          headerContent={headerContent}
        >
          <Form submit={() => {}}>
            <Input change={() => {}} label='Name' id='name' placeholder='Alfred' />
            <Input change={() => {}} label='Surname' id='surname' placeholder='Lavanne' />
            <Input change={() => {}} label='Favourite color' id='color' placeholder='Red' />
            <Input change={() => {}} label='Favourite color' id='color' placeholder='Red' />
            <Input change={() => {}} label='Favourite color' id='color' placeholder='Red' />
            <Input change={() => {}} label='Favourite color' id='color' placeholder='Red' />

            <Input
              change={() => {}}
              label='Email'
              id='email'
              placeholder='Enter email address'
              type='email'
            />
            <Input
              change={() => {}}
              label='Password'
              id='password'
              placeholder='Enter your password'
              type='password'
            />
            <Input
              change={() => {}}
              label='Repeat your Password'
              id='repeatPassword'
              placeholder='Enter your password'
              type='password'
            />

            <Button secondary type='submit'>
              Go to next step
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
  ({ contextKnob, isChecked, placement, toggleCheck, width, variant, headerContent }) => {
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
          placement={placement}
          show={isChecked}
          toggleShow={toggleCheck}
          width={width}
          variant={variant}
          headerContent={headerContent}
        >
          {previews[previewIndex].component()}
        </OffCanvas>
      </>
    )
  }
)
