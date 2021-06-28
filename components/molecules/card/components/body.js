/**
 * Card - Body
 */

// React
import React from 'react'
import { bool, func, node, oneOf, string } from 'prop-types'

// UI
import { Heading } from '../../../'
import { THEME_CONTEXT } from '../../../theme/constants/context'
import { CardCTA } from './cta'

// Style
import styled from 'styled-components'

const CardBody = ({
  center,
  children,
  className,
  context,
  ctaFunc,
  ctaLink,
  ctaTitle,
  showCta,
  title,
  titleNoWrap
}) => {
  return (
    <StyledBody className={className} center={center}>
      {title && (
        <StyledWrapper>
          <StyledTitle content={title} noWrap={titleNoWrap} tag="h2" />
        </StyledWrapper>
      )}

      {(children || showCta) && (
        <StyledContent context={context}>
          {children}
          {showCta && <CardCTA func={ctaFunc} link={ctaLink} title={ctaTitle} />}
        </StyledContent>
      )}
    </StyledBody>
  )
}

const StyledBody = styled.div`
  ${({ center }) =>
    center &&
    `
    align-items: center;
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
    text-align: center;
  `}
`

const StyledWrapper = styled.div`
  display: flex;
`

const StyledTitle = styled(Heading)`
  margin: 24px auto 16px auto;
  text-align: center;
  width: 75%;
`

const StyledContent = styled.div`
  padding: 1rem;
`

CardBody.propTypes = {
  center: bool,
  children: node,
  className: string,
  context: oneOf(Object.values(THEME_CONTEXT)),
  ctaFunc: func,
  ctaLink: string,
  ctaTitle: string,
  showCta: bool,
  title: string,
  titleNoWrap: bool
}

CardBody.defaultProps = {
  context: 'primary',
  showCta: false
}

export default CardBody
