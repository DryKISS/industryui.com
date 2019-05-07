/**
 * Section
 */

// React
import { any, bool, node, string } from 'prop-types'

// UI
import {
  Container,
  Heading,
  Row
} from '../../'

// Style
import styled from 'styled-components'

export const Section = ({ children, className, heading, row, style }) =>
  <StyleSection>

    <Container>

      {heading &&
        <Heading
          className='text-center'
          content={heading}
          context='primary'
          tag='h2'
        />
      }

      {row &&
        <Row>
          {children}
        </Row>
      }

      {!row &&
        children
      }

    </Container>

  </StyleSection>

const StyleSection = styled.section`
  border-top: 4px solid #ecf0f3;
  padding: 3rem 0;
`

Section.propTypes = {
  children: node,
  className: any,
  heading: string,
  row: bool,
  style: any
}

Section.defaultProps = {
  children: '',
  row: true
}
