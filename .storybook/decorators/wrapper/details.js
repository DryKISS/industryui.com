/**
 * Details
 */

// React
import React from 'react'

// UI
import Details from '../../../components/atoms/details/details'

const DetailsWrapper = Story => {
  return (
    <Details open title='Details'>
      <Story />
    </Details>
  )
}

export default DetailsWrapper
