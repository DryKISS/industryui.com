import React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { handleHashtagClick } from './utils/handleHashtagClick'

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
  const combinedClassName = clsx(theme.hashtag, className)

  return (
    <StyledHashtag
      onClick={() => handleHashtagClick(props.decoratedText)}
      {...otherProps}
      className={combinedClassName}
    />
  )
}
const StyledHashtag = styled.span`
  color: ${({ theme: { MESSAGING } }) => MESSAGING.hashtagColour};
  cursor: pointer;
`
