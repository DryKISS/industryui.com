/**
 * Card body
 */

// React
import { bool, node, oneOf, string } from 'prop-types'

// UI
import { COLOUR } from '../../../'
import { CONTEXT } from '../../../theme'

// Style
import styled from 'styled-components'

export const CardBody = ({ center, children, context, title }) => {
  return (
    <StyledBody center={center}>

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

const StyledBody = styled.div`
  ${({ center }) => center && `
    align-items: center;
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
  `}
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

// .Card-titleElipsis {
//   display: inline-block;
//   flex: 1;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// }

CardBody.propTypes = {
  center: bool,
  children: node,
  context: oneOf(Object.values(CONTEXT)),
  title: string
}

CardBody.defaultProps = {
  context: 'primary'
}
