import styled, { css } from 'styled-components'

const Adornment = styled.div`
  align-items: center;
  border: 1px solid;
  display: flex;
  height: 100%;
  ${({ startAdornment }) =>
    startAdornment
      ? css`
          border-bottom-left-radius: '0.25rem';
          border-right: none;
          border-top-left-radius: '0.25rem';
        `
      : css`
          border-bottom-right-radius: '0.25rem';
          border-left: none;
          border-top-right-radius: '0.25rem';
        `}
`

export default Adornment
