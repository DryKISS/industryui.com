import styled, { css } from 'styled-components'
import { IUIAudioPlayer } from 'components'

export const MessagingAudioPlayer = props => {
  return <IUIAudioPlayer {...props} />
}

export const AudioWrapper = styled.div`
  width: 100%;
  ${({ hidden }) =>
    hidden === true &&
    css`
      display: none;
    `}
  ${({ preview }) =>
    preview &&
    css`
      background-color: ${({ theme }) => theme.COLOUR.light};
      display: flex;
      left: 4rem;
      position: absolute;
      width: calc(100% - 8rem);
      z-index: 2;
    `}
  .rhap_container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    line-height: 1;
    font-family: inherit;
    width: 100%;
  }
  .rhap_container:focus:not(:focus-visible) {
    outline: 0;
  }
  .rhap_container svg {
    vertical-align: initial;
  }

  .rhap_header {
    margin-bottom: 10px;
  }

  .rhap_footer {
    margin-top: 5px;
  }

  .rhap_main {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
  .rhap_progress-section {
    display: flex;
    flex: 3 1 auto;
    align-items: center;
  }

  .rhap_controls-section {
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    align-items: center;
  }

  .rhap_stacked .rhap_controls-section {
    margin-top: 8px;
  }

  .rhap_horizontal {
    flex-direction: row;
  }
  .rhap_horizontal .rhap_controls-section {
    margin-left: 8px;
  }

  .rhap_horizontal-reverse {
    flex-direction: row-reverse;
  }
  .rhap_horizontal-reverse .rhap_controls-section {
    margin-right: 8px;
  }

  .rhap_stacked-reverse {
    flex-direction: column-reverse;
  }
  .rhap_stacked-reverse .rhap_controls-section {
    margin-bottom: 8px;
  }

  .rhap_progress-container {
    display: flex;
    align-items: center;
    height: 20px;
    flex: 1 0 auto;
    align-self: center;
    margin: 0 calc(10px + 1%);
    cursor: pointer;
  }
  .rhap_progress-container:focus:not(:focus-visible) {
    outline: 0;
  }

  .rhap_time {
    color: #333;
    font-size: 16px;
    user-select: none;
  }

  .rhap_progress-bar {
    box-sizing: border-box;
    position: relative;
    z-index: 0;
    width: 100%;
    height: 5px;
    background-color: #dddddd;
    border-radius: 2px;
  }

  .rhap_progress-filled {
    height: 100%;
    position: absolute;
    z-index: 2;
    background-color: ${({ theme }) => theme.COLOUR.info};
    border-radius: 2px;
  }

  .rhap_progress-bar-show-download {
    background-color: rgba(221, 221, 221, 0.5);
  }

  .rhap_download-progress {
    height: 100%;
    position: absolute;
    z-index: 1;
    background-color: rgba(25, 129, 255, 0.25);
    border-radius: 2px;
  }

  .rhap_progress-indicator {
    box-sizing: border-box;
    position: absolute;
    z-index: 3;
    width: 10px;
    height: 10px;
    margin-left: -3px;
    top: -3px;
    background: ${({ theme }) => theme.COLOUR.info};
    border-radius: 50px;
  }

  .rhap_additional-controls {
    display: flex;
    flex: 1 0 auto;
    align-items: center;
  }

  .rhap_repeat-button {
    font-size: 26px;
    width: 26px;
    height: 26px;
    color: #868686;
    margin-right: 6px;
  }

  .rhap_main-controls {
    flex: 0 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rhap_main-controls-button {
    margin: 0 3px;
    color: #868686;
    font-size: 35px;
    width: 35px;
    height: 35px;
  }

  .rhap_play-pause-button {
    font-size: 40px;
    width: 40px;
    height: 40px;
  }

  .rhap_volume-controls {
    display: flex;
    flex: 1 0 auto;
    justify-content: flex-end;
    align-items: center;
  }

  .rhap_volume-button {
    flex: 0 0 26px;
    font-size: 26px;
    width: 26px;
    height: 26px;
    color: #868686;
    margin-right: 6px;
  }

  .rhap_volume-container {
    display: flex;
    align-items: center;
    flex: 0 1 100px;
  }

  .rhap_volume-bar-area {
    display: flex;
    align-items: center;
    width: 100%;
    height: 14px;
    cursor: pointer;
  }
  .rhap_volume-bar-area:focus:not(:focus-visible) {
    outline: 0;
  }

  .rhap_volume-bar {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 4px;
    background: #dddddd;
    border-radius: 2px;
  }

  .rhap_volume-indicator {
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    left: 0;
    top: -3px;
    background: ${({ theme }) => theme.COLOUR.info};
    opacity: 0.9;
    border-radius: 50px;
    cursor: pointer;
  }
  .rhap_volume-indicator:hover {
    opacity: 0.9;
  }

  .rhap_volume-filled {
    height: 100%;
    position: absolute;
    z-index: 2;
    background-color: ${({ theme }) => theme.COLOUR.info};
    border-radius: 2px;
  }

  /* Utils */
  .rhap_button-clear {
    background-color: transparent;
    border: none;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
  }
  .rhap_button-clear[aria-label='Play'],
  .rhap_button-clear[aria-label='Pause'] {
    svg {
      path {
        fill: ${({ theme }) => theme.COLOUR.primary};
      }
    }
  }

  .rhap_button-clear:hover {
    opacity: 0.9;
    transition-duration: 0.2s;
  }
  .rhap_button-clear:active {
    opacity: 0.95;
  }
  .rhap_button-clear:focus:not(:focus-visible) {
    outline: 0;
  }
`
