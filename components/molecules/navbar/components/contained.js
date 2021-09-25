/**
 * Navbar - Contained
 * Places the navbar in a container
 */

// React
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Container from '../../../atoms/grid/Container'

const Contained = styled(Container)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

Contained.propTypes = {
  children: node.isRequired
}

export default Contained
