import regexes from './hashtagRegex';
export var extractHashtagsWithIndices = function extractHashtagsWithIndices(text) {
  if (!text || !text.match(regexes.hashSigns)) {
    return [];
  }

  var tags = [];

  function replacer(match, before, hash, hashText, offset, chunk) {
    var after = chunk.slice(offset + match.length);

    if (after.match(regexes.endHashtagMatch)) {
      return '';
    }

    var startPosition = offset + before.length;
    var endPosition = startPosition + hashText.length + 1;
    tags.push({
      hashtag: hashText,
      indices: [startPosition, endPosition]
    });
    return '';
  }

  text.replace(regexes.validHashtag, replacer);
  return tags;
};
//# sourceMappingURL=index.js.map