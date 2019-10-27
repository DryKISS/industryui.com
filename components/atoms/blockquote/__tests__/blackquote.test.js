import React from 'react'
import { Blockquote } from './stories'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Blockquote footer='Footer Text' text='Title Text' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
