/**
 * Navbar links
 */

// React
import { bool, object, string } from 'prop-types'

// UI
import { Button, Icon, Link, MEDIA_QUERY, MEDIA_QUERY_MAX } from '../../../'

// Style
import styled, { css } from 'styled-components'

export const Links = ({ brand, closeMenu, links, type, visible }) => {
  const renderButton = (id, name, to, type) => {
    return (
      <Link to={to} passHref>
        <StyledButton
          id={id}
          context={type.context}
          onClick={visible ? closeMenu : () => {}}
          outline={type.outline}
          size={type.size}
          type={type.as}
        >
          {name}
        </StyledButton>
      </Link>
    )
  }

  const renderIcon = (to, type) => {
    return (
      <Link to={to}>
        <a onClick={visible && closeMenu}>
          <Icon icon={type.icon} />
        </a>
      </Link>
    )
  }

  const renderLink = (active, id, name, onClick, to) => {
    const handleClick = () => {
      visible && closeMenu()
      onClick && onClick()
    }

    if (type && (!active || active !== type)) {
      return
    }

    return (
      <Link to={to} passHref>
        <StyledLink id={id} onClick={handleClick}>
          {name}
        </StyledLink>
      </Link>
    )
  }

  return (
    <StyledCollapse visible={visible}>
      {Object.entries(links).map(([direction, link]) => (
        <StyledList direction={direction} key={direction}>
          {link.map(({ active, Component, id, name, onClick, to, type }) => (
            <StyledListItem brand={brand} key={id}>
              {Component && <Component />}
              {type && type.as === 'button' && renderButton(id, name, to, type)}
              {type && type.as === 'icon' && renderIcon(to, type)}
              {!Component &&
                (!type || type.as === 'link') &&
                renderLink(active, id, name, onClick, to)}
            </StyledListItem>
          ))}
        </StyledList>
      ))}
    </StyledCollapse>
  )
}

const StyledCollapse = styled.div`
  align-items: center;
  display: ${props => (props.visible ? 'block' : 'none')};
  flex-basis: 100%;
  flex-grow: 1;

  ${MEDIA_QUERY.desktop`
    align-items: center;
    border: none;
    display: flex;
    flex-basis: auto;
  `}
`

const StyledList = styled.ul`
  background-color: ${({ theme }) => theme.NAVBAR.background};
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;

  ${MEDIA_QUERY.desktop`
    background-color: initial;
    flex-direction: row;
    margin: ${props => (props.direction === 'left' ? 'auto 0' : 'auto 0 auto auto')};
  `}
`

const StyledListItem = styled.li`
  border-top: #f0f2f5 1px solid;
  padding: 1.1em 0.75rem;

  ${MEDIA_QUERY.desktop`
    border: none;
    margin: auto .75rem;
    padding: initial;
  `}

  ${props =>
    !props.brand &&
    css`
      &:first-child {
        margin-left: 0;
      }
    `}
`

const StyledLink = styled.a`
  color: ${props => props.theme.NAVBAR.colourActive};
  display: block;
  font-family: ${props => props.theme.TYPOGRAPHY.font};
  font-weight: bold;
  line-height: 1.5;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.NAVBAR.colourHover};
  }

  ${MEDIA_QUERY.desktop`
    line-height: 1.5;
  `}
`

const StyledButton = styled(Button)`
  ${MEDIA_QUERY_MAX.desktop`
    background: none;
    border: none;
    color: ${props => props.theme.COLOUR.danger};
    cursor: pointer;
    font-family: ${props => props.theme.TYPOGRAPHY.font};
    font-size: 1rem;
    font-weight: bold;
    width: 100%;

    &:hover {
      background: none;
      color: ${props => props.theme.NAVBAR.colourHover};
    }
  `}
`

Links.propTypes = {
  brand: string,
  links: object.isRequired,
  visible: bool,
  type: string
}
