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
    }

    renderButton = (id, name, to, type) => {
      return (
        <Link to={to} type={type}>
          <Button id={id} type={type.as}>{name}</Button>
        </Link>
      )
    }

    renderLink = (active, id, name, to, type) => {
      return (
        <Link to={to} passHref type={type} >
          <StyledLink id={id} context={type.context} >{name}</StyledLink>
        </Link>
      )
    }

    renderLinks = () => {

    }

    renderGroup = () => {

    }

    render () {
      const { links, visible } = this.props

      return (
        <StyledCollapse visible={visible}>

          {Object.entries(links).map(([direction, links]) =>

            <StyledList direction={direction} key={direction}>

              {links.map(({ active, id, name, to, type }) =>

                <StyledListItem key={id}>
                  { ( type.as === 'button') && this.renderButton(id, name, to, type) }
                  { ( type.as === 'link') && this.renderLink(active, id, name, to, type) }
                </StyledListItem>

              )}

            </StyledList>

          )}

        </StyledCollapse>
      )
    }
  }
)

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
  background-color: #FFFFFF;
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
  margin: 1.1em .75rem;
  
`

const StyledLink = styled.a`
  color: ${props => props.theme.NAVBAR.contextColour[props.context]};
  display: block;
  font-weight: bold;
  line-height: 1.5;
  /* padding: 1rem 0; */
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.NAVBAR.colourActive};
  }

  @media (min-width: 768px) {
    line-height: 1.5;
    /* padding: 0 .75rem; */
  }
`





