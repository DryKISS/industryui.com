/**
 * Components - Form - Fieldset
 */

// React
import { node } from 'prop-types'

// Style
import styled from 'styled-components'

const Fieldset = styled.fieldset`
  border: 0;
  margin: 0 0 1rem;
  padding: 0;
`

Fieldset.propTypes = {
  children: node.isRequired
}

export default Fieldset
