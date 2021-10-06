/**
 * Components - Form - Legend
 */

// React
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

const Legend = styled.legend`
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLOUR.dark};
  display: table;
  max-width: 100%;
  margin-bottom: 0.5rem;
  padding: 0;
  white-space: normal;
`

Legend.propTypes = {
  children: node.isRequired
}

export default Legend
