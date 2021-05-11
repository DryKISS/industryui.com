/**
 * What we do
 */

// UI
import { Page } from '../components/common/page/page'
import { WhatWeDo } from '../components/whatWeDo/whatWeDo'

const PageWhatWeDo = ({ works }) => {
  const meta = {
    description: `DryKISS is a full service internet and mobile digital production house. Our
      services span consulting, strategy; planning; development; testing and analytics.`,
    path: '/our-work',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page
      heroHeading="Our Services"
      heroSubHeading="We offer a full-service web development and marketing solution"
      meta={meta}
    >
      <WhatWeDo items={works} />
    </Page>
  )
}

export default PageWhatWeDo
