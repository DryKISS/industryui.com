/**
 * Components - Common - Carousel Nav
 */

// Style
import styled from 'styled-components'

// UI
import { Button } from '@drykiss/industry-ui'

export const CarouselNav = ({ right, left }) => {
  return <StyledNav startIcon={left ? 'chevron-left' : 'chevron-right'} size="sm" />
}

const StyledNav = styled(Button)`
  border-radius: 100%;
  width: 38px;
  height: 38px;
  background-color: ${({ theme }) => theme.COLOUR.light};

  svg {
    color: ${({ theme }) => theme.COLOUR.dark};
  }
`
