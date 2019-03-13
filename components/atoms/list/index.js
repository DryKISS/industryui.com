/**
 * List
 */

// React
import { bool, node, object, string } from 'prop-types'

// UI
import { Item } from './components'

// Style
import styled from 'styled-components'

export const List = ({ children, className, inline, style, unstyled }) => {
  const renderListItems = () => {
    return React.Children.map(children, (child) => {
      return <ListItem inline={inline} {...child.props} />
    })
  }

  return (
    <StyledList
      className={className}
      inline={inline}
      role='list'
      style={style}
      unstyled={unstyled}
    >
      {renderListItems()}
    </StyledList>
  )
}

export const ListItem = Item

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

List.propTypes = {
  children: node.isRequired,
  className: string,
  inline: bool,
  style: object,
  unstyled: bool
}

List.defaultProps = {
  className: '',
  inline: false,
  unstyled: false
}
