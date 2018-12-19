/**
 * List
 */

// React
import React, { Component } from 'react'
import { bool, node, number, object, oneOfType, string } from 'prop-types'

// UI
import { Item } from './components'
export const ListItem = Item;

// Style
import styled, { withTheme } from 'styled-components'

export const List = withTheme(
  class List extends Component {
    static Item = ''

    static propTypes = {
      children: node.isRequired,
      className: string,
      inline: bool,
      style: object,
      unstyled: bool
    }

    static defaultProps = {
      className: '',
      inline: false,
      unstyled: false
    }

    renderListItems = () => {
      const { children, inline } = this.props

      return React.Children.map(children, (child) => {
        return <ListItem inline={inline} {...child.props} />
      })
    }

    render () {
      const { className, inline, style, unstyled } = this.props

      return (
        <StyledList
          className={className}
          inline={inline}
          role='list'
          style={style}
          unstyled={unstyled}
        >
          {this.renderListItems()}
        </StyledList>
      )
    }
  }
)


// Style
const inlineStyles = `
  align-items: center;
  display: inline-flex;
`

const unstyledStyles = `
  list-style: none;
  padding-left: 0;
`

const StyledList = styled.ul`
  ${props => props.inline ? inlineStyles : ''}
  ${props => props.unstyled ? unstyledStyles : ''}
`
