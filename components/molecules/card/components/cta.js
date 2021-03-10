/**
 * Card - CTA
 */

// React
import React from 'react'
import { func, string } from 'prop-types'

// UI
import { Button, Link } from '../../../'
import styled from 'styled-components'

export const CardCTA = ({ func, link, title }) => {
  const CtaButton = (props) => <StyledButton content={title} context="secondary" {...props} />

  return link ? (
    <Link border={false} passHref to={link}>
      <CtaButton />
    </Link>
  ) : (
    <CtaButton onClick={func} />
  )
}

const StyledButton = styled(Button)`
  display: block;
  margin-top: 0.5rem;
`

CardCTA.propTypes = {
  func,
  link: string,
  title: string,
}

CardCTA.defaultProps = {
  title: 'Read more',
}
