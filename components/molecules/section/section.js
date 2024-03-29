/**
 * Section
 * Seperates a landing page module
 */

// React
import React from 'react'
import { any, bool, node, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Container from '../../atoms/grid/Column'
import Heading from '../../atoms/heading/heading'
import Row from '../../atoms/grid/Row'

const Section = ({ children, className, heading, row, style }) => (
  <StyleSection>
    <Container>
      {heading && <Heading className="text-center" content={heading} context="primary" tag="h2" />}
      {row ? <Row>{children}</Row> : children}
    </Container>
  </StyleSection>
)

const StyleSection = styled.section`
  border-top: 4px solid #ecf0f3;
  padding: 3rem 0;
`

Section.propTypes = {
  children: node,
  className: any,
  heading: string,
  row: bool,
  style: any
}

Section.defaultProps = {
  children: '',
  row: true
}
export default Section
