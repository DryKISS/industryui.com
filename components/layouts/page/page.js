/**
 * Layout — Page
 * Allows us to specify some rules for how the page will be rendered
 */

// React
import React, { useContext } from 'react'
import { bool, node, object, shape, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { ConfigContext, Container, MetaHead, PageHeading } from '../../'

export const Page = ({ children, fluid, meta, pageHeading }) => {
  const { Brand, Canonical } = useContext(ConfigContext)

  return (
    <StyledPage>
      {meta && <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />}

      <Container fluid={fluid}>
        {pageHeading && <PageHeading {...pageHeading} />}
        {children}
      </Container>
    </StyledPage>
  )
}

const StyledPage = styled.div`
  background-color: ${({ theme }) =>
    theme.PAGE.backGroundColour ? theme.PAGE.backGroundColour : theme.COLOUR.white};
`

Page.propTypes = {
  children: node.isRequired,
  fluid: bool,
  meta: shape({
    description: string,
    path: string,
    title: string
  }),
  pageHeading: object
}

Page.defaultProps = {
  fluid: false
}
