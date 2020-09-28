/**
 * Page Heading
 */

// UI
import { PageHeading } from 'components'
import Readme from '../README.md'

export default {
  title: 'Molecules/PageHeading',
  component: PageHeading,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <PageHeading heading='Page Heading' strapline='Strapline' />

export const withHelp = () => (
  <PageHeading heading='Page Heading' strapline='Strapline' help helpContent='Help Content' />
)

export const centered = () => <PageHeading heading='Page Heading' strapline='Strapline' center />

export const withContext = () => (
  <PageHeading heading='Page Heading' strapline='Strapline' context='warning' />
)
