/**
 * Page Loading
 */

// UI
import { PageLoading, LdsSpinner } from 'components'

export default {
  title: 'Molecules/PageLoading',
  component: PageLoading
}

export const main = () => <PageLoading indicator={<LdsSpinner />} />
export const withChildren = () => <PageLoading>Loading...</PageLoading>
