/**
 * Column
 *
 * At certian breakpoints the class set will match or extend full width by default
 */
import css from 'styled-jsx/css'
import { configuration } from './constants'

export default css`
  .Column {
    box-sizing: border-box;
    min-height: 1px;
    position: relative;
    padding-left: ${configuration.gutterWidth / 2}px;
    padding-right: ${configuration.gutterWidth / 2}px;
    width: 100%;
  }

  .Column-debug {
    outline: 1px solid red;
  }

  // MD Medium devices (tablets, 768px and up)
  @media (min-width: ${configuration.breakpoints.md}px) {
    .Column {
      padding-left: ${configuration.containerWidths.md[1] / 2}px;
      padding-right: ${configuration.containerWidths.md[1] / 2}px;
    }

    .Column-md-1 { flex: 0 0 8.333333%; max-width: 8.333333% }
    .Column-md-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
    .Column-md-3 { flex: 0 0 25%; max-width: 25%; }
    .Column-md-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
    .Column-md-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
    .Column-md-6 { flex: 0 0 50%; max-width: 50%; }
    .Column-md-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
    .Column-md-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
    .Column-md-9 { flex: 0 0 75%; max-width: 75%; }
    .Column-md-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
    .Column-md-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
    .Column-md-12 { flex: 0 0 100%; max-width: 100%; }
  }

  // LG Large devices (desktops, 992px and up)
  @media (min-width: ${configuration.breakpoints.lg}px) {
    .Column {
      padding-left: ${configuration.containerWidths.lg[1] / 2}px;
      padding-right: ${configuration.containerWidths.lg[1] / 2}px;
    }

    .Column-lg-1 { flex: 0 0 8.333333%; max-width: 8.333333% }
    .Column-lg-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
    .Column-lg-3 { flex: 0 0 25%; max-width: 25%; }
    .Column-lg-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
    .Column-lg-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
    .Column-lg-6 { flex: 0 0 50%; max-width: 50%; }
    .Column-lg-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
    .Column-lg-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
    .Column-lg-9 { flex: 0 0 75%; max-width: 75%; }
    .Column-lg-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
    .Column-lg-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
    .Column-lg-12 { flex: 0 0 100%; max-width: 100%; }
  }

  // XL Extra large devices (large desktops, 1200px and up)
  @media (min-width: ${configuration.breakpoints.xl}px) {
    .Column {
      padding-left: ${configuration.containerWidths.xl[1] / 2}px;
      padding-right: ${configuration.containerWidths.xl[1] / 2}px;
    }

    .Column-xl-1 { flex: 0 0 8.333333%; max-width: 8.333333% }
    .Column-xl-2 { flex: 0 0 16.666667%; max-width: 16.666667%; }
    .Column-xl-3 { flex: 0 0 25%; max-width: 25%; }
    .Column-xl-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
    .Column-xl-5 { flex: 0 0 41.666667%; max-width: 41.666667%; }
    .Column-xl-6 { flex: 0 0 50%; max-width: 50%; }
    .Column-xl-7 { flex: 0 0 58.333333%; max-width: 58.333333%; }
    .Column-xl-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
    .Column-xl-9 { flex: 0 0 75%; max-width: 75%; }
    .Column-xl-10 { flex: 0 0 83.333333%; max-width: 83.333333%; }
    .Column-xl-11 { flex: 0 0 91.666667%; max-width: 91.666667%; }
    .Column-xl-12 { flex: 0 0 100%; max-width: 100%; }
  }
  `
