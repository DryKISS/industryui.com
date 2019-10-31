/**
 * Nivo - Bar chart
 */

// React
import React from 'react'
import { array, string } from 'prop-types'

// Nivo
import { ResponsiveBar } from '@nivo/bar'

export const BarChart = ({
  colors,
  colorBy,
  customTooltip,
  data,
  groupMode,
  index,
  keys,
  layout,
  tickValues
}) => {
  const commonProps = {
    axisBottom: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Jobs',
      legendPosition: 'middle',
      legendOffset: 32
    },
    axisLeft: {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Total',
      legendPosition: 'middle',
      legendOffset: -40
    },
    colors: { scheme: 'nivo' },
    data: data,
    height: 423,
    indexBy: 'date',
    keys: keys,
    labelTextColor: 'inherit:darker(1.4)',
    labelSkipWidth: 16,
    labelSkipHeight: 16,
    legends: [
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1
            }
          }
        ]
      }
    ],
    margin: { top: 0, right: 130, bottom: 50, left: 50 },
    padding: 0.2
  }

  return <ResponsiveBar {...commonProps} />

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
  data: array.isRequired,
  groupMode: string,
  index: string,
  layout: string
}

BarChart.defaultProps = {
  groupMode: 'stacked',
  index: 'Day',
  layout: 'vertical'
}
