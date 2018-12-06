/**
 * Navbar links
 */

// React
import React, { Component } from 'react'
import { bool, object, string } from 'prop-types'

// Next
// import getConfig from 'next/config'

// UI
import { Button, Link } from '../../../'

// Style
import styled, { withTheme } from 'styled-components'

// const { TYPE } = getConfig().publicRuntimeConfig

export const Links = withTheme(
  class Links extends Component {
    static propTypes = {
      links: object.isRequired,
      visible: bool,
      type: string
    }

    renderButton = (id, name, to, type) => {
      return (
        <Link to={to}>
          <Button id={id} {...type}>{name}</Button>
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

    renderLinks = () => {

    }

    renderGroup = () => {

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
                  { (!type || type === 'link') && this.renderLink(active, id, name, to) }

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
  background-color: #04D4DC;
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
  margin: auto .75rem;
`

const StyledLink = styled.a`
  color: ${props => props.theme.NAVBAR.colourActive};
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
