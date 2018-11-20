/**
 * Hero
 */
import css from 'styled-jsx/css'
import { configuration } from '../../atoms/grid/constants'

export default css`
  .Hero {
    background-color: #0679d8;
    background-position: center;
    background-size: cover;
    color: #fff;
  }

  :global(.Hero-cta) {
    margin: 0 auto;
    max-width: 300px;
    text-align: center;
    width: 100%;
  }

  .Hero-title {
    font-size: 2.25rem;
    font-weight: 600;
    line-height: 2.75rem;
    margin-bottom: 2rem;
  }

  .Hero-strapline {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.25rem;
    margin: 0 0 2rem 0;
  }

  .Hero-image {
    text-align: center;
  }

  .Hero-dog {
    margin-top: 1rem;
    margin-bottom: -23px;
    width: 60%;
  }

  .Hero-curve {
    margin-bottom: -.4rem;
    position: relative;
  }

  // MD
  @media (min-width: ${configuration.breakpoints.md}px) {
    :global(.Hero-cta) {
      margin: 0;
      text-align: initial;
    }

    .Hero-title {
      font-size: 5rem;
      line-height: 5rem;
    }

    .Hero-dog {
      margin-bottom: -36px;
      width: initial;
    }

    .Hero-curve {
      margin-bottom: -.5rem;
    }
  }
  `
