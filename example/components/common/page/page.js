/**
 * Components - Common — Page
 */

// Style
import styled from 'styled-components'

// UI
import { Container, MetaHead } from '@drykiss/industry-ui'
import { PageHero } from './hero'
import { SectionHeading } from '../typography/sectionHeading'

// Config
import { Brand, Canonical } from '../../../config/config'

export const Page = ({
  children,
  fluid,
  heading,
  heroHeading,
  heroImage,
  heroSubHeading,
  meta
}) => {
  return (
    <StyledPage>
      {meta && <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />}

      <PageHero heading={heroHeading} image={heroImage} subHeading={heroSubHeading} />

      {heading && (
        <Container>
          <SectionHeading align="left" content={heading} paddingBottom={1} />
        </Container>
      )}

      {children}
    </StyledPage>
  )
}

const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.COLOUR.white};
`
