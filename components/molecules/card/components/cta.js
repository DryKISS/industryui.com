/**
 * Card - CTA
 */

// React
import React from 'react'
import { func, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Button from '../../../atoms/button/button/button'
import Link from '../../../atoms/link/link'

const CardCTA = ({ func, link, title }) => {
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
  title: string
}

CardCTA.defaultProps = {
  title: 'Read more'
}

export default CardCTA
