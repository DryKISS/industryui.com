/**
 * Layout — Page
 */

// React
import React, { useContext } from 'react'
import { any, bool, node, oneOf, oneOfType, shape, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { ConfigContext } from '../../services/config/context'
import { Container } from '../../atoms/grid/components/Container'
import { MetaHead } from '../../meta/head'
import { PageHeading } from '../../molecules/pageHeading/pageHeading'
import { Space } from '../../atoms/space/space'
import { THEME_CONTEXT } from '../../theme/constants/context'
import { THEME_SIZE } from '../../theme/constants/size'

export const Page = ({ children, fluid, meta, padding, pageHeading }) => {
  const { Brand, Canonical } = useContext(ConfigContext)

  return (
    <StyledPage>
      {padding && <Space paddingTop={padding} />}

      {meta && <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />}

      <Container fluid={fluid}>
        {pageHeading && <PageHeading {...pageHeading} />}
        {children}
      </Container>

      {padding && <Space paddingBottom={padding} />}
    </StyledPage>
  )
}

const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.PAGE.backGroundColour};
`

Page.propTypes = {
  children: node.isRequired,
  fluid: bool,
  meta: shape({
    description: string.isRequired,
    path: string,
    title: string.isRequired
  }),
  padding: oneOfType([bool, oneOf(Object.values(THEME_SIZE))]),
  pageHeading: shape({
    center: bool,
    context: oneOf(Object.values(THEME_CONTEXT)),
    divider: bool,
    heading: any.isRequired,
    help: bool,
    helpContent: any,
    strapline: string
  })
}

Page.defaultProps = {
  fluid: false,
  padding: 'md'
}
