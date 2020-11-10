import React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'

export default function Hashtag (props) {
  const {
    theme = {},
    className,
    decoratedText,
    dir,
    entityKey,
    getEditorState,
    offsetKey,
    setEditorState,
    contentState,
    blockKey,
    ...otherProps
  } = props
  console.log(props)
  const combinedClassName = clsx(theme.hashtag, className)
  return <StyledHashtag {...otherProps} className={combinedClassName} />
}
const StyledHashtag = styled.span`
  color: rgb(30, 167, 253);
  cursor: pointer;
`
