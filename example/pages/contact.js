/**
 * Contact
 */

// UI
import { Contact } from '../components/contact/contact'
import { Page } from '../components/common/page/page'

const PageContact = () => {
  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/contact',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page
      heading="Find a team of passionate people who will give it their best."
      heroHeading="Contact Us"
      heroSubHeading="Get in Touch For A Free Consultation"
      meta={meta}
    >
      <Contact />
    </Page>
  )
}

export default PageContact
