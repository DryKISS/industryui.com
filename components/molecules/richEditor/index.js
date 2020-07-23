import {Editor, EditorState} from 'draft-js';
import { useState } from 'react';

export const RichEditor = () => {

  const [editor, setEditor] = useState(EditorState.createEmpty());


  const onChange = (evt) => setEditor(evt.target.value);

  render() {
    return (
      <Editor editorState={editor} onChange={this.onChange} />
    );
  }
}
