/**
 * Components - Atoms - Details2 - Components - Header
 */

// React
import { bool, func, node, number, string } from 'prop-types'

// UI
import { Details2Icon, SIZE, Text } from '../../../'

// Style
import styled from 'styled-components'

export const Details2Header = ({
  animationTime,
  children,
  content,
  handleOpenClose,
  headerContext,
  iconComponent,
  isOpen,
  title,
  titleContext
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

        <Text size={SIZE.MD} context={titleContext || 'dark'} content={title} />
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
  handleOpenClose: func.isRequired,
  iconComponent: node,
  isOpen: bool,
  title: string.isRequired
}

Details2Header.defaultProps = {
  animationTime: 100,
  isOpen: false
}
