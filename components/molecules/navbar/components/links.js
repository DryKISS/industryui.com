/**
 * Navbar links
 */

// React
import { bool, object, string } from 'prop-types'

// UI
import { Button, Link } from '../../../'
import { MEDIA_QUERY, MEDIA_QUERY_MAX } from '../../../../utils'

// Style
import styled from 'styled-components'

export const Links = ({ links, type, visible }) => {
  const renderButton = (id, name, to, type) => {
    return (
      <Link to={to} passHref>
        <StyledButton
          id={id}
          context={type.context}
          outline={type.outline}
          size={type.size}
          type={type.as}
        >
          {name}
        </StyledButton>
      </Link>
    )
  }

  const renderLink = (active, id, name, onClick, to) => {
    if (type && (!active || active !== type)) {
      return
    }

    return (
      <Link to={to} passHref>
        <StyledLink id={id} onClick={onClick}>{name}</StyledLink>
      </Link>
    )
  }

  return (
    <StyledCollapse visible={visible}>

      {Object.entries(links).map(([direction, link]) =>

        <StyledList direction={direction} key={direction}>

          {link.map(({ active, Component, id, name, onClick, to, type }) =>

            <StyledListItem key={id}>
              { Component && <Component /> }
              { (type && type.as === 'button') && renderButton(id, name, to, type) }
              { (!Component && (!type || type.as === 'link')) && renderLink(active, id, name, onClick, to) }
            </StyledListItem>

          )}

        </StyledList>

      )}

    </StyledCollapse>
  )
}

const StyledCollapse = styled.div`
  align-items: center;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  display: ${props => props.visible ? 'block' : 'none'};
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
  background-color: #fff;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;

  ${MEDIA_QUERY.desktop`
    background-color: initial;
    flex-direction: row;
    margin: ${props => props.direction === 'left' ? 'auto 0' : 'auto 0 auto auto'};
  `}
`

const StyledListItem = styled.li`
  border-top: #F0F2F5 1px solid;
  margin: auto .75rem;
  padding: 1.1em .75rem;

  ${MEDIA_QUERY.desktop`
    border: none;
    padding: initial;
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
  links: object.isRequired,
  visible: bool,
  type: string
}
