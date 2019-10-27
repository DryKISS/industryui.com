import React from 'react'
import { Badge } from '../'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Badge>Majid</Badge>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
