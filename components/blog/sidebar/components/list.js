/**
 * Blog List
 */

// React
import { Fragment } from 'react'

// UI
import { Badge, Link, Truncate } from '../../../'

// Style
import styled from 'styled-components'

export const BlogList = ({ list }) => {
  return (
    <StyledDl>
      {
        list.map(({ badge, name, to }, index) => (

          <Fragment key={index}>

            <StyledDt>
              <Badge content={badge} />
            </StyledDt>

            <StyledDd>
              <Link to={to} passHref>
                <StyledA target='_blank'>{name}</StyledA>
              </Link>
            </StyledDd>

          </Fragment>

        ))
      }
    </StyledDl>
  )
}

const StyledDl = styled.dl`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`

const StyledDt = styled.dt`
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding: 0 1rem;
`

const StyledDd = styled.dd`
  flex: 0 0 75%;
  max-width: 75%;
  padding-top: .2rem;
  position: relative;
  margin-left: 0;
  min-height: 1px;
  padding: 0 1rem;
  width: 100%;
`

const StyledA = styled.a`
  ${props => Truncate('100px')}
`
