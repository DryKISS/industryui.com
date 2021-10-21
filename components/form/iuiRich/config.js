// React
import React from 'react'

// Style
import styled, { css } from 'styled-components'
import DoubleQuoteIcon from '../../icons/components/doubleQuote'
import UnderlineIcon from '../../icons/components/underline'
import CodeBlockIcon from '../../icons/components/codeBlock'

const StyledHTag = styled.span`
  color: ${({ theme }) => theme.RICH_TEXT_EDITOR.formatButtonsColour};
  font-weight: bold;
  font-size: ${({ size = 1 }) => `${size}rem`};
`

export const BLOCK_TYPES = [
  { label: <StyledHTag size={2}>H1</StyledHTag>, style: 'header-one' },
  { label: <StyledHTag size={1.75}>H2</StyledHTag>, style: 'header-two' },
  { label: <StyledHTag size={1.5}>H3</StyledHTag>, style: 'header-three' },
  { label: <StyledHTag size={1.25}>H4</StyledHTag>, style: 'header-four' },
  { label: <StyledHTag size={1.1}>H5</StyledHTag>, style: 'header-five' },
  { label: <StyledHTag size={1}>H6</StyledHTag>, style: 'header-six' },

  { label: <DoubleQuoteIcon />, style: 'blockquote' },
  { label: <StyledHTag size={1}>UL</StyledHTag>, style: 'unordered-list-item' },
  { label: <StyledHTag size={1}>OL</StyledHTag>, style: 'ordered-list-item' },
  { label: <CodeBlockIcon />, style: 'code-block' }
]

export const INLINE_STYLES = [
  { label: <StyledHTag size={1}>Bold</StyledHTag>, style: 'BOLD' },
  { label: <StyledHTag size={1}>Italic</StyledHTag>, style: 'ITALIC' },
  { label: <UnderlineIcon />, style: 'UNDERLINE' }
]

export const BlockStyleControls = (props) => {
  const { editorState } = props
  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  )
}

export const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type, index) => (
        <StyleButton
          key={index}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  )
}

export const styleMap = {
  CODE: {
    backgroundColor: 'white',
    fontFamily: '"Open Sans", sans-serif, "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 1
  }
}

export const getBlockStyle = (block) => {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote'
    default:
      return null
  }
}

const StyleButton = ({ active, label, onToggle, style }) => {
  const handleToggle = (e) => {
    e.preventDefault()
    onToggle(style)
  }

  return (
    <StyledRichButton active={active} onMouseDown={handleToggle}>
      {label}
    </StyledRichButton>
  )
}

const StyledRichButton = styled.span`
  cursor: pointer;

  padding: 0 0.5rem;
  display: inline-block;
  ${({ active }) =>
    active &&
    css`
      background: ${({ theme }) => theme.RICH_TEXT_EDITOR.selectedButtonBackgroundColour};
      border-radius: 6px;
      span {
        color: ${({ theme }) => theme.RICH_TEXT_EDITOR.selectedButtonColour};
      }
    `}
`
