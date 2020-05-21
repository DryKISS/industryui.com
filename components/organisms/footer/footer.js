/**
 * Footer
 */

// React
import React, { Fragment } from 'react'
import { arrayOf, bool, func, number, object, oneOfType, shape, string } from 'prop-types'

// UI
import { Column, Container, Heading, Icon, Link, List, ListItem, Row } from '../../'

// Style
import styled, { css } from 'styled-components'

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
                    key={`${value.content}${index}${i}`}
                    tag='h6'
                  />
                )

              case 'formatter':
                return value(`${index}${i}`)

              case 'links':
                return renderLinks(value, `${index}${i}`)

              case 'text':
                return renderText(value, `${index}${i}`)
            }
          })}
        </Column>
      )
    })
  }

  const renderLinks = ({ align, direction, items }, index) => {
    return (
      <StyledList align={align} direction={direction} key={`${items[0]}${index}`} unstyled>
        {items.map(({ icon, id, name, to }) => (
          <StyledListItem key={id}>
            <Link to={to} passHref>
              {icon && <StyledIcon context='primary' icon={icon} prefix='fad' />}
              {name}
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
    )
  }

  const renderText = ({ align, items }, index) => (
    <Fragment key={index}>
      {items.map(({ content, icon }, i) => (
        <Fragment key={`${index}${i}`}>
          {icon && <StyledIcon context='primary' icon={icon} prefix='fad' />}
          <StyledText align={align} dangerouslySetInnerHTML={{ __html: content }} />
        </Fragment>
      ))}
    </Fragment>
  )

  return (
    <StyledFooter data-cy='footer' fixed={fixed}>
      <Container>
        <Row>{renderColumns()}</Row>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  border-top: 2px solid ${({ theme }) => theme.COLOUR.primary};
  font-size: 0.875rem;
  ${({ theme: { FOOTER } }) => css`
    background: ${FOOTER.background};
    color: ${FOOTER.colour};
  `}
  padding-top: 2rem;
  ${({ fixed }) =>
    fixed &&
    css`
      bottom: 0;
      position: fixed;
      left: 0;
      width: 100%;
      z-index: 1;
    `}
`

const StyledHeading = styled(Heading)`
  text-align: ${({ align }) => align};
`

const StyledList = styled(List)`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  flex-wrap: wrap;
  justify-content: ${({ align }) => align};
`

const StyledListItem = styled(ListItem)`
  margin-bottom: 1.25rem;
  padding-right: 1rem;
`

const StyledIcon = styled(Icon)`
  margin: 0 0.5rem 0 0;
`

const StyledText = styled.p`
  margin: 0 0 1rem;
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
