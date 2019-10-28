/**
 * Card - Body
 */

// React
import { bool, node, oneOf, string } from 'prop-types'

// UI
import { CONTEXT } from '../../../'

// Style
import styled from 'styled-components'

export const CardBody = ({ center, children, className, context, title }) => {
  return (
    <StyledBody className={className} center={center}>
      {title && (
        <StyledWrapper>
          <StyledTitle className='Card-title'>{title}</StyledTitle>
        </StyledWrapper>
      )}

      {children && <StyledContent context={context}>{children}</StyledContent>}
    </StyledBody>
  )
}

const StyledBody = styled.div`
  ${({ center }) =>
    center &&
    `
    align-items: center;
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
    text-align: center;
  `}
`

const StyledWrapper = styled.div`
  display: flex;
`

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 24px auto 16px auto;
  text-align: center;
  width: 75%;
`

const StyledContent = styled.div`
  padding: 1rem;
`

CardBody.propTypes = {
  center: bool,
  children: node,
  className: string,
  context: oneOf(Object.values(CONTEXT)),
  title: string
}

CardBody.defaultProps = {
  context: 'primary'
}
