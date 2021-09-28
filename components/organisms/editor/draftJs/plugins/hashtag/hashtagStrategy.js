import extractHashtagsWithIndices from './utils/extractHashtagsWithIndices'

export default (contentBlock, callback) => {
  const text = contentBlock.getText()
  const results = extractHashtagsWithIndices(text)

  results.forEach((hashtag) => {
    callback(hashtag.indices[0], hashtag.indices[1])
  })
}
