/**
 * Components - Molecules - Breadcrumb
 */

// React
import React from 'react'
import { array, node, oneOf, oneOfType, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import Icon from '../../atoms/icon/icon/icon'
import Link from '../../atoms/link/link'
import THEME_SIZE from '../../constants/size'

const Breadcrumb = ({ breadcrumbs, customSeparator, separator, size }) => {
  return (
    <nav aria-label="breadcrumb">
      <StyledOl itemScope="" itemType="http://schema.org/BreadcrumbList">
        {breadcrumbs.map((item, index) => {
          return (
            <StyledLi
              itemProp="itemListElement"
              itemScope=""
              itemType="http://schema.org/ListItem"
              key={index}
            >
              {index + 1 !== breadcrumbs.length ? (
                <Link to={item.to} passHref>
                  <StyledA
                    itemProp="item"
                    itemScope="itemscope"
                    size={size}
                    itemType="http://schema.org/Thing"
                  >
                    {item.icon && <StyledIconWrapper size={size}>{item.icon}</StyledIconWrapper>}
                    <StyledTitle size={size}> {item.title}</StyledTitle>
                  </StyledA>
                </Link>
              ) : (
                <StyledLastTitle size={size} itemProp="name">
                  {item.icon && <StyledIconWrapper size={size}>{item.icon}</StyledIconWrapper>}
                  <StyledTitle last size={size}>
                    {item.title}
                  </StyledTitle>
                </StyledLastTitle>
              )}

              <meta itemProp="position" content={index + 1 + ''} />

              {index + 1 !== breadcrumbs.length && (
                <StyledSeperator size={size}>
                  {customSeparator ??
                    (separator && separator === 'chevron' ? (
                      <StyledIcon icon="chevron-right" />
                    ) : separator && separator === 'slash' ? (
                      <StyledIcon icon="slash" />
                    ) : (
                      separator || '\\'
                    ))}
                </StyledSeperator>
              )}
            </StyledLi>
          )
        })}
      </StyledOl>
    </nav>
  )
}

const sizedStyles = (size) => {
  switch (size) {
    case THEME_SIZE.XS:
      return css`
        font-size: 0.75rem;
        padding: 0 0.25rem;
      `
    case THEME_SIZE.SM:
      return css`
        font-size: 0.875rem;
        padding: 0 0.25rem;
      `
    case THEME_SIZE.LG:
      return css`
        font-size: 1.25rem;
        padding: 0 0.375rem;
      `
    case THEME_SIZE.XL:
      return css`
        font-size: 1.5rem;
        padding: 0 0.375rem;
      `
    default:
      return css`
        font-size: 1rem;
        padding: 0 0.375rem;
      `
  }
}

const StyledTitle = styled.span`
  ${({ size }) => sizedStyles(size)}
  color: ${({ theme }) => theme.COLOUR.link};
  ${({ last, theme }) =>
    last &&
    css`
      color: ${theme.COLOUR.dark};
    `}
`

const StyledIconWrapper = styled.span`
  ${({ size }) => sizedStyles(size)}
  color: ${({ theme }) => theme.COLOUR.blackGrey};
`

const StyledIcon = styled(Icon).attrs((props) => ({
  color: props.theme.dark
}))

const StyledSeperator = styled.span`
  color: ${({ theme }) => theme.COLOUR.dark};
  ${({ size }) => sizedStyles(size)}
`

const StyledA = styled.span``

const StyledLastTitle = styled.span`
  ${({ size }) => sizedStyles(size)}
`

const StyledOl = styled.ol`
  border-radius: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  width: 100%;
`

const StyledLi = styled.li`
  a {
    border: none !important;
  }
`

Breadcrumb.propTypes = {
  breadcrumbs: array,
  customSeparator: node,
  separator: oneOfType([oneOf(['chevron', 'slash']), string]),
  size: oneOf(Object.values(THEME_SIZE))
}

export default Breadcrumb
