/**
 * Molecules - Notification
 */
import { main } from './stories'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(main()).toJSON()
  expect(tree).toMatchSnapshot()
})
