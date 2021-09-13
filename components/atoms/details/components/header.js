/**
 * Components - Atoms - Details - Components - Header
 */

// React
import React from 'react'
import { bool, func, node, number, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import DetailsActions from './actions'
import DetailsIcon from './icon'
import Text from '../../text/text'
import THEME_SIZE from '../../../constants/size'

const DetailsHeader = ({
  animationTime,
  children,
  content,
  context,
  handleOpenClose,
  headerContext,
  iconComponent,
  isOpen,
  title,
  toolbar
}) => {
  return (
    <Header context={headerContext} onClick={handleOpenClose}>
      <Content>
        {(content || children) && (
          <DetailsIcon
            animationDuration={animationTime}
            iconComponent={iconComponent}
            isOpen={isOpen}
          />
        )}

        <Text size={THEME_SIZE.MD} context={context} content={title} />
      </Content>

      <DetailsActions toolbar={toolbar} />
    </Header>
  )
}

const Header = styled.div`
  align-items: center;
  background-color: ${({ theme, context }) =>
    theme.COLOUR[context] || theme.DETAILS.header.background};
  cursor: pointer;
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  padding: 0 1rem;
`

const Content = styled.div`
  display: flex;
`

DetailsHeader.propTypes = {
  animationTime: number,
  children: node,
  content: node,
  context: string,
  handleOpenClose: func.isRequired,
  iconComponent: node,
  isOpen: bool,
  title: string.isRequired
}

DetailsHeader.defaultProps = {
  animationTime: 100,
  context: 'dark',
  isOpen: false
}

export default DetailsHeader
