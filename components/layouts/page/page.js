/**
 * Layout — Page
 */

// React
import { useContext } from 'react'
import { any, bool, node, oneOf, oneOfType, shape, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { ConfigContext, Container, CONTEXT, MetaHead, PageHeading, SIZE, Space } from '../../'

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
  padding: oneOfType([bool, oneOf(Object.values(SIZE))]),
  pageHeading: shape({
    center: bool,
    context: oneOf(Object.values(CONTEXT)),
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
