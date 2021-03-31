/**
 * Layout
 * Sets up a container for all the pages, called on each route change
 */

// React
import React, { useContext } from 'react'
import { array, func, node, string } from 'prop-types'

// UI
import { Bootstrap } from '../../layouts/bootstrap/bootstrap'
import ConfigContext from '../../services/config/context'
import { Container } from '../../atoms/grid/components/Container'
import { Column } from '../../atoms/grid/components/Column'
import { Row } from '../../atoms/grid/components/Row'

export const SidebarLayout = ({ brand, children, copyright, footer, Navigation }) => {
  const { Sidebar } = useContext(ConfigContext)

  return (
    <Container fluid>
      <Row>
        <Column md={2}>
          <Sidebar />
        </Column>

        <Column md={10} style={{ padding: 0 }}>
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
  Navigation: func
}
