/**
 * Home
 */

// UI
import { Page } from '../components/common/page/page'

const PageIndex = () => {
  const meta = {
    description: `DryKISS is a full service internet and mobile digital production house. Our
      services span consulting, strategy; planning; development; testing and analytics.`,
    path: '/',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page
      heroHeading="We do MVPs"
      heroImage="/images/home/hero.png"
      heroSubHeading="Supercharge your startup and launch your application. Validate your idea."
      meta={meta}
    >

    </Page>
  )
}

export default PageIndex
