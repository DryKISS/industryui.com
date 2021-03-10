import regexes from './hashtagRegex'

export const extractHashtagsWithIndices = (text) => {
  if (!text || !text.match(regexes.hashSigns)) {
    return []
  }
  const tags = []
  function replacer(match, before, hash, hashText, offset, chunk) {
    const after = chunk.slice(offset + match.length)
    if (after.match(regexes.endHashtagMatch)) {
      return ''
    }
    const startPosition = offset + before.length
    const endPosition = startPosition + hashText.length + 1
    tags.push({
      hashtag: hashText,
      indices: [startPosition, endPosition]
    })
    return ''
  }
  text.replace(regexes.validHashtag, replacer)
  return tags
}
