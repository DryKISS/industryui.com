/**
 * Pagination
 */

// React
import React from 'react'
import renderer from 'react-test-renderer'

// UI
import Pagination from './'

describe(`Molecules/Pagination`, () => {
  test('Default', () => {
    const component = renderer.create(
      <Pagination
        activePage={2}
        onPageChange={val => val}
        totalPages={4}
      />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
