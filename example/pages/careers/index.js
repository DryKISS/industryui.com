/**
 * Careers
 * Showcases available jobs at DryKISS
 *
 * @see https://www.malt.es/
 */

// UI
import { CareersList } from '../../components/careers/list'
import { Page } from '../../components/common/page/page'
import { CAREERS } from '../../data/careers'

const PageCareers = ({ careers }) => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/careers',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page
      heading="Current Jobs Openings"
      heroHeading="Opening Positions"
      heroSubHeading="Join a team that values talent and thinking outside the box. Together we will create great products"
      meta={meta}
    >
      <CareersList items={careers} />
    </Page>
  )
}

export async function getStaticProps() {
  return {
    props: { careers: CAREERS }
  }
}

export default PageCareers
