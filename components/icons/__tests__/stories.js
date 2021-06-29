/**
 * IUI Icons Story
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

// UI
import Text from '../../atoms/text/text'

import {
  ArrowDownIcon,
  BellIcon,
  ChevronIcon,
  ChevronCircleDownIcon,
  ChevronCircleLeftIcon,
  ChevronCircleRightIcon,
  ChevronCircleUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CheckCircleIcon,
  CheckedIcon,
  CircleIcon,
  CloseIcon,
  CrossIcon,
  DeleteIcon,
  DownloadIcon,
  EditIcon,
  ExclamationCircleIcon,
  FilePdfIcon,
  FlagIcon,
  FullScreenIcon,
  GroupIcon,
  ImageIcon,
  ListIcon,
  MapMarkerIcon,
  MenuBarsIcon,
  MicIcon,
  OctagonIcon,
  PaperPlaneIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  PlusIcon,
  SaveIcon,
  SearchIcon,
  StarIcon,
  SquareIcon,
  SquareCloseIcon,
  TriangleIcon,
  UploadIcon,
  VerticalThreeDotsIcon,
  SmokeDetectorIcon,
  SensorIcon,
  AirConditionerIcon,
  SirenIcon,
  DesktopIcon,
  MeetingRoomIcon,
  TelevisionIcon,
  ProjectorIcon,
  DeskIcon,
  CoffeeMachineIcon,
  OvenIcon,
  MicrowaveIcon,
  PumpIcon,
  BoilerIcon,
  BicycleIcon,
  DishwasherIcon,
  FreezerIcon,
  FridgeIcon,
  FuseBoxIcon,
  SprinkleIcon,
  WashingMachineIcon,
  ThermometerIcon
} from '../index'

import Readme from '../README.md'

export default {
  args: {
    colour: '#999',
    disabled: false,
    onClick: false,
    size: '22',
    hoverColour: 'false'
  },
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Icons/AllIcons'
}

export const main = (props) => {
  if (props.hoverColour === 'false') {
    delete props.hoverColour
  }

  if (props.onClick === false) {
    delete props.onClick
  } else {
    props.onClick = () => {}
  }

  if (!isNaN(Number(props.size))) {
    props.size = Number(props.size)
  }

  return (
    <Wrapper>
      <BellIcon {...props} />
      <ArrowDownIcon {...props} />
      <CircleIcon {...props} />
      <CloseIcon {...props} />
      <EditIcon {...props} />
      <SquareIcon {...props} />
      <SquareCloseIcon {...props} />
      <ChevronIcon {...props} />
      <CrossIcon {...props} />
      <FlagIcon {...props} />
      <FilePdfIcon {...props} />
      <GroupIcon {...props} />
      <ImageIcon {...props} />
      <FullScreenIcon {...props} />
      <SaveIcon {...props} />
      <DeleteIcon {...props} />
      <DownloadIcon {...props} />
      <CheckCircleIcon {...props} />
      <OctagonIcon {...props} />
      <SearchIcon {...props} />

      <Text content="Menu Bar" />
      <MenuBarsIcon {...props} />

      <TriangleIcon {...props} />
      <MapMarkerIcon {...props} />
      <PaperPlaneIcon {...props} />
      <ChevronUpIcon {...props} />
      <ChevronRightIcon {...props} />
      <ChevronDownIcon {...props} />
      <ChevronLeftIcon {...props} />
      <PauseCircleIcon {...props} />
      <ChevronCircleLeftIcon {...props} />
      <ChevronCircleUpIcon {...props} />
      <ChevronCircleDownIcon {...props} />
      <ChevronCircleRightIcon {...props} />
      <PlayCircleIcon {...props} />
      <PlusIcon {...props} />
      <CheckedIcon {...props} />
      <StarIcon {...props} />

      <Text content="List" />
      <ListIcon {...props} />

      <MicIcon {...props} />
      <UploadIcon {...props} />

      <Text content="Vertical Three Dots" />
      <VerticalThreeDotsIcon {...props} />

      <Text content="Exclamation Circle" />
      <ExclamationCircleIcon {...props} />

      <ThermometerIcon {...props} />
      <SensorIcon {...props} />
      <SmokeDetectorIcon {...props} />
      <AirConditionerIcon {...props} />
      <SirenIcon {...props} />
      <DesktopIcon {...props} />
      <MeetingRoomIcon {...props} />
      <TelevisionIcon {...props} />
      <ProjectorIcon {...props} />
      <DeskIcon {...props} />
      <CoffeeMachineIcon {...props} />
      <MicrowaveIcon {...props} />
      <OvenIcon {...props} />
      <PumpIcon {...props} />
      <BoilerIcon {...props} />
      <BicycleIcon {...props} />
      <DishwasherIcon {...props} />
      <FreezerIcon {...props} />
      <FridgeIcon {...props} />
      <FuseBoxIcon {...props} />
      <SprinkleIcon {...props} />
      <WashingMachineIcon {...props} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1rem;
`
