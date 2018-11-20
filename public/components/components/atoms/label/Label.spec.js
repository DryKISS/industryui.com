/**
 * Label Test
 */

// React
import React from 'react'
import Label from '../Label'
import renderer from 'react-test-renderer'

const DEFAULT_TEXT = 'Default text'

const ownProps = {
  text: DEFAULT_TEXT,
  portrait: true
}

test(`Test label`, () => {
  const component = renderer.create(
    <Label {...ownProps} />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
