/**
 * Nivo - Bar chart
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Nivo
import { Bar } from '@nivo/bar'
import { generateCountriesData, sets } from '@nivo/generators'

export const BarChart = ({
  colors,
  colorBy,
  customTooltip,
  data,
  groupMode,
  index,
  layout,
  tickValues
}) => {
  const theme = {
    axis: {
      ticks: {
        line: {
          stroke: '#e9ecee',
          strokeWidth: 0
        },
        text: {
          fill: '#919eab',
          fontFamily: 'Nunito'
        }
      }
    },
    grid: {
      line: {
        stroke: '#e9ecee',
        strokeWidth: 0.5
      }
    },
    legends: {
      text: {
        fontFamily: 'Nunito'
      }
    }
  }

  const keys = ['donut']
  const commonProps = {
    width: 900,
    height: 500,
    margin: { top: 60, right: 80, bottom: 60, left: 80 },
    data: generateCountriesData(keys, { size: 7 }),
    indexBy: 'country',
    keys,
    padding: 0.2,
    labelTextColor: 'inherit:darker(1.4)',
    labelSkipWidth: 16,
    labelSkipHeight: 16
  }

  return <Bar {...commonProps} />

  // return (
  //   <ResponsiveBar
  //     animate
  //     borderColor='#919eab'
  //     // colors={colors}
  //     // colorBy={colorBy}
  //     data={generateCountriesData(['hot dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut'], {
  //       size: 7
  //     })}
  //     groupMode={groupMode}
  //     indexBy='country'
  //     keys={['hot dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut']}
  //     margin={{ top: 60, right: 80, bottom: 60, left: 80 }}
  //     layout={layout}
  //     padding={0.2}
  //     axisBottom={{
  //       orient: 'bottom',
  //       tickSize: 5,
  //       tickPadding: 5,
  //       tickRotation: 0,
  //       legend: '',
  //       legendPosition: 'middle',
  //       legendOffset: 36
  //     }}
  //     axisLeft={{
  //       tickValues: tickValues,
  //       orient: 'left',
  //       tickPadding: 0,
  //       tickRotation: 0,
  //       legend: '',
  //       legendPosition: 'start',
  //       legendOffset: -40
  //     }}
  //     enableGridY
  //     gridYValues={tickValues}
  //     labelSkipWidth={16}
  //     labelSkipHeight={16}
  //     labelTextColor='#fff'
  //     enableLabel={false}
  //     motionStiffness={90}
  //     motionDamping={15}
  //     theme={theme}
  //     tooltip={customTooltip || null}
  //     // legends={[
  //     //   {
  //     //     dataFrom: "keys",
  //     //     anchor: "top-left",
  //     //     direction: "row",
  //     //     justify: false,
  //     //     translateX: -10,
  //     //     translateY: -30,
  //     //     itemsSpacing: 32,
  //     //     itemWidth: 100,
  //     //     itemHeight: 20,
  //     //     itemDirection: "left-to-right",
  //     //     itemOpacity: 0.85,
  //     //     itemTextColor: "#919eab",
  //     //     symbolSize: 10,
  //     //     symbolShape: "circle",
  //     //     effects: [
  //     //       {
  //     //         on: "hover",
  //     //         style: {
  //     //           itemOpacity: 1
  //     //         }
  //     //       }
  //     //     ]
  //     //   }
  //     // ]}
  //   />
  // )
}

BarChart.propTypes = {
  groupMode: string,
  index: string,
  layout: string
}

BarChart.defaultProps = {
  groupMode: 'stacked',
  index: 'Day',
  layout: 'vertical'
}
