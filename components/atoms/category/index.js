/**
 * Category
 */

// React
import { string } from 'prop-types'

// UI
import { Link } from '../../'

// Style
import styled from 'styled-components'

export const Category = ({ category, path }) => {
  const categoryFormatted = category.toUpperCase().replace('-', ' ')

  return (
    <StyledCategory>

      <Link to={path} passHref>

        <StyledA>
          {categoryFormatted}
        </StyledA>

      </Link>

    </StyledCategory>
  )
}

const StyledCategory = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  position: relative;
  z-index: 2;
`

const StyledA = styled.a`
  color: ${({ theme }) => theme.COLOUR.primary};
`

Category.propTypes = {
  category: string.isRequired,
  path: string.isRequired
}
