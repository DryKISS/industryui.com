/**
 * Card body
 */

// React
import React, { PureComponent } from 'react'
import { node, string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const CardBody = withTheme(
  class CardBody extends PureComponent {
    static propTypes = {
      children: node,
      title: string
    }

    render () {
      const { title, children } = this.props

      return (
        <StyledBody>

          {
            title &&
              <StyledWrapper>
                <StyledTitle className='Card-title'>{title}</StyledTitle>
              </StyledWrapper>
          }

          {
            children &&
              <StyledContent>{children}</StyledContent>
          }

        </StyledBody>
      )
    }
  }
)

// Style
const StyledBody = styled.div`
  flex: 1 1 auto;
  text-align: left;
`

const StyledWrapper = styled.div`
  display: flex;
`

const StyledTitle = styled.h1`
  color: #3a4e5f;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 24px auto 16px auto;
  text-align: center;
  width: 75%;
`

const StyledContent = styled.div`
  color: #6b7a87;
  padding: 1rem;
`

//   .Card-titleElipsis {
//     display: inline-block;
//     flex: 1;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//   }
