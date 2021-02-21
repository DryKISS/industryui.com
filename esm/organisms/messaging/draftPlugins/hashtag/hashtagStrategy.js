import { extractHashtagsWithIndices } from './utils';
export default (function (contentBlock, callback) {
  var text = contentBlock.getText();
  var results = extractHashtagsWithIndices(text);
  results.forEach(function (hashtag) {
    callback(hashtag.indices[0], hashtag.indices[1]);
  });
});
//# sourceMappingURL=hashtagStrategy.js.map