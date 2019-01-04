/**
 * Card body
 */

// React
import React, { PureComponent } from 'react'
import { node, oneOf, string } from 'prop-types'

// UI
import { COLOUR } from '../../../'
import { CONTEXT } from '../../../theme'

// Style
import styled, { withTheme } from 'styled-components'

export const CardBody = withTheme(
  class CardBody extends PureComponent {
    static propTypes = {
      children: node,
      context: oneOf(Object.values(CONTEXT)),
      title: string
    }

    static defaultProps = {
      context: 'primary'
    }

    render () {
      const { title, children, context } = this.props

      return (
        <StyledBody>

          {title &&
            <StyledWrapper>
              <StyledTitle className='Card-title'>{title}</StyledTitle>
            </StyledWrapper>
          }

          {children &&
            <StyledContent context={context}>{children}</StyledContent>
          }

        </StyledBody>
      )
    }
  }
)

// Style
const StyledBody = styled.div`
  flex: 1 1 auto;
  /* text-align: left; */
`

const StyledWrapper = styled.div`
  display: flex;
`

const StyledTitle = styled.h1`
  /* ${props => COLOUR(props)} */
  font-size: 1.5rem;
  font-weight: 600;
  margin: 24px auto 16px auto;
  text-align: center;
  width: 75%;
`

const StyledContent = styled.div`
  /* ${props => COLOUR(props)} */
  padding: 1rem;
`

//   .Card-titleElipsis {
//     display: inline-block;
//     flex: 1;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//   }
