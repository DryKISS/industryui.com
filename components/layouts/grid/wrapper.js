/**
 * Components - Layouts - LayoutGrid
 */

// React
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

const LayoutGridWrapper = styled.div`
  display: grid;
  grid: 1fr / auto 1fr 0;
  height: 100%;
  overflow-x: hidden;
  width: 100%;
`

LayoutGridWrapper.propTypes = {
  children: node
}

LayoutGridWrapper.defaultProps = {}

export default LayoutGridWrapper
