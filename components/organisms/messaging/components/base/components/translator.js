import { useState, useRef } from 'react'
import { EditorState, ContentState, convertFromRaw } from 'draft-js'

// Style
import styled from 'styled-components'

// IUI
import Loadingspinner from './loadingSpinner'
import TranslationService from '../../../../../services/translation/translation'

const Translator = ({ content, setEditorState }) => {
  const translated = useRef(null)
  const [translationError, setTranslationError] = useState(false)
  const [showingTranslation, setShowingTranslation] = useState(false)
  const [loadingTranslation, setloadingTranslation] = useState(false)

  const toggleTranslation = async () => {
    setTranslationError(false)
    if (!showingTranslation) {
      if (!translated.current) {
        setloadingTranslation(true)
        let plainText
        if (content.blocks) {
          plainText = content.blocks
            .map((block) => (!block.text.trim() && '\n') || block.text)
            .join('\n')
        } else {
          plainText = content
        }
        try {
          const { response } = await TranslationService(plainText)
          translated.current = EditorState.createWithContent(ContentState.createFromText(response))
          setEditorState(translated.current)
          setShowingTranslation(true)
          setloadingTranslation(false)
        } catch (e) {
          setTranslationError(true)
          setShowingTranslation(false)
          setloadingTranslation(false)
        }
      } else {
        setEditorState(translated.current)
        setShowingTranslation(true)
      }
    } else {
      setEditorState(
        EditorState.createWithContent(
          content.blocks ? convertFromRaw(content) : ContentState.createFromText(content)
        )
      )
      setShowingTranslation(false)
    }
  }

  return (
    <TranslatorWrapper onClick={toggleTranslation}>
      {translationError
        ? 'Translation Error'
        : showingTranslation
        ? 'See Original'
        : 'See Translation'}
      {loadingTranslation && <Loadingspinner />}
    </TranslatorWrapper>
  )
}

const TranslatorWrapper = styled.div`
  align-items: center;
  color: ${({ theme: { MESSAGING } }) => MESSAGING.translatorTextColour};
  cursor: pointer;
  display: flex;
  font-size: 0.625rem;
  font-weight: 600;
  width: fit-content;
`
export default Translator
