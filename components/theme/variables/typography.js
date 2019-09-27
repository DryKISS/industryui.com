/**
 * Typography
 * Font, line-height, and color for body text, headings, and more.
 *
 * 5C6F7F
 */
const fontSizeBase = '1rem;'
const fontSizeLg = '($fontSizeBase * 1.25);'
const fontSizeSm = '($fontSizeBase * .875);'

const fonts = {
  sans: 'sans-serif'
}

const font = fonts.sans
const fontFamilies = fonts
const monospace = '"SF Mono", "Roboto Mono", Menlo, monospace'

const fontSizes = [
  12,
  14,
  16,
  20,
  24,
  32,
  48,
  64,
  72,
  96
]

const weights = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900
]

export const TYPOGRAPHY = {
  fontSizeBase,
  fontSizeLg,
  fontSizeSm,
  font,
  fontFamilies,
  fontSizes,
  monospace,
  weights
}

// $font-family-sans-serif:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
// $font-family-monospace:   SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default;
// $font-family-base:         font-family-sans-serif !default;

// // stylelint-enable value-keyword-case

// $font-size-base:              1rem !default; // Assumes the browser default, typically `16px`
// $font-size-lg:                ($font-size-base * 1.25) !default;
// $font-size-sm:                ($font-size-base * .875) !default;

// $font-weight-lighter:         lighter !default;
// $font-weight-light:           300 !default;
// $font-weight-normal:          400 !default;
// $font-weight-bold:            700 !default;
// $font-weight-bolder:          bolder !default;

// $font-weight-base:            $font-weight-normal !default;
// $line-height-base:            1.5 !default;

// $h1-font-size:                $font-size-base * 2.5 !default;
// $h2-font-size:                $font-size-base * 2 !default;
// $h3-font-size:                $font-size-base * 1.75 !default;
// $h4-font-size:                $font-size-base * 1.5 !default;
// $h5-font-size:                $font-size-base * 1.25 !default;
// $h6-font-size:                $font-size-base !default;

// $headings-margin-bottom:      ($spacer / 2) !default;
// $headings-font-family:        inherit !default;
// $headings-font-weight:        500 !default;
// $headings-line-height:        1.2 !default;
// $headings-color:              inherit !default;

// $display1-size:               6rem !default;
// $display2-size:               5.5rem !default;
// $display3-size:               4.5rem !default;
// $display4-size:               3.5rem !default;

// $display1-weight:             300 !default;
// $display2-weight:             300 !default;
// $display3-weight:             300 !default;
// $display4-weight:             300 !default;
// $display-line-height:         $headings-line-height !default;

// $lead-font-size:              ($font-size-base * 1.25) !default;
// $lead-font-weight:            300 !default;

// $small-font-size:             80% !default;

// $text-muted:                  $gray-600 !default;

// $blockquote-small-color:      $gray-600 !default;
// $blockquote-small-font-size:  $small-font-size !default;
// $blockquote-font-size:        ($font-size-base * 1.25) !default;

// $hr-border-color:             rgba($black, .1) !default;
// $hr-border-width:             $border-width !default;

// $mark-padding:                .2em !default;

// $dt-font-weight:              $font-weight-bold !default;

// $kbd-box-shadow:              inset 0 -.1rem 0 rgba($black, .25) !default;
// $nested-kbd-font-weight:      $font-weight-bold !default;

// $list-inline-padding:         .5rem !default;

// $mark-bg:                     #fcf8e3 !default;

// $hr-margin-y:                 $spacer !default;
