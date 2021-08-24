/**
 * Components - Icons - Desk
 */

// React
import React from 'react'

// UI
import { propTypes } from '../props'
import IconWrapper from '../wrapper'

const DeskIcon = (props) => {
  return (
    <IconWrapper name="iconDesk" {...props} mainSize={480}>
      <path d="M472,72H8c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h8v280c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V216h224v192h176V120h8c4.418,0,8-3.582,8-8V80C480,75.582,476.418,72,472,72z M48,392H32V120h16V392z M288,200H64v-16h224V200z M288,168H64v-48h224V168z M448,392H304v-16h144V392z M448,360H304v-48h144V360z M448,296H304v-80h144V296z M448,200H304v-80h144V200zM464,104H16V88h448V104z" />
      <rect x="360" y="136" width="32" height="16" />
      <rect x="160" y="136" width="32" height="16" />
      <rect x="360" y="232" width="32" height="16" />
      <rect x="360" y="328" width="32" height="16" />
    </IconWrapper>
  )
}

DeskIcon.propTypes = propTypes

export default DeskIcon
