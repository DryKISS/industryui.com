/**
 * Footer
 */

// React
import React from 'react'
import renderer from 'react-test-renderer'

// UI
import Footer from '../../'

describe(`Organisms/Footer`, () => {
  global.___loader = {
    enqueue: jest.fn()
  }

  test('renders the footer correctly', () => {
    expect(renderer.create(
      <Footer />
    ).toJSON()).toMatchSnapshot()
  })
})
