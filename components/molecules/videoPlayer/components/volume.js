import styled from 'styled-components'
import { useState } from 'react'

import VolumeIcon from '../../../icons/components/volume'
import ButtonHOC from './ButtonHOC'
const Volume = ({ isShowSetting, volume, onChange }) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <VolumeWrapper>
      {!isShowSetting && isShow && (
        <input type="range" min="0" max="100" value={volume} onChange={onChange} />
      )}
      <ButtonHOC onClick={() => setIsShow(!isShow)}>
        <VolumeIcon colour="white" />
      </ButtonHOC>
    </VolumeWrapper>
  )
}

const VolumeWrapper = styled.div`
  position: relative;
  top: 10px;

  input[type='range'] {
    position: absolute;
    top: -75px;
    left: -45px;
    transform: rotate(270deg);
  }
`

export default Volume
