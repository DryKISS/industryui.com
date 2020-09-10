import styled, { css } from 'styled-components'
import { inputBorderRadius } from 'components'

export const Adornment = styled.div`
  align-items: center;
  border: 1px solid;
  display: flex;
  height: 100%;
  ${({ startAdornment }) =>
    startAdornment
      ? css`
          border-bottom-left-radius: ${inputBorderRadius};
          border-right: none;
          border-top-left-radius: ${inputBorderRadius};
        `
      : css`
          border-bottom-right-radius: ${inputBorderRadius};
          border-left: none;
          border-top-right-radius: ${inputBorderRadius};
        `}
`
