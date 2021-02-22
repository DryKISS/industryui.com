// Next
import dynamic from 'next/dynamic';
var RichTextInput = dynamic(function () {
  return import('./richEditor').then(function (mod) {
    return mod.RichTextInput;
  });
}, {
  ssr: false
});
export { RichTextInput };
//# sourceMappingURL=index.js.map