/**
 * Input Group Text
 */

// Style
import styled from 'styled-components'

export const InputGroupText = ({ children }) => {
  return (
    <StyledInputGroupText children={children} />
  )
}

const StyledInputGroupText = styled.span`
  display: flex;
  align-items: center;
  padding: .375rem .75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`
