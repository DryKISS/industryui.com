/**
 * Navbar links
 */

// React
import React, { Component } from 'react'
import { bool, object, string } from 'prop-types'

// UI
import { Button, Link } from '../../../'

// Style
import styled, { withTheme } from 'styled-components'

export const Links = withTheme(
  class Links extends Component {
    static propTypes = {
      links: object.isRequired,
      visible: bool,
      type: string
    }

    renderButton = (id, name, to, type) => {
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

    renderLink = (active, id, name, to) => {
      const { type } = this.props

      if (type && (!active || active !== type)) {
        return
      }

      return (
        <Link to={to} passHref>
          <StyledLink id={id}>{name}</StyledLink>
        </Link>
      )
    }

    render () {
      const { links, visible } = this.props

      return (
        <StyledCollapse visible={visible}>

          {Object.entries(links).map(([direction, link]) =>

            <StyledList direction={direction} key={direction}>

              {link.map(({ active, id, name, to, type }) =>

                <StyledListItem key={id}>
                  { (type && type.as === 'button') && this.renderButton(id, name, to, type) }
                  { (!type || type.as === 'link') && this.renderLink(active, id, name, to) }
                </StyledListItem>

              )}

            </StyledList>

          )}

        </StyledCollapse>
      )
    }
  }
)

// Style
const StyledCollapse = styled.div`
  align-items: center;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  display: ${props => props.visible ? 'block' : 'none'};
  flex-basis: 100%;
  flex-grow: 1;

  @media (min-width: 768px) {
    align-items: center;
    border: none;
    display: flex;
    flex-basis: auto;
  }
`

const StyledList = styled.ul`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;

  @media (min-width: 768px) {
    background-color: initial;
    flex-direction: row;
    margin: ${props => props.direction === 'left' ? 'auto 0' : 'auto 0 auto auto'};
  }
`

const StyledListItem = styled.li`
  border-top: #F0F2F5 1px solid;
  margin: auto .75rem;
  padding: 1.1em .75rem;

  @media (min-width: 768px) {
    border: none;
    padding: initial;
  }
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

  @media (min-width: 768px) {
    line-height: 1.5;
  }
`

const StyledButton = styled(Button)`
  @media (max-width: 768px) {
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
  }
`
