/**
 * Components - Space
 */

// React
import React from 'react'
import { node, oneOf, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { THEME_SIZE } from '../../theme/constants/size'
import { spaceStyler } from './style'

export const Space = ({
  children,
  className,
  content,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}) => {
  return (
    <StyledSpace
      className={className}
      margin={margin}
      marginX={marginX}
      marginY={marginY}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
    >
      {content || children}
    </StyledSpace>
  )
}

const StyledSpace = styled.div`
  margin: 0;
  padding: 0;
  ${({
    margin,
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    marginX,
    marginY,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
  }) =>
    spaceStyler([
      { k: 'margin', v: margin },
      { k: 'margin-bottom', v: marginBottom },
      { k: 'margin-left', v: marginLeft },
      { k: 'margin-right', v: marginRight },
      { k: 'margin-top', v: marginTop },
      { k: 'padding', v: padding },
      { k: 'padding-bottom', v: paddingBottom },
      { k: 'padding-left', v: paddingLeft },
      { k: 'padding-right', v: paddingRight },
      { k: 'padding-top', v: paddingTop },
      ...(marginY
        ? [
            { k: 'margin-top', v: marginY },
            { k: 'margin-bottom', v: marginY },
          ]
        : []),
      ...(marginX
        ? [
            { k: 'margin-left', v: marginX },
            { k: 'margin-right', v: marginX },
          ]
        : []),
      ...(paddingY
        ? [
            { k: 'padding-top', v: paddingY },
            { k: 'padding-bottom', v: paddingY },
          ]
        : []),
      ...(paddingX
        ? [
            { k: 'padding-left', v: paddingX },
            { k: 'padding-right', v: paddingX },
          ]
        : []),
    ])}
`

Space.propTypes = {
  children: node,
  content: string,
  margin: oneOf(Object.values(THEME_SIZE)),
  marginY: oneOf(Object.values(THEME_SIZE)),
  marginX: oneOf(Object.values(THEME_SIZE)),
  marginTop: oneOf(Object.values(THEME_SIZE)),
  marginRight: oneOf(Object.values(THEME_SIZE)),
  marginBottom: oneOf(Object.values(THEME_SIZE)),
  marginLeft: oneOf(Object.values(THEME_SIZE)),
  padding: oneOf(Object.values(THEME_SIZE)),
  paddingY: oneOf(Object.values(THEME_SIZE)),
  paddingX: oneOf(Object.values(THEME_SIZE)),
  paddingTop: oneOf(Object.values(THEME_SIZE)),
  paddingRight: oneOf(Object.values(THEME_SIZE)),
  paddingBottom: oneOf(Object.values(THEME_SIZE)),
  paddingLeft: oneOf(Object.values(THEME_SIZE)),
}
