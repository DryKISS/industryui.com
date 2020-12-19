/**
 * Components - Formatters - Details Text
 */

// React
import { string } from 'prop-types'

// UI
import { Space, Text } from '../index'

export const DetailsText = ({ content, text }) => {
  return (
    <>
      <Space marginBottom='sm' />
      <Text content={content} context='dark' size='sm' />
      <Text>{text}</Text>
    </>
  )
}

DetailsText.propTypes = {
  content: string.isRequired,
  text: string.isRequired
}
