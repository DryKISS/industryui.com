import styled from 'styled-components'
export const Cross = () => {
  return (
    <StyledSvg id='Group_7520' data-name='Group 7520' width='24' height='24' viewBox='0 0 24 24'>
      <defs>
        <clipPath id='crossIcon'>
          <rect id='Rectangle_4028' data-name='Rectangle 4028' width='24' height='24' />
        </clipPath>
      </defs>
      <g id='Group_7519' data-name='Group 7519' clipPath='url(#crossIcon)'>
        <path
          id='Path_7127'
          data-name='Path 7127'
          d='M1523.327,550.886l5.3-5.3a.5.5,0,0,0-.708-.707l-5.3,5.3-5.3-5.3a.5.5,0,0,0-.707.707l5.3,5.3-5.3,5.3a.5.5,0,1,0,.707.707l5.3-5.3,5.3,5.3a.5.5,0,1,0,.708-.707Z'
          transform='translate(-1510.619 -538.886)'
        />
      </g>
    </StyledSvg>
  )
}
const StyledSvg = styled.svg`
  path,
  rect {
    fill: ${({ theme }) => theme.COLOUR.white};
  }
`
