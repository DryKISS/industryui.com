/**
 * Link Test
 *
 * npm run dev:test -- -t Link
 */

import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

// Component
import Link from './'

// Render
describe(`Link Render`, () => {
  global.___loader = {
    enqueue: jest.fn()
  }

  // Snapshot: Default
  it('Default', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Link to='/'>Home</Link>
        </MemoryRouter>
      )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  // Snapshot: Mailto
  it('Mailto', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Link to='support@fantasybet.com' type='mailto'>Support</Link>
        </MemoryRouter>
      )

    expect(component.toJSON()).toMatchSnapshot()
  })

  // Snapshot: External Link: HTTPS
  it('External HTTPS', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Link to='https://fantasybet.com'>External HTTPS</Link>
        </MemoryRouter>
      )

    expect(component.toJSON()).toMatchSnapshot()
  })

  // Snapshot: External Link: HTTP
  it('External HTTP', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Link to='http://fantasybet.com'>External HTTP</Link>
        </MemoryRouter>
      )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
