/**
 * Charts - Pie - Tests - Story
 */

// Storybook
import { boolean, select } from '@storybook/addon-knobs'

// Nivo
import { colorSchemes } from '@nivo/colors'

// UI
import { PieChart } from '../'
import Readme from '../README.md'

// Mocks
import { Data, Data2 } from '../__mocks__/nivoPie'

// Styled Components
import styled from 'styled-components'

export default {
  title: 'Molecules/Charts/Nivo/Pie',
  component: PieChart,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    colorScheme: select('colorScheme', Object.keys(colorSchemes), props.colorScheme || 'nivo'),
    cornerRadius: select('cornerRadius (px)', [...Array(46).keys()], props.cornerRadius || 3),
    enableSlicesLabels: boolean('enableSlicesLabels', props.enableSlicesLabels || true),
    enableRadialLabels: boolean('enableRadialLabels', props.enableRadialLabels || true),
    innerRadius: select(
      'innerRadius',
      [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
      props.innerRadius || 0.5
    ),
    isInteractive: boolean('isInteractive (tooltip)', props.isInteractive || true),
    padAngle: select('padAngle', [0.4, 0.5, 0.7, 0.8, ...Array(46).keys()], props.padAngle || 0.7),
    radialLabelsLinkStrokeWidth: select(
      'radialLabelsLinkStrokeWidth (px)',
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      props.radialLabelsLinkStrokeWidth || 1
    ),
    radialLabelsTextXOffset: select(
      'radialLabelsTextXOffset (px)',
      [...Array(11).keys()],
      props.radialLabelsTextXOffset || 6
    ),
    radialLabelsLinkHorizontalLength: select(
      'radialLabelsLinkHorizontalLength (px)',
      [...Array(31).keys()],
      props.radialLabelsLinkHorizontalLength || 24
    ),
    radialLabelsLinkDiagonalLength: select(
      'radialLabelsLinkDiagonalLength',
      [...Array(37).keys()],
      props.radialLabelsLinkDiagonalLength || 18
    ),
    radialLabelsLinkOffset: select(
      'radialLabelsLinkOffset',
      [...Array(31).keys()],
      props.radialLabelsLinkOffset || 0
    ),
    showLegend: boolean('showLegend', props.showLegend || true),
    sortByValue: boolean('sortByValue', props.sortByValue || false),
    data: Data,
    ...props
  }
  return (
    <StyledWrapper>
      <PieChart {...defaultProps} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  text-align: center;
  height: 500px;
`
/// storeis
export const main = () => {
  return <BaseComponent />
}

export const OtherDataPie = () => {
  return <BaseComponent data={Data2} />
}
