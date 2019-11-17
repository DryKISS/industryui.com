/**
 * Global style
 */

// Style
import { createGlobalStyle } from 'styled-components'

// UI
import { MEDIA_QUERY } from '../../'

export const ThemeStyle = createGlobalStyle`
  .Form-feedback {
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #dc3545;
  }

  .Form-validated .Form-control:valid~.Form-feedback {
    display: none;
  }

  .Form-validated .Form-control:invalid {
    border-color: #dc3545;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-white {
    color: #fff;
  }

  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }

  .d-none {
    display: none;
  }

  ${MEDIA_QUERY.desktop`
    .d-md-block {
      display: block;
    }
  `}

  #iubenda_policy .iub_content {
    padding: 0 !important;
  }

  #iubenda_policy.iubenda_fluid_policy .iub_container {
    margin: 0 !important;
  }

  /* Normalise */
  html {
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    color: #6b7a87;
    font-family: ${props => props.theme.TYPOGRAPHY.font};
    margin: 0;
    position: relative;
  }

  /* Headings */
  ${({ theme }) => {
    let style = ''
    Object.keys(theme.HEADINGS).forEach(el => {
      style += `
        ${el} {
          ${theme.HEADINGS[el].font ? `font-family: ${theme.HEADINGS[el].font};` : ''}
          ${theme.HEADINGS[el].fontSize ? `font-size: ${theme.HEADINGS[el].fontSize};` : ''}
          ${theme.HEADINGS[el].uppercase === true ? 'text-transform: uppercase;' : ''}
          ${theme.HEADINGS[el].weight ? `font-weight: ${theme.HEADINGS[el].weight};` : ''}
        }
      `
    })
    return style
  }}

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
    color: #0679d8;
    text-decoration: none;

    &:hover {
      color: #e8095e;
    }
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  input {
    overflow: visible;
  }

  select {
    text-transform: none;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    border: 0;
    margin-bottom: 1rem;
    padding: 0.5rem 0 0;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
  }

  ::-webkit-file-upload-button {
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
  `
