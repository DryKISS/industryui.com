/**
 * Draft JS
 */

// React
import React, { useState } from 'react'

// DraftJS
import DraftJs from '../draftJs'
import Editor from '@draft-js-plugins/editor'

// React Hook Form
import { useForm } from 'react-hook-form'

// UI
import Button from '../../../../atoms/button/button/button'
import Form from '../../../../form/form/form'
import Readme from '../README.md'
import styled from 'styled-components'

import { EditorState, ContentState } from 'draft-js'
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin'
import MentionComponent from '../../../messaging/components/mention/mentionComponent'
import createLinkifyPlugin from '@draft-js-plugins/linkify'
import LinkPluginComponent from '../plugins/components/linkPluginComponent'
import createHashtagPlugin from '../plugins/hashtag/hashtagPlugin'

export default {
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Editor'
}

export const Main = () => {
  const onSubmit = (data) => {
    console.info(data)
  }

  const { control, handleSubmit, setValue } = useForm()
  const name = 'draftjs'

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <DraftJs control={control} name={name} setValue={setValue} />
      <Button content="Submit" type="submit" />
    </Form>
  )
}

const mentionSuggestions = [
  {
    name: 'Ali',
    title: 'Randomly Generated User',
    avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg'
  },
  {
    name: 'Alireza',
    title: 'Randomly Generated User',
    avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400'
  },
  {
    name: 'Ian',
    title: 'Randomly Generated User',
    avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400'
  },
  {
    name: 'Kristian',
    title: 'Randomly Generated User',
    avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400'
  },
  {
    name: 'Majid',
    title: 'Randomly Generated User',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg'
  },
  {
    name: 'Mohsen',
    title: 'Randomly Generated User',
    avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400'
  },
  {
    name: 'Naser',
    title: 'Randomly Generated User',
    avatar: 'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png'
  }
]

export const hashtagPlugin = createHashtagPlugin()

const mentionPlugin = createMentionPlugin({
  mentionComponent: (mentionProps) => <MentionComponent mentionProps={mentionProps} />
})

const MentionSuggestions = mentionPlugin.MentionSuggestions

const linkifyPlugin = createLinkifyPlugin({
  target: '_blank',
  component: (props) => <LinkPluginComponent {...props} />
})

export const Plugins = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText(''))
  )
  const [suggestions, setSuggestions] = useState(mentionSuggestions)

  const handleSearchChange = ({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentionSuggestions))
  }

  const handleAddMention = (e) => console.log(e)

  return (
    <>
      <p>use # , @ and a link to test the plugins</p>
      <Wrapper>
        <MentionSuggestions
          onAddMention={handleAddMention}
          onSearchChange={handleSearchChange}
          suggestions={suggestions}
        />

        <Editor
          plugins={[hashtagPlugin, linkifyPlugin, mentionPlugin]}
          onChange={(e) => setEditorState(e)}
          editorState={editorState}
        />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  background-color: white;
`
