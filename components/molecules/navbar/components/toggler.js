/**
 * Navbar toggler
 */

// React
import { bool, func } from 'prop-types'

// UI
import { MEDIA_QUERY } from '../../../'

// Style
import styled from 'styled-components'

export const Toggler = ({ handleMenuClick, visible }) => {
  return (
    <StyledToggler
      aria-expanded={visible ? 'false' : 'true'}
      aria-label='Toggle navigation'
      onClick={handleMenuClick}
    >
      {!visible &&
        <StyledIconMenu
          aria-hidden='true'
          role='img'
          viewBox='0 0 448 512'
        >
          <path
            fill='currentColor'
            d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
          />
        </StyledIconMenu>}

      {visible &&
        <StyledIconClose
          aria-hidden='true'
          role='img'
          viewBox='0 0 352 512'
        >
          <path
            fill='currentColor'
            d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'
          />
        </StyledIconClose>}

      <StyledText>Menu</StyledText>

    </StyledToggler>
  )
}

const StyledToggler = styled.a`
  cursor: pointer;
  font-size: 18px;
  padding: 20px 15px;

  ${MEDIA_QUERY.desktop`
    display: none;
  `}
`

const StyledIconMenu = styled.svg`
  display: inline-block;
  vertical-align: -2px;
  width: .9rem;
`

const StyledIconClose = styled.svg`
  display: inline-block;
  vertical-align: -2.5px;
  width: .7em;
`

const StyledText = styled.span`
  margin-left: .25rem;
`

Toggler.propTypes = {
  handleMenuClick: func.isRequired,
  visible: bool
}
