/**
 * Icon
 */

// React
import React from 'react'

// Storybook
import { ControlTypes } from '../../../../../.storybook/decorators/controlTypes'

// Style
import styled from 'styled-components'

// UI
import arrayOfValues from '../../../../utils/arrayOfValues/arrayOfValues'
import { blendLinearRgb } from '../../../../utils/colour/colour'
import Card from '../../../../molecules/card/card'
import Heading from '../../../heading/heading'
import Icon from '../icon'
import THEME_CONTEXT from '../../../../constants/context'
import THEME_SIZE from '../../../../constants/size'
import Readme from '../README.md'

export default {
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Icon'
}

const ListIcons = {
  Copy: 'copy',
  Copyright: 'copyright',
  Images: 'images',
  Smile: 'smile',
  UserCircle: 'user-circle'
}

const IconPrefix = {
  Solid: 'fas',
  Regular: 'far'
}

const main = (args) => {
  return (
    <>
      <StyledCard>
        <StyledHeading
          content="Result"
          style={{
            background: blendLinearRgb(0.8, 'rgba(64, 64, 64)', 'rgba(17, 189, 78, 0.16)'),
            color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(17, 189, 78, 0.64)')
          }}
        />
        <StyledBody>
          <Icon {...args} />
          <StyledNote
            style={{
              background: blendLinearRgb(0.2, 'rgba(64, 64, 64)', 'rgba(54, 197, 58, 0.08)'),
              borderColor: blendLinearRgb(0.8, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.08)'),
              color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.88)')
            }}
          >
            <Icon
              icon="graduation-cap"
              size="sm"
              fixedWidth
              context="success"
              style={{
                color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.32)'),
                marginRight: '0.5rem'
              }}
            />
            Styling showcase 5 examples of over 1000 free Font Awesome icons.
          </StyledNote>
        </StyledBody>
      </StyledCard>
      <StyledCard>
        <StyledHeading
          content="Styling"
          style={{
            background: blendLinearRgb(0.2, 'rgba(64, 64, 64)', 'rgba(108, 3, 247, 0.16)'),
            color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(108, 3, 247, 0.64)')
          }}
        />
        <StyledBody>
          <StyledHeadingH4
            content="Context colors"
            style={{
              color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
            }}
          />
          <StyledBox>
            <Icon icon="images" size="lg" context="primary" pull="left" />
            <Icon icon="images" size="lg" context="secondary" pull="left" />
            <Icon icon="images" size="lg" context="black" pull="left" />
            <Icon icon="images" size="lg" context="success" pull="left" />
            <Icon icon="images" size="lg" context="info" pull="left" />
            <Icon icon="images" size="lg" context="warning" pull="left" />
            <Icon icon="images" size="lg" context="danger" pull="left" />
            <Icon icon="images" size="lg" context="help" pull="left" />
          </StyledBox>
          <StyledNote
            style={{
              background: blendLinearRgb(0.2, 'rgba(64, 64, 64)', 'rgba(54, 197, 58, 0.08)'),
              borderColor: blendLinearRgb(0.8, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.08)'),
              color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.88)')
            }}
          >
            <Icon
              icon="graduation-cap"
              size="sm"
              fixedWidth
              context="success"
              style={{
                color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.32)'),
                marginRight: '0.5rem'
              }}
            />
            Context property have priority over color property.
          </StyledNote>
        </StyledBody>
      </StyledCard>

      <StyledCard>
        <StyledBody>
          <StyledHeadingH4
            content="Sizes"
            style={{
              color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
            }}
          />
          <StyledBox>
            <Icon icon="images" size="5x" pull="left" />
            <Icon icon="images" size="4x" pull="left" />
            <Icon icon="images" size="3x" pull="left" />
            <Icon icon="images" size="2x" pull="left" />
            <Icon icon="images" size="lg" pull="left" />
            <Icon icon="images" size="sm" pull="left" />
          </StyledBox>
          <StyledNote
            style={{
              background: blendLinearRgb(0.2, 'rgba(64, 64, 64)', 'rgba(54, 197, 58, 0.08)'),
              borderColor: blendLinearRgb(0.8, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.08)'),
              color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.88)')
            }}
          >
            <Icon
              icon="graduation-cap"
              size="sm"
              fixedWidth
              context="success"
              style={{
                color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.32)'),
                marginRight: '0.5rem'
              }}
            />
            Style property have priority over size property.
          </StyledNote>
        </StyledBody>
      </StyledCard>

      <StyledCard>
        <StyledBody>
          <StyledHeadingH4
            content="Transform"
            style={{
              color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
            }}
          />
          <StyledBox>
            <Icon icon="images" size="lg" pull="left" transform="grow-6" />
            <Icon icon="images" size="lg" pull="left" transform="shrink-6" />
            <Icon icon="images" size="lg" pull="left" transform="up-6" />
            <Icon icon="images" size="lg" pull="left" transform="down-6" />
            <Icon icon="images" size="lg" pull="left" transform="flip-v" />
            <Icon icon="images" size="lg" pull="left" transform="flip-h" />
            <Icon icon="images" size="lg" pull="left" transform="flip-v flip-h" />
            <Icon icon="images" size="lg" pull="left" transform="rotate-22" />
            <Icon icon="images" size="lg" pull="left" transform="rotate--45" />
            <Icon icon="images" size="lg" pull="left" transform="rotate--90" />
            <Icon icon="images" size="lg" pull="left" transform="rotate--270" />
          </StyledBox>
          <StyledNote
            style={{
              background: blendLinearRgb(0.2, 'rgba(64, 64, 64)', 'rgba(54, 197, 58, 0.08)'),
              borderColor: blendLinearRgb(0.8, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.08)'),
              color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.88)')
            }}
          >
            <Icon
              icon="graduation-cap"
              size="sm"
              fixedWidth
              context="success"
              style={{
                color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.32)'),
                marginRight: '0.5rem'
              }}
            />
            Power transform features.
          </StyledNote>
        </StyledBody>
      </StyledCard>

      <StyledCard>
        <StyledBody>
          <StyledHeadingH4
            content="Style"
            style={{
              color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
            }}
          />
          <StyledBox>
            <Icon icon="images" size="5x" pull="left" style={{ color: 'Tomato' }} />
          </StyledBox>
          <StyledNote
            style={{
              background: blendLinearRgb(0.2, 'rgba(64, 64, 64)', 'rgba(54, 197, 58, 0.08)'),
              borderColor: blendLinearRgb(0.8, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.08)'),
              color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.88)')
            }}
          >
            <Icon
              icon="graduation-cap"
              size="sm"
              fixedWidth
              context="success"
              style={{
                color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.32)'),
                marginRight: '0.5rem'
              }}
            />
            CSS styles.
          </StyledNote>
        </StyledBody>
      </StyledCard>
    </>
  )
}

