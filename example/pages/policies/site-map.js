/**
 * Site Map
 */

// UI
import { Container } from '@drykiss/industry-ui'
import { Page } from '../../components/common/page/page'

const PageSiteMap = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/policies/site-map',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page heroHeading="Site Map" meta={meta}>
      <Container>Site map</Container>
    </Page>
  )
}

export default PageSiteMap
