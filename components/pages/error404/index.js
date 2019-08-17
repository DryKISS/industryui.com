/**
 * Error 404
 */
// Config
import { BRAND, URL_BASE } from 'config'

// UI
import {
  Container,
  MetaHead,
  PageHeading
} from '../../../'

const Error404 = () => {
  const meta = {
    canonical: URL_BASE,
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    title: `DryKISS develops hybrid mobile and responsive websites`
  }

  return (
    <>
      <MetaHead meta={meta} brand={BRAND} />

      <Container>

        <PageHeading
          heading='404 ERROR PAGE – NOT FOUND'
          strapline={`
            The page you were looking for no longer exists or never did.
            Please use the links at the top of your screen to get back in the
            game, or click here to go home and start again.
          `}
        />

      </Container>
    </>
  )
}

export default Error404
