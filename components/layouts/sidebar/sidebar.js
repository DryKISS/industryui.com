/**
 * Layout
 * Sets up a container for all the pages, called on each route change
 */

// React
import { array, func, node, string } from 'prop-types'

// UI
import { Bootstrap, Container, Column, Row } from '../../'
import { Sidebar } from 'config'

export const SidebarLayout = ({ brand, children, copyright, footer, Navigation }) => {
  return (
    <Container fluid>
      <Row noGutter>
        <Column md={2}>
          <Sidebar />
        </Column>

        <Column md={10}>
          <Bootstrap brand={brand} copyright={copyright} footer={footer} Navigation={Navigation}>
            {children}
          </Bootstrap>
        </Column>
      </Row>
    </Container>
  )
}

SidebarLayout.propTypes = {
  brand: string,
  children: node.isRequired,
  copyright: array,
  footer: array,
  navigation: func
}
