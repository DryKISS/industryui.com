/**
 * Register
 */

// React
import React from 'react'
import renderer from 'react-test-renderer'

// UI
import { Register } from '../../'

// Render
describe(`Login Render`, () => {
  global.___loader = {
    enqueue: jest.fn()
  }

  // Snapshot: Default
  it('Default', () => {
    const component = renderer
      .create(
        <Register />
      )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
