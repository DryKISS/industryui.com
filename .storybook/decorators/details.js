/**
 * Details
 */

// React
import React from 'react'

// UI
import  Details2  from '../../components/atoms/details2/details2'

const Details = Story => {
  return (
    <Details2 open title='Details'>
      <Story />
    </Details2>
  )
}
 export default Details
