/**
 * ReactSelect
 */

// React
import React from 'react'

// Styled Components
import styled from 'styled-components'
// UI
import { ReactSelect } from '../'
import Readme from '../README.md'
import { useChange } from '../../../../'

import { OPTIONS } from '../__mocks__/options'
export default {
  title: 'Atoms/Form/ReactSelect',
  component: ReactSelect,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const Wrapper = styled.div`
  width: 400px;
`

export const Single = () => {
  const [change] = useChange({ select: {} })
  return (
    <Wrapper>
      <ReactSelect label='React Select' options={OPTIONS} isClearable id='select' change={change} />
    </Wrapper>
  )
}

export const Multi = () => {
  const [change] = useChange({ select: [] })
  return (
    <Wrapper>
      <ReactSelect
        label='React Select'
        isMulti
        options={OPTIONS}
        isClearable
        id='select'
        change={change}
      />
    </Wrapper>
  )
}

export const withDefaultValue = () => {
  const [change] = useChange({ select: {} })
  return (
    <Wrapper>
      <ReactSelect
        label='React Select'
        options={OPTIONS}
        isClearable
        id='select'
        change={change}
        defaultValue={OPTIONS[0]}
      />
    </Wrapper>
  )
}
