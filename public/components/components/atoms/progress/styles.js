/**
 * Progress
 */

import css from 'styled-jsx/css'

export default css`
  .Progress {
    background-color: #e9ecef;
    border-radius: .25rem;
    display: flex;
    font-size: .75rem;
    height: 1rem;
    margin-top: 1rem;
    overflow: hidden;
    width: 100%;
  }

  .Progress-bar {
    background-color: #0679d8;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    transition: width .6s ease;
    white-space: nowrap;
  }
  `
