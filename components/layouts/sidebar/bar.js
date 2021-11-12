/**
 * Components - Layout - Bar
 */

// React
import React from 'react'
import { array, func, node, string } from 'prop-types'

// UI
import Bar from '../../organisms/bar/bar'
import Bootstrap from '../../layouts/bootstrap/bootstrap'
import Container from '../../atoms/grid/Container'
import Column from '../../atoms/grid/Column'
import List from '../../atoms/list/list'
import ListItem from '../../atoms/list/listItem'
import Row from '../../atoms/grid/Row'

const BarLayout = ({ brand, children, copyright, footer, Navigation }) => {
  return (
    <Container fluid>
      <Row>
        <Column md={2}>
          <Bar variant="overlay">
            <List group>
              <ListItem>HERE</ListItem>
            </List>
          </Bar>
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

BarLayout.propTypes = {
  brand: string,
  children: node.isRequired,
  copyright: array,
  footer: array,
  Navigation: func
}

export default BarLayout
