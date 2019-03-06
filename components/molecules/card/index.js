/**
 * Card
 */

// React
import { any, bool, node, object, oneOf, oneOfType, string } from 'prop-types'

// UI
import { Image, Link } from '../../'
import { CONTEXT } from '../../theme'
import { CardBody, CardFooter } from './components'

// Style
import styled from 'styled-components'

export const Card = ({
  alt,
  bordered,
  center,
  children,
  className,
  context,
  footer,
  image,
  shadow,
  style,
  title,
  to
}) => {
  const linked = () => {
    return (
      <Link to={to} passHref>
        <StyledLink>
          {card()}
        </StyledLink>
      </Link>
    )
  }

  const card = () => {
    return (
      <StyledCard
        bordered={bordered}
        className={className}
        context={context}
        shadow={shadow}
        style={style}
      >

        {/* { header && header() } */}

        {image &&
          <StyledImage imageClasses='rounded' alt={alt} radius src={image} />
        }

        {(title || children) &&
          <CardBody
            center={center}
            children={children}
            context={context}
            title={title}
          />
        }

        {footer && <CardFooter context={context} footer={footer} />}

      </StyledCard>
    )
  }

  return (
    <>
      { to ? linked() : card() }
    </>
  )
}

Card.propTypes = {
  alt: string,
  bordered: bool,
  center: bool,
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
  shadow: bool,
  style: object,
  title: string
}

Card.defaultProps = {
  context: 'primary',
  role: 'article'
}

const StyledCard = styled.div`
  background-clip: border-box;
  background-color: ${({ context, theme }) => theme.COLOUR[context]}
  border: ${({ bordered }) => bordered && '1px solid rgba(0, 0, 0, .125)'};
  border-radius: .5rem;
  box-shadow: ${({ shadow }) => shadow && '0px 8px 10px rgba(24, 37, 50, 0.1), 0px 0px 1px rgba(24, 37, 50, 0.08)'};
  color: ${({ context, theme }) => (context === 'light' || context === 'white') ? theme.COLOUR.dark : theme.COLOUR.white}}
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