export const icons = main.bind({})

icons.args = {
  border: false,
  context: THEME_CONTEXT.PRIMARY,
  icon: 'images',
  fixedWidth: false,
  prefix: 'fas',
  pulse: false,
  size: THEME_SIZE.LG,
  spin: false,
  style: {
    color: '',
    fontSize: ''
  },
  transform: 'left-0 right-0 up-0  down-0 grow-0 shrink-0 flip-0 rotate-0'
}

icons.argTypes = {
  context: {
    control: {
      type: ControlTypes.Select,
      options: arrayOfValues(THEME_CONTEXT)
    }
  },
  icon: {
    control: { type: ControlTypes.Select, options: arrayOfValues(ListIcons) }
  },
  prefix: {
    control: { type: ControlTypes.Select, options: arrayOfValues(IconPrefix) }
  },
  size: {
    control: {
      type: ControlTypes.Select,
      options: ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']
    }
  }
}

const transformIcon = (args) => (
  <>
    <StyledCard>
      <StyledHeading
        content="Result"
        style={{
          background: blendLinearRgb(0.8, 'rgba(64, 64, 64)', 'rgba(17, 189, 78, 0.16)'),
          color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(17, 189, 78, 0.64)')
        }}
      />
      <StyledBody>
        <Icon icon="images" size="3x" transform={args.transform} />
        <StyledNote
          style={{
            background: blendLinearRgb(0.2, 'rgba(64, 64, 64)', 'rgba(54, 197, 58, 0.08)'),
            borderColor: blendLinearRgb(0.8, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.08)'),
            color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.88)')
          }}
        >
          <Icon
            icon="graduation-cap"
            size="sm"
            fixedWidth
            context="success"
            style={{
              color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.32)'),
              marginRight: '0.5rem'
            }}
          />
          Percentage of rotation from 0° to 360°, include negative values.
        </StyledNote>
      </StyledBody>
    </StyledCard>

    <StyledCard>
      <StyledHeading
        content="Styling"
        style={{
          background: blendLinearRgb(0.2, 'rgba(64, 64, 64)', 'rgba(108, 3, 247, 0.16)'),
          color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(108, 3, 247, 0.64)')
        }}
      />
      <StyledBody>
        <StyledHeadingH4
          content="Grow"
          style={{
            color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
          }}
        />
        <Icon icon="images" size="3x" transform="grow-6" />
      </StyledBody>
    </StyledCard>

    <StyledCard>
      <StyledBody>
        <StyledHeadingH4
          content="Shrink"
          style={{
            color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
          }}
        />
        <Icon icon="images" size="3x" transform="shrink-6" />
      </StyledBody>
    </StyledCard>

    <StyledCard>
      <StyledBody>
        <StyledHeadingH4
          content="Up"
          style={{
            color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
          }}
        />
        <Icon icon="images" size="3x" transform="up-6" />
      </StyledBody>
    </StyledCard>

    <StyledCard>
      <StyledBody>
        <StyledHeadingH4
          content="Down"
          style={{
            color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
          }}
        />
        <Icon icon="images" size="3x" transform="down-6" />
      </StyledBody>
    </StyledCard>

    <StyledCard>
      <StyledBody>
        <StyledHeadingH4
          content="Flip vertical"
          style={{
            color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
          }}
        />
        <Icon icon="images" size="3x" transform="flip-v" />
      </StyledBody>
    </StyledCard>

    <StyledCard>
      <StyledBody>
        <StyledHeadingH4
          content="Flip horizontal"
          style={{
            color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
          }}
        />
        <Icon icon="images" size="3x" transform="flip-h" />
      </StyledBody>
    </StyledCard>

    <StyledCard>
      <StyledBody>
        <StyledHeadingH4
          content="Flip both"
          style={{
            color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
          }}
        />
        <Icon icon="images" size="3x" transform="flip-v flip-h" />
      </StyledBody>
    </StyledCard>

    <StyledCard>
      <StyledBody>
        <StyledHeadingH4
          content="Rotate"
          style={{
            color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
          }}
        />
        <Icon icon="images" size="3x" pull="left" transform="rotate-22" />
        <Icon icon="images" size="3x" pull="left" transform="rotate--45" />
        <Icon icon="images" size="3x" pull="left" transform="rotate--90" />
        <Icon icon="images" size="3x" pull="left" transform="rotate--270" />
      </StyledBody>
    </StyledCard>
  </>
)

