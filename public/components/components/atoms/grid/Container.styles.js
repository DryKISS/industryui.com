/**
 * Container
 */
import css from 'styled-jsx/css'
import { configuration } from './constants'

export default css`
  .Container {
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${configuration.gutterWidth / 2}px;
    padding-right: ${configuration.gutterWidth / 2}px;
    position: relative;
  }

  // Medium
  @media (min-width: ${configuration.breakpoints.md}px) {
    .Container {
      max-width: ${configuration.containerWidths.md[0]}px;
    }
  }

  // Large
  @media (min-width: ${configuration.breakpoints.lg}px) {
    .Container {
      max-width: ${configuration.containerWidths.lg[0]}px;
    }
  }

  // Extra large
  @media (min-width: ${configuration.breakpoints.xl}px) {
    .Container {
      max-width: ${configuration.containerWidths.xl[0]}px;
    }
  }

  .Container-fluid {
    width: 100%;
  }
  `
