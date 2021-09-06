/**
 * Components - Theme - Global style
 */

// Style
import { createGlobalStyle } from 'styled-components'

// UI
import MEDIA_QUERY from '../../utils/mediaQuery/query'

const ThemeStyle = createGlobalStyle`
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

  .d-md-block {
    ${MEDIA_QUERY.desktop`
      display: block;
    `}
  }

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
    box-sizing: border-box;
  }

  body {
    color: ${(props) => props.theme.THEME_TYPOGRAPHY.fontColour};
    font-family: ${(props) => props.theme.THEME_TYPOGRAPHY.font}, sans-serif;
    margin: 0;
    position: relative;
  }

  .fc-event {
    cursor: pointer;
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
  select,textarea {
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

export default ThemeStyle
