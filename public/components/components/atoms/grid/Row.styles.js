/**
 * Row
 */
import css from 'styled-jsx/css'
import { configuration } from './constants'

export default css`
  .Row {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-wrap: wrap;
    margin-left: -${configuration.gutterWidth / 2}px;
    margin-right: -${configuration.gutterWidth / 2}px;
  }

  // Medium
  @media (min-width: ${configuration.breakpoints.md}px) {
    .Row {
      margin-left: -${configuration.containerWidths.md[1] / 2}px;
      margin-right: -${configuration.containerWidths.md[1] / 2}px;
    }
  }

  // Large
  @media (min-width: ${configuration.breakpoints.lg}px) {
    .Row {
      margin-left: -${configuration.containerWidths.lg[1] / 2}px;
      margin-right: -${configuration.containerWidths.lg[1] / 2}px;
    }
  }

  // Extra large
  @media (min-width: ${configuration.breakpoints.xl}px) {
    .Row {
      margin-left: -${configuration.containerWidths.xl[1] / 2}px;
      margin-right: -${configuration.containerWidths.xl[1] / 2}px;
    }
  }
  `
