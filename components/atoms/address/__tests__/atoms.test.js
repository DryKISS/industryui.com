import { defaultStory } from './stories'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(defaultStory())
    .toJSON()
  expect(tree).toMatchSnapshot()
})