/**
 * Tile
 */

// React
import React from 'react'
import { bool, node, object, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Link from '../../atoms/link/link'
import TileBody from './components/body'

const Tile = ({
  body,
  className,
  colourConfig,
  context,
  description,
  loading,
  rounded,
  size,
  title,
  to
}) => {
  let selectedColour = 'success'

  if (colourConfig) {
    const ParsIntBody = parseInt(body)

    for (const key in colourConfig) {
      const ParsIntKey = parseInt(key)

      if (ParsIntBody <= ParsIntKey) {
        selectedColour = colourConfig[key]
        break
      } else if (ParsIntBody > ParsIntKey) {
        selectedColour = colourConfig[key]
      }
    }
  }

  const linked = () => {
    return (
      <Link border={false} passHref to={to}>
        {tile()}
      </Link>
    )
  }

  const tile = () => {
    return (
      <StyledTile
        bgColour={selectedColour}
        className={className}
        context={context}
        rounded={rounded}
        size={size}
      >
        {(title || body) && (
          <TileBody
            children={body}
            description={description}
            loading={loading}
            size={size}
            title={title}
          />
        )}
      </StyledTile>
    )
  }

  return to ? linked() : tile()
}

const StyledTile = styled.div`
  background-color: ${({ theme, bgColour, context }) => {
    return context ? theme.COLOUR[context] ?? context : theme.COLOUR[bgColour] ?? bgColour
  }};
  box-shadow: ${({ shadow }) => shadow && 'rgba(45, 62, 80, 0.12) 0 1px 5px 0'};
  background-clip: border-box;
  border-radius: ${({ rounded }) => rounded && '0.25rem'};
  color: ${({ theme }) => theme.COLOUR.white};
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: ${({ theme, size }) => theme.TILE.MIN_HEIGHT[size]};
  min-width: 0;
  overflow: hidden;
  padding: ${({ theme, size }) => theme.TILE.PADDING[size]};
  position: relative;
  width: 100%;
  word-wrap: break-word;
`

Tile.propTypes = {
  body: node,
  className: string,
  colourConfig: object,
  context: string,
  description: string,
  loading: bool,
  rounded: bool,
  size: string,
  title: string
}

Tile.defaultProps = {
  loading: false,
  rounded: false,
  size: 'sm'
}

export default Tile
