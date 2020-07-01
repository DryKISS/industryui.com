/**
 * Divider
 */

// React
import { any, oneOf, string } from 'prop-types'

// UI
import { SIZE } from '../../'

// Style
import styled, { css } from 'styled-components'

export const Divider = props => (
  <StyledDivider {...props}>{props.content && props.content}</StyledDivider>
)

const StyledDivider = styled.div`
  border-top: 2px solid
    ${({ context, theme }) => (context ? theme.COLOUR[context] : theme.COLOUR.light)};
  height: ${({ content }) => (content ? 'auto' : '0')};
  margin: ${props =>
    (props.size === 'lg' && '2rem 0') || (props.size === 'md' && '1rem 0') || '.5rem 0'};
  overflow: hidden;
  user-select: none;
  ${({ content, theme }) =>
    content &&
    css`
      :after {
        background-position: left 1em top 50%;
      }

      :before {
        background-position: right 1em top 50%;
      }

      :after,
      :before {
        border-top: 1px solid ${theme.COLOUR.dark};
        content: '';
        display: table-cell;
        position: relative;
        top: 50%;
        width: 50%;
        background-repeat: no-repeat;
      }
    `}
`

Divider.propTypes = {
  className: any,
  content: string,
  size: oneOf(Object.values(SIZE))
}
