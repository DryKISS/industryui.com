/**
 * Components - Formatters - Details Text
 */

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
