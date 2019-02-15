/**
 * Link
 *
 * npm run dev:test -- -t Link
 */

import React from 'react'
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
        <Link to='/'>Home</Link>
      )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  // Snapshot: Mailto
  it('Mailto', () => {
    const component = renderer
      .create(
        <Link to='support@fantasybet.com' type='mailto'>Support</Link>
      )

    expect(component.toJSON()).toMatchSnapshot()
  })

  // Snapshot: External Link: HTTPS
  it('External HTTPS', () => {
    const component = renderer
      .create(
        <Link to='https://fantasybet.com'>External HTTPS</Link>
      )

    expect(component.toJSON()).toMatchSnapshot()
  })

  // Snapshot: External Link: HTTP
  it('External HTTP', () => {
    const component = renderer
      .create(
        <Link to='http://fantasybet.com'>External HTTP</Link>
      )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
