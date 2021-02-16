/**
 * Components - Space
 */

// React
import { node, oneOf, string } from 'prop-types'

// UI
import { SIZE } from '../../'

// Style
import styled from 'styled-components'
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
  paddingLeft
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
    paddingY
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
            { k: 'margin-bottom', v: marginY }
          ]
        : []),
      ...(marginX
        ? [
            { k: 'margin-left', v: marginX },
            { k: 'margin-right', v: marginX }
          ]
        : []),
      ...(paddingY
        ? [
            { k: 'padding-top', v: paddingY },
            { k: 'padding-bottom', v: paddingY }
          ]
        : []),
      ...(paddingX
        ? [
            { k: 'padding-left', v: paddingX },
            { k: 'padding-right', v: paddingX }
          ]
        : [])
    ])}
`

Space.protoTypes = {
  children: node,
  content: string,
  margin: oneOf(Object.values(SIZE)),
  marginY: oneOf(Object.values(SIZE)),
  marginX: oneOf(Object.values(SIZE)),
  marginTop: oneOf(Object.values(SIZE)),
  marginRight: oneOf(Object.values(SIZE)),
  marginBottom: oneOf(Object.values(SIZE)),
  marginLeft: oneOf(Object.values(SIZE)),
  padding: oneOf(Object.values(SIZE)),
  paddingY: oneOf(Object.values(SIZE)),
  paddingX: oneOf(Object.values(SIZE)),
  paddingTop: oneOf(Object.values(SIZE)),
  paddingRight: oneOf(Object.values(SIZE)),
  paddingBottom: oneOf(Object.values(SIZE)),
  paddingLeft: oneOf(Object.values(SIZE))
}
