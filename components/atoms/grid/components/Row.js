/**
 * Row
 */

// React
import { node, number, objectOf, oneOf, oneOfType, string, bool } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

export const Row = ({
  align,
  children,
  className,
  justify,
  noGutter,
  noWrap,
  style
}) => {
  return (
    <StyledRow
      align={align}
      children={children}
      className={className}
      justify={justify}
      noGutter={noGutter}
      noWrap={noWrap}
      style={style}
    />
  )
}

const StyledRow = styled.div`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-wrap: ${({ noWrap }) => noWrap ? 'nowrap' : 'wrap'};

  ${({ theme }) => css`
    margin-left: -${theme.GRID.gutterWidth / 2}px;
    margin-right: -${theme.GRID.gutterWidth / 2}px;
  `}

  ${({ noGutter, theme }) => noGutter && css`
    margin-left: -${theme.GRID.gutterWidth}px;
    margin-right: -${theme.GRID.gutterWidth}px;
  `}

  ${({ align }) => css`
    align-items: ${
      (align === 'start' && 'flex-start') ||
      (align === 'end' && 'flex-end') ||
      (align === 'center' && 'center') ||
      (align === 'stretch' && 'stretch') ||
      (align === 'baseline' && 'baseline')
    };
  `}

  ${({ justify }) => css`
    justify-content: ${
      (justify === 'start' && 'flex-start') ||
      (justify === 'end' && 'flex-end') ||
      (justify === 'between' && 'space-between') ||
      (justify === 'around' && 'space-around') ||
      (justify === 'center' && 'center') ||
      (justify === 'initial' && 'initial') ||
      (justify === 'inherit' && 'inherit')
    };
  `}
`

Row.propTypes = {
  align: oneOf(['baseline', 'start', 'center', 'end', 'stretch']),
  children: node.isRequired,
  className: string,
  gutterWidth: number,
  justify: oneOf([
    'start',
    'center',
    'end',
    'between',
    'around',
    'initial',
    'inherit'
  ]),
  noGutter: bool,
  noWrap: bool,
  style: objectOf(oneOfType([number, string]))
}

Row.defaultProps = {
  align: 'stretch',
  gutterWidth: null,
  justify: 'start',
  noGutter: false,
  style: {},
  noWrap: false
}
