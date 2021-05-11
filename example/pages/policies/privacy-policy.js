/**
 * Privacy Policy
 */

// UI
import { Container } from '@drykiss/industry-ui'
import { Page } from '../../components/common/page/page'

const PagePrivacy = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/policies/privacy-policy',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page heroHeading="Privacy Policy" meta={meta}>
      <Container>Privacy Policy</Container>
    </Page>
  )
}

export default PagePrivacy
