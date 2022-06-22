/**
 * Components - Molecules - Components - TreeItem
 */

// React
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { array, number, object } from 'prop-types'

// UI
import SubTree from './subTree'
import TreeTitle from './treeTitle'

// Style
import styled, { css } from 'styled-components'

const TreeItem = ({ data, depthLevel, items, mainItemActive, onClick, subItemActive, parent }) => {
  const [isSubTree, setSubTree] = useState(items?.key === mainItemActive)
  const [isSubTitleActive, setSubTitleActive] = useState(items?.key === subItemActive)

  let ref = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (isSubTree && ref.current && !ref.current.contains(event?.target)) {
        setSubTree(!isSubTree)
      }
    }
    const element = document.querySelector('.tree-component')
    if (element) {
      element.addEventListener('click', handler)
      element.addEventListener('touchstart', handler)
    }
    return () => {
      if (element) {
        element.addEventListener('click', handler)
        element.addEventListener('touchstart', handler)
      }
    }
  }, [isSubTree])

  const onClickItem = (data) => {
    setSubTree(true)
  }

  return (
    <Wrapper
      ref={ref}
      onClick={() => onClickItem(items)}
      depthLevel={depthLevel}
      isChild={!!items?.child?.length}
    >
      {items.child ? (
        <>
          <Button
            aria-haspopup="menu"
            aria-expanded={isSubTree ? 'true' : 'false'}
            className={isSubTree ? 'activeItem' : ''}
            onClick={() => {
              onClick({ ...items, parent })
              setSubTree(!isSubTree)
            }}
          >
            <TreeTitle isSubTreeOpen={isSubTree} {...items} />
          </Button>
          <SubTree
            subItemActive={subItemActive}
            depthLevel={depthLevel}
            isSubTree={isSubTree}
            child={items.child}
            parent={items.key}
            onClick={onClick}
          />
        </>
      ) : (
        <Title
          className={`${isSubTree ? 'activeItem' : ''} ${isSubTitleActive ? 'subActive ' : ''}`}
          onClick={() => {
            if (subItemActive !== items.key) {
              setTimeout(() => {
                const elements = document.querySelectorAll('.subActive')
                elements.forEach((element) => {
                  element.classList.remove('subActive')
                })
              }, 0)
            }
            setSubTitleActive(!subItemActive)

            onClick({ ...items, parent: parent })
          }}
        >
          <span id={items?.key} className={`${isSubTitleActive ? 'subActive ' : ''}`}>{`${
            items.title
          } ${items.count > 0 ? `(${items.count})` : '(0)'}`}</span>
        </Title>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.li`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLOUR.lightGray};
  margin-left: ${({ depthLevel }) => (depthLevel === 0 ? '0px' : '50px')};
  margin-top: ${({ depthLevel }) => (depthLevel === 0 ? '15px' : '0px')};
  margin-bottom: ${({ depthLevel }) => (depthLevel === 0 ? '0px' : '10px')};

  ${({ depthLevel, isChild }) =>
    !isChild &&
    depthLevel === 0 &&
    css`
      margin-left: 22px;
    `};
  .activeItem,
  .subActive {
    color: ${({ theme }) => theme.COLOUR.primary};

    &:before {
      background-color: ${({ theme }) => theme.COLOUR.primary} !important;
    }
  }

  & a {
    text-align: left;
    padding: 0.7rem 1rem;
  }
`

const Button = styled.button`
  color: inherit;
  font-size: inherit;
  border: none;
  background-color: transparent;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.COLOUR.primary};
    text-decoration: underline;
  }
`

const Title = styled.strong`
  display: block;
  font-size: inherit;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    left: -15px;
    top: 5px;
    background-color: ${({ theme }) => theme.COLOUR.lightGray};
    border-radius: 50% 50%;
  }
  &:hover {
    color: ${({ theme }) => theme.COLOUR.primary};
  }
`

TreeItem.propTypes = {
  data: object,
  depthLevel: number.isRequired,
  items: array.isRequired
}

export default TreeItem
