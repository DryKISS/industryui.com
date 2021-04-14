/**
 * Components - Organisms - Footer
 */

// React
import React, { Fragment } from 'react'
import { arrayOf, bool, func, number, object, oneOfType, shape, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { Column } from '../../atoms/grid/components/Column'
import { Container } from '../../atoms/grid/components/Container'
import { Heading } from '../../atoms/heading/heading'
import { Icon } from '../../atoms/icon/icon/icon'
import { Link } from '../../atoms/link/link'
import { List } from '../../atoms/list/components/list'
import { ListItem } from '../../atoms/list/components/listItem'
import { Row } from '../../atoms/grid/components/Row'

export const Footer = ({ columns, fixed }) => {
  const renderColumns = () => {
    return columns.map((column, index) => {
      return (
        <Column align={column.align} key={index} offset={column.offset} {...column.size}>
          {Object.entries(column).map(([key, value], i) => {
            switch (key) {
              case 'header':
                return (
                  <StyledHeading
                    align={value.align}
                    content={value.content}
                    context={value.context}
                    key={`${value.content}${index}${i}`}
                    tag="h6"
                  />
                )

              case 'formatter':
                return value(`${index}${i}`)

              case 'links':
                return renderLinks(value, `${index}${i}`)

              default:
                return renderText(value, `${index}${i}`)
            }
          })}
        </Column>
      )
    })
  }

  const renderLinks = ({ align, border, context, direction, items }, index) => {
    return (
      <StyledList align={align} direction={direction} key={`${items[0]}${index}`} unstyled>
        {items.map(({ icon, iconPrefix, id, name, to }) => (
          <StyledListItem key={id}>
            <Link border={border} context={context} to={to} passHref>
              {icon && <StyledIcon context="primary" icon={icon} prefix={iconPrefix} />}
              {name}
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
    )
  }

  const renderText = ({ align, items }, index) => (
    <Fragment key={index}>
      {items?.map(({ content, icon }, i) => (
        <Fragment key={i}>
          {icon && <StyledIcon context="primary" icon={icon} />}
          <StyledText align={align} dangerouslySetInnerHTML={{ __html: content }} />
        </Fragment>
      ))}
    </Fragment>
  )

  return (
    <StyledFooter data-cy="footer" fixed={fixed}>
      <Container>
        <Row>{renderColumns()}</Row>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  ${({ theme }) => `
    background: ${theme.FOOTER.background};
    border-top: 2px solid ${theme.COLOUR.primary};
    color: ${theme.FOOTER.colour};
    font-size: ${theme.FOOTER.fontSize};
    padding-top: ${theme.FOOTER.paddingTop};
  `}

  ${({ fixed }) =>
    fixed &&
    `
      bottom: 0;
      position: fixed;
      left: 0;
      width: 100%;
      z-index: 1;
    `}
`

const StyledHeading = styled(Heading)`
  ${({ align, theme }) => `
    margin: ${theme.FOOTER.headerMargin};
    text-align: ${align};
  `}
`

const StyledList = styled(List)`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  flex-wrap: wrap;
  justify-content: ${({ align }) => align};
`

const StyledListItem = styled(ListItem)`
  margin-bottom: 0.25rem;
  padding-right: 1rem;

  &:last-child {
    margin-bottom: 1rem;
  }
`

const StyledIcon = styled(Icon)`
  margin: 0 0.5rem 0 0;
`

const StyledText = styled.p`
  text-align: ${({ align }) => align};
`

Footer.propTypes = {
  columns: arrayOf(
    shape({
      header: shape({
        align: string,
        content: string
      }),
      formatter: func,
      links: shape({
        align: string,
        items: arrayOf(
          shape({
            id: string,
            icon: string,
            name: string,
            to: oneOfType([object, string])
          })
        )
      }),
      offset: shape({
        sm: number,
        md: number,
        lg: number,
        xl: number
      }),
      size: shape({
        sm: number,
        md: number,
        lg: number,
        xl: number
      }),
      style: object
    })
  ).isRequired,
  fixed: bool
}

Footer.defaultProps = {
  fixed: false
}
