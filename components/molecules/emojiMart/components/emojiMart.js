/**
 * EmojiMart
 */

import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { bool, string, func } from 'prop-types'

import { Emoji, Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

import styled from 'styled-components'

export const EmojiMart = ({ closeOnClickOut, placeholderEmoji, onSelect }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  const handleClickAway = event => {
    const domNode = ReactDOM.findDOMNode(node.current)
    if (domNode.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  useEffect(() => {
    if (open && closeOnClickOut) {
      document.addEventListener('mousedown', handleClickAway)
    } else {
      document.removeEventListener('mousedown', handleClickAway)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [open])

  const showEmojis = (em, e) => {
    e.preventDefault()
    setOpen(prev => !prev)
  }

  const pickEmoji = (emoji, e) => {
    e.preventDefault()
    onSelect(emoji.native)
    setOpen(false)
  }

  const StyledEmoji = styled(Emoji)`
    cursor: pointer;
  `

  return (
    <div>
      <StyledEmoji onClick={showEmojis} emoji={{ id: placeholderEmoji, skin: 1 }} size={32} />
      {open && (
        <Picker
          emoji='point_up_2'
          include={['foods', 'people', 'recent', 'nature']}
          onClick={pickEmoji}
          set='google'
          sheetSize={32}
          title='Pick your emoji...'
          ref={node}
        />
      )}
    </div>
  )
}

EmojiMart.propTypes = {
  closeOnClickOut: bool,
  placeholderEmoji: string,
  onSelect: func
}

EmojiMart.defaultProps = {
  closeOnClickOut: true,
  placeholderEmoji: 'smiley'
}
