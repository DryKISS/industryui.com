/**
 * Tab
 */

// React
import { func, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Tab = ({ activeTab, childClick, label, onClick }) => {
  const click = () => {
    onClick(label)
    childClick()
  }

  return (
    <StyledTab active={activeTab === label} onClick={click}>
      {label}
    </StyledTab>
  )
}

const StyledTab = styled.ol`
  background-color: ${props => props.active ? props.theme.COLOUR.success : props.theme.COLOUR.light};
  border: ${props => props.active && `2px solid ${props.theme.COLOUR.success}`};
  color: ${props => props.active ? props.theme.COLOUR.white : props.theme.COLOUR.dark};
  cursor: pointer;
  display: inline-block;
  list-style: none;
  padding: 0.5rem 0.75rem;
`

Tab.propTypes = {
  activeTab: string.isRequired,
  childClick: func,
  label: string.isRequired,
  onClick: func.isRequired
}
