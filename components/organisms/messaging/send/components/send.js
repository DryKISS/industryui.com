/**
 * Messaging/Send
 * Provides a messaging send box, attach, emoji and send button.
 *
 * @features
 * - Dropdown to select audience to send too.
 * - Attach file
 * - Emoji selection
 * - Send button
 * - Write message input
 */

// React
import React, { useState } from 'react'
import { number, func, string } from 'prop-types'

// UI
import { Button, EmojiMart, Form, Icon, Textarea } from '../../../../'

// Style
import styled from 'styled-components'

export const MessagingSend = ({ handleChange, handleSelect, handleSubmit, maxLength, message }) => {
  const [open, setOpen] = useState(false)

  const handleAttach = () => {
    console.log('handleAttach')
  }

  const handleOpenPicker = () => {
    setOpen(false)
  }

  return (
    <>
      {open && (
        <StyledPickerContainer>
          <EmojiMart handleOpenPicker={handleOpenPicker} handleSelect={handleSelect} open={open} />
        </StyledPickerContainer>
      )}

      <StyledContainer>
        <StyledForm submit={handleSubmit}>
          <StyledTextarea
            change={handleChange}
            id='message'
            maxLength={maxLength}
            placeholder='Write message'
            rows={1}
            value={message}
          />

          <StyledElements>
            <StyledIcon fixedWidth={false} icon='paperclip' onClick={handleAttach} size='2x' />
            <StyledIcon fixedWidth={false} icon='smile' onClick={() => setOpen(!open)} size='2x' />
            <Button content='Send' context='info' size='md' type='submit' />
          </StyledElements>
        </StyledForm>
      </StyledContainer>
    </>
  )
}

const StyledContainer = styled.div`
  background-color: #fff;
  border-top: 1px solid #c0c0c0;
  color: #c0c0c0;
  padding: 1rem;
`

const StyledPickerContainer = styled(StyledContainer)`
  padding: 0;
`

const StyledForm = styled(Form)`
  display: flex;
  margin: 0;
`

const StyledTextarea = styled(Textarea)`
  border: none;
  resize: none;

  &:focus {
    border-color: initial;
    box-shadow: initial;
  }
`
const StyledElements = styled.div`
  align-items: center;
  display: flex;
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
  margin-right: 1rem;
`

MessagingSend.propTypes = {
  handleChange: func.isRequired,
  handleSubmit: func.isRequired,
  maxLength: number,
  message: string.isRequired
}

MessagingSend.defaultProps = {
  maxLength: 320
}
