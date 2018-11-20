/**
 * Register
 */

// React
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

// Component
import Register from './'

// Render
describe(`Login Render`, () => {
  global.___loader = {
    enqueue: jest.fn()
  }

  // Snapshot: Default
  it('Default', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
