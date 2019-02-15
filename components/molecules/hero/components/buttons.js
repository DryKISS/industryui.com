/**
 * Hero - Buttons
 */

// React
import { array } from 'prop-types'

// UI
import { Button, Link } from '../../../'

// Style
import styled from 'styled-components'

export const HeroButtons = ({ buttons }) => {
  return buttons.map(({ content, context, to }, index) => (
    <Link to={to} key={index}>
      <StyledButton
        content={content}
        context={context}
        size='lg'
      />
    </Link>
  ))
}

HeroButtons.propTypes = {
  buttons: array
}

const StyledButton = styled(Button)`
  margin-right: 1rem;
`
