/**
 * Card
 */

// React
import React, { Component } from 'react'
import { any, bool, node, object, oneOf, oneOfType, string } from 'prop-types'

// UI
import { Image, Link } from '../../'
import { CONTEXT } from '../../theme'
import { CardBody, CardFooter } from './components'

// Style
import styled, { withTheme } from 'styled-components'

export const Card = withTheme(
  class Card extends Component {
    static propTypes = {
      alt: string,
      bordered: bool,
      children: node,
      className: any,
      context: oneOf(Object.values(CONTEXT)),
      footer: string,
      fullHeight: bool,
      header: string,
      to: oneOfType([
        object,
        string
      ]),
      horizontal: bool,
      image: string,
      role: string,
      title: string
    }

    static defaultProps = {
      context: 'primary',
      role: 'article'
    }

    linked = () => {
      const { to } = this.props

      return (
        <Link to={to} passHref>
          <StyledLink>
            {this.card()}
          </StyledLink>
        </Link>
      )
    }

    card = () => {
      const {
        alt,
        bordered,
        children,
        className,
        context,
        footer,
        image,
        title
      } = this.props

      return (
        <StyledCard
          bordered={bordered}
          className={className}
          context={context}
        >

          {/* Header */}
          {/* { header && this.header() } */}

          {/* Image */}
          {image &&
            <StyledImage imageClasses='rounded' alt={alt} radius src={image} />
          }

          {/* Body */}
          {(title || children) &&
            <CardBody children={children} context={context} title={title} />
          }

          {/* Footer */}
          {footer && <CardFooter context={context} footer={footer} />}

        </StyledCard>
      )
    }

    render () {
      const { to } = this.props

      return (
        <section>
          { to ? this.linked() : this.card() }
        </section>
      )
    }
  }
)

// Style
const StyledCard = styled.div`
  background-clip: border-box;
  background-color: ${({ context, theme }) => theme.COLOUR[context]}
  /* border: 1px solid rgba(0, 0, 0, .125); */
  border-radius: .5rem;
  color: ${({ context, theme }) => (context === 'light') ? theme.COLOUR.dark : theme.COLOUR.white}}
  display: flex;
  flex-direction: column;
  font-size: inherit;
  margin: .5rem 0;
  min-width: 0;
  position: relative;
  word-wrap: break-word;
`

const StyledImage = styled(Image)`
  .rounded {
    border-radius: .5rem .5rem 0 0;
    border-style: none;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
`

// Need to add the fullheight prop here and add these
// const StyledSection = styled.section`
/*  border-radius: .5rem; */
/*  display: grid; */
/*   margin: .5rem 0; */
/*   min-height: 96%; */
// `

// .Card-horizontal {
//   height: 286px;
// }

// .Card-bordered {
//   border-radius: .5rem;
//   box-shadow: 0px 7px 26px -1px rgba(0, 0, 0, 0.2);
// }

// .Card-horizontal .Card-body {
//   padding: 1rem;
//   max-width: 283px;
// }

// .Card-horizontal .Card-title {
//   margin: 0;
//   text-align: left;
//   width: 100%;
// }

// :global(.Card-absoluteBottom) {
//   position: absolute;
//   bottom: 1rem;
// }
