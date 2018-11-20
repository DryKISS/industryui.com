/**
 * Dropzone
 */
import css from 'styled-jsx/css'

export default css`
  :global(.Dropzone) {
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    text-align: center;
    width: 100%;
  }

  :global(.Dropzone-disabled) {
    border: 1px solid #00b43c;
  }

  :global(.Dropzone-accept) {
    border: 1px solid black;
  }

  :global(.Dropzone-active) {
    border: 1px solid black;
  }

  .Dropzone-placeholder {
    border: 1px solid #ecf0f3;
    display: flex;
    justify-content: center;
    margin: auto;
  }

  .Dropzone-preview {
    border: 1px solid black;
    height: 100%;
    z-index: 10;
  }

  .Dropzone-image {
    width: 100%;
  }

  .Dropzone-remove {
    cursor: pointer;
  }
  `
