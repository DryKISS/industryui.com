/**
 * Components - Atoms - Details2 - Components - Header
 */

// React
import React from 'react'
import { bool, func, node, number, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { Details2Icon } from './icon'
import { Text } from '../../text/text'
import { THEME_SIZE } from '../../../theme/constants/size'

export const Details2Header = ({
  animationTime,
  children,
  content,
  context,
  handleOpenClose,
  headerContext,
  iconComponent,
  isOpen,
  title
}) => {
  return (
    <Header context={headerContext} onClick={handleOpenClose}>
      <Content>
        {(content || children) && (
          <Details2Icon
            animationDuration={animationTime}
            iconComponent={iconComponent}
            isOpen={isOpen}
          />
        )}

        <Text size={THEME_SIZE.MD} context={context} content={title} />
      </Content>
    </Header>
  )
}

const Header = styled.div`
  align-items: center;
  background-color: ${({ theme, context }) =>
    theme.COLOUR[context] || theme.DETAILS2.header.background};
  cursor: pointer;
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  padding: 0 1rem;
`

const Content = styled.div`
  display: flex;
`

Details2Header.propTypes = {
  animationTime: number,
  children: node,
  content: node,
  context: string,
  handleOpenClose: func.isRequired,
  iconComponent: node,
  isOpen: bool,
  title: string.isRequired
}

Details2Header.defaultProps = {
  animationTime: 100,
  context: 'dark',
  isOpen: false
}
