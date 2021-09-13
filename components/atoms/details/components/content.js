/**
 * Components - Atoms - Details - Content
 */

// React
import React from 'react'
import { bool, node, number, object } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

const DetailsContent = ({
  animationTime,
  children,
  contentRef,
  fitParentHeight,
  onContentSizeChanged,
  isOpen,
  maxHeight,
  mounted
}) => {
  return (
    <Wrapper
      animationDuration={animationTime}
      fitParentHeight={fitParentHeight}
      maxHeight={maxHeight}
      isOpen={isOpen}
    >
      <Content fitParentHeight={fitParentHeight} isOpen={isOpen} ref={contentRef}>
        {mounted && children}
      </Content>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-height: ${({ fitParentHeight, maxHeight, isOpen }) =>
    fitParentHeight ? 'unset' : isOpen ? maxHeight + 'px' : '0px'};
  overflow: hidden;
  ${({ fitParentHeight, isOpen }) =>
    fitParentHeight &&
    css`
      height: ${!isOpen ? '0px' : 'calc(100% - 3.5rem)'};
    `}
  transition-duration: ${({ animationDuration }) => (animationDuration ?? 300) + 'ms'};
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`

const Content = styled.div`
  padding: 0.5rem;
  ${({ fitParentHeight, isOpen }) =>
    fitParentHeight &&
    css`
      height: ${!isOpen ? '0px' : '100%'};
    `}
`

DetailsContent.propTypes = {
  animationTime: number,
  children: node.isRequired,
  contentRef: object,
  fitParentHeight: bool,
  isOpen: bool,
  maxHeight: number,
  mounted: bool
}

DetailsContent.defaultProps = {
  animationTime: 100,
  isOpen: false
}

export default DetailsContent