export const transform = transformIcon.bind({})

transform.args = {
  transform: 'left-0 right-0 up-0  down-0 grow-0 shrink-0 flip-0 rotate-0'
}

export const layers = (args) => (
  <>
    <StyledCard>
      <StyledHeading
        content="Result"
        style={{
          background: blendLinearRgb(0.8, 'rgba(64, 64, 64)', 'rgba(17, 189, 78, 0.16)'),
          color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(17, 189, 78, 0.64)')
        }}
      />
      <StyledBody>
        <span className="fa-layers fa-fw" style={{ fontSize: '4rem' }}>
          <Icon
            icon="cloud"
            color="rgb(221,221,221,.7)"
            transform="left-2 rotate--14 shrink-5 down-2"
            style={{ fontSize: '3rem', color: 'rgb(221,221,221,.7)' }}
          />
          <Icon icon="cloud" color="rgb(0,204,188,.1)" />
          <Icon
            icon="shield-alt"
            transform="right-9 rotate-20 grow-2 down-1"
            style={{
              color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.32)')
            }}
          />
          <Icon
            icon="cloud"
            transform="down-8"
            style={{
              fontSize: '2rem',
              color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.88)')
            }}
          />
        </span>
        <StyledNote
          style={{
            background: blendLinearRgb(0.2, 'rgba(64, 64, 64)', 'rgba(54, 197, 58, 0.08)'),
            borderColor: blendLinearRgb(0.8, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.08)'),
            color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.88)')
          }}
        >
          <Icon
            icon="graduation-cap"
            size="sm"
            fixedWidth
            context="success"
            style={{
              color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.32)'),
              marginRight: '0.5rem'
            }}
          />
          Unlimited layers of icons.
        </StyledNote>
      </StyledBody>
    </StyledCard>

    <StyledCard>
      <StyledBody>
        <StyledHeadingH4
          content="Examples"
          style={{
            color: blendLinearRgb(0.2, 'rgba(0, 0, 0', 'rgba(0, 71, 255, 0.88)')
          }}
        />
        <span className="fa-layers fa-fw" style={{ fontSize: '4rem' }}>
          <Icon
            icon="cloud"
            color="rgb(221,221,221,.7)"
            transform="left-2 rotate--14 shrink-5 down-2"
            style={{ fontSize: '3rem', color: 'rgb(221,221,221,.7)' }}
          />
          <Icon icon="cloud" color="rgb(0,204,188,.1)" />
          <Icon
            icon="shield-alt"
            transform="right-9 rotate-20 grow-2 down-1"
            style={{
              color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.32)')
            }}
          />
          <Icon
            icon="cloud"
            transform="down-8"
            style={{
              fontSize: '2rem',
              color: blendLinearRgb(0.2, 'rgba(16, 16, 16)', 'rgba(54, 197, 58, 0.88)')
            }}
          />
        </span>
      </StyledBody>
    </StyledCard>
  </>
)

const StyledCard = styled(Card)`
  border-radius: 0.5rem;
  overflow: hidden;
`

const StyledHeading = styled(Heading)`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.125rem;
  padding: 1rem 1.5rem;
  margin: 0;
  text-transform: uppercase;
`

const StyledHeadingH4 = styled(StyledHeading)`
  font-size: 1rem;
  letter-spacing: 0.03125rem;
  padding: 0;
  margin-bottom: 1rem;
  text-transform: none;
`

const StyledBody = styled.div`
  padding: 1.5rem;
`

const StyledBox = styled.div`
  display: flex;
`

const StyledNote = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  letter-spacing: 0.03125rem;
  margin-top: 2rem;
  padding: 0.5rem 0.75rem;
`
