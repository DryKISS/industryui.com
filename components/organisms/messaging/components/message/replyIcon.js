// React
import React from 'react'

// Style
import styled, { css } from 'styled-components'

export const ReplyIcon = ({ context }) => {
  return (
    <StyledSvg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      context={context}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0.259656 5.43237L5.75978 0.682841C6.24122 0.26706 7 0.604591 7 1.25047V3.75212C12.0197 3.80959 16 4.81562 16 9.57268C16 11.4927 14.7631 13.3948 13.3958 14.3893C12.9692 14.6997 12.3611 14.3102 12.5184 13.8071C13.9354 9.27543 11.8463 8.07237 7 8.00265V10.75C7 11.3969 6.24062 11.7329 5.75978 11.3176L0.259656 6.56762C-0.0863132 6.26881 -0.0867825 5.73159 0.259656 5.43237Z" />
    </StyledSvg>
  )
}
const StyledSvg = styled.svg`
  ${({ context, theme }) =>
    context &&
    css`
      path {
        fill: ${theme.COLOUR[context]};
      }
    `}
`
