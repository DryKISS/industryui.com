/**
 * Home
 */

// UI
import { Space } from '@drykiss/industry-ui'
import { HomeClients } from '../components/home/clients'
import { HomeMiddleHero } from '../components/home/middleHero'
import { HomeOurMethodology } from '../components/home/ourMethodology'
import { HomeOurWorks } from '../components/home/ourWorks'
import { HomeWhoWeAre } from '../components/home/whoWeAre'
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
      <HomeWhoWeAre />
      <Space marginBottom="xxxl" />

      <HomeOurMethodology />

      <HomeMiddleHero />
      <Space marginBottom="xxxl" />

      <HomeOurWorks />
      <Space marginBottom="xxxl" />

      <HomeClients />
    </Page>
  )
}

export default PageIndex
