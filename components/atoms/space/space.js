/**
 * Components - Space
 */

// React
import { node, oneOf, string } from 'prop-types'

// UI
import { MEDIA_QUERY, SIZE } from 'industry-ui'

// Style
import styled, { css } from 'styled-components'

export const Space = ({
  children,
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

  /* margin */
  ${({ margin }) =>
    margin === 'xs' &&
    css`
      margin: 0.25rem;

      ${MEDIA_QUERY.desktop`
        margin: calc(0.25rem * 2);
      `}
    `}

  ${({ margin }) =>
    margin === 'sm' &&
    css`
      margin: 0.5rem;

      ${MEDIA_QUERY.desktop`
        margin: calc(0.5rem * 2);
      `}
    `}

  ${({ margin }) =>
    margin === 'md' &&
    css`
      margin: 0.75rem;

      ${MEDIA_QUERY.desktop`
        margin: calc(0.75rem * 2);
      `}
    `}

    ${({ margin }) =>
      margin === 'lg' &&
      css`
        margin: 1rem;

        ${MEDIA_QUERY.desktop`
        margin: calc(1rem * 2);
      `}
      `}

    ${({ margin }) =>
      margin === 'xl' &&
      css`
        margin: 1.5rem;

        ${MEDIA_QUERY.desktop`
        margin: calc(1.5rem * 2);
      `}
      `}

    ${({ margin }) =>
      margin === 'xxl' &&
      css`
        margin: 2rem;

        ${MEDIA_QUERY.desktop`
        margin: calc(2rem * 2);
      `}
      `}

    /* marginBottom */
    ${({ marginBottom }) =>
      marginBottom === 'xs' &&
      css`
        margin-bottom: 0.25rem;

        ${MEDIA_QUERY.desktop`
        margin-bottom: calc(0.25rem * 2);
      `}
      `}

    ${({ marginBottom }) =>
      marginBottom === 'sm' &&
      css`
        margin-bottom: 0.5rem;

        ${MEDIA_QUERY.desktop`
        margin-bottom: calc(0.5rem * 2);
      `}
      `}

    ${({ marginBottom }) =>
      marginBottom === 'md' &&
      css`
        margin-bottom: 0.75rem;

        ${MEDIA_QUERY.desktop`
        margin-bottom: calc(0.75rem * 2);
      `}
      `}

    ${({ marginBottom }) =>
      marginBottom === 'lg' &&
      css`
        margin-bottom: 1rem;

        ${MEDIA_QUERY.desktop`
        margin-bottom: calc(1rem * 2);
      `}
      `}

    ${({ marginBottom }) =>
      marginBottom === 'xl' &&
      css`
        margin-bottom: 1.5rem;

        ${MEDIA_QUERY.desktop`
        margin-bottom: calc(1.5rem * 2);
      `}
      `}

    ${({ marginBottom }) =>
      marginBottom === 'xxl' &&
      css`
        margin-bottom: 2rem;

        ${MEDIA_QUERY.desktop`
        margin-bottom: calc(2rem * 2);
      `}
      `}

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

Space.defaultProps = {
  marginBottom: 'md'
}
