/**
 * Card
 */

// React
import React from 'react'

// UI
import Close from '../../atoms/close/close'
import Icon from '../../atoms/icon/icon/icon'
import Link from '../../atoms/link/link'
import MEDIA_QUERY from '../../utils/mediaQuery/query'

import CardBody from './components/body'
import CardFooter from './components/footer'
import CardHeader from './components/header'
import CardImage from './components/image'
import { CardPropTypes, CardDefaultProps } from './props'

// Style
import styled from 'styled-components'

export const Card = ({
  alt,
  body,
  bordered,
  center,
  children,
  className,
  close,
  context,
  ctaFunc,
  ctaLink,
  ctaTitle,
  deck,
  footer,
  footerContext,
  header,
  headerAlign,
  headerContext,
  icon,
  image,
  rounded,
  shadow,
  showCta,
  style,
  title,
  titleNoWrap,
  to
}) => {
  const linked = () => {
    return (
      <Link border={false} passHref to={to}>
        {card()}
      </Link>
    )
  }

  const card = () => {
    return (
      <StyledCard
        bordered={bordered}
        className={className}
        context={context}
        deck={deck}
        rounded={rounded}
        shadow={shadow}
        style={style}
      >
        {close && <Close click={close} />}

        {image && <CardImage alt={alt} src={image} />}

        {header && <CardHeader align={headerAlign} content={header} context={headerContext} />}

        {icon && <StyledIcon icon={icon} size="4x" />}

        {(title || body) && (
          <CardBody
            center={center}
            children={body}
            context={context}
            ctaFunc={ctaFunc}
            ctaLink={ctaLink}
            ctaTitle={ctaTitle}
            showCta={showCta}
            title={title}
            titleNoWrap={titleNoWrap}
          />
        )}

        {children}

        {footer && <CardFooter children={footer} context={footerContext} />}
      </StyledCard>
    )
  }

  return to ? linked() : card()
}

const StyledCard = styled.div`
  background-clip: border-box;
  background-color: ${({ context, theme }) => theme.COLOUR[context]};
  border: ${({ bordered }) => bordered && '1px solid rgba(0, 0, 0, .125)'};
  border-radius: ${({ rounded }) => rounded && '0.25rem'};
  box-shadow: ${({ shadow }) =>
    shadow && '0px 8px 10px rgba(24, 37, 50, 0.1), 0px 0px 1px rgba(24, 37, 50, 0.08)'};
  color: ${({ context, theme }) =>
    context === 'light' || context === 'white' ? theme.COLOUR.dark : theme.COLOUR.white};
  display: flex;
  flex-direction: column;
  font-size: inherit;
  margin: 0;
  min-width: 0;
  position: relative;
  word-wrap: break-word;
  overflow: hidden;

  ${({ deck }) =>
    deck &&
    MEDIA_QUERY.desktop`
    display: flex;
    flex: 1 0 calc(100%/3 - 30px);
    flex-direction: column;
    margin-right: 15px;
    margin-left: 15px;
  `}
`

const StyledIcon = styled(Icon)`
  margin: 1rem auto;
`

Card.propTypes = CardPropTypes
Card.defaultProps = CardDefaultProps
