/**
 * Navbar
 */

// React
import React, { Component, Fragment } from 'react'
import { object, string } from 'prop-types'

// UI
import { Brand, Links, Toggler } from './components'

// Style
import styled, { withTheme } from 'styled-components'

export const Navbar = withTheme(
  class Navbar extends Component {
    constructor (props) {
      super(props)

      this.state = {
        visible: false
      }
    }

    static propTypes = {
      brand: string,
      links: object,
      type: string
    }

    static defaultProps = {
      brand: '',
      links: {}
    }

    handleMenuClick = () => {
      this.setState({ visible: !this.state.visible })
    }

    render () {
      const { brand, links, type } = this.props
      const { visible } = this.state

      return (
        <Fragment>

          <StyledNav>

            {brand && <Brand brand={brand} />}

            <Toggler handleMenuClick={this.handleMenuClick} visible={visible} />

            {links && <Links links={links} type={type} visible={visible} />}

          </StyledNav>

          <StyledOverlay hidden={!visible} />

        </Fragment>
      )
    }
  }
)

// Style
const StyledNav = styled.nav`
  align-items: center;
  background-color: ${props => props.theme.NAVBAR.background};
  border-bottom: 1px solid #eef1f4;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  position: relative;
  z-index: 200;

  @media (min-width: 768px) {
    flex-flow: row nowrap;
    height: ${props => props.theme.NAVBAR.height};
    justify-content: flex-start;
    margin-bottom: 2rem;
    padding: 0 3rem;
  }
`

const StyledOverlay = styled.div`
  background-color: rgba(255, 255, 255, .85);
  bottom: 0;
  cursor: pointer;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition-property: width;
  transition-duration: 0.2s;
  width: 100%;
  z-index: 99;
`
