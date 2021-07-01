/**
 * IUI Icons Story
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

// UI
import Text from '../../atoms/text/text'

import AirConditionerIcon from '../components/airConditioner'
import ArrowDownIcon from '../components/arrowDown'
import BellIcon from '../components/bell'
import BicycleIcon from '../components/bicycle'
import BoilerIcon from '../components/boiler'
import ChevronIcon from '../components/chevron'
import ChevronDownIcon from '../components/chevronDown'
import ChevronLeftIcon from '../components/chevronLeft'
import ChevronRightIcon from '../components/chevronRight'
import ChevronUpIcon from '../components/chevronUp'
import ChevronCircleDownIcon from '../components/chevronCircleDown'
import ChevronCircleLeftIcon from '../components/chevronCircleLeft'
import ChevronCircleRightIcon from '../components/chevronCircleRight'
import ChevronCircleUpIcon from '../components/chevronCircleUp'
import CheckCircleIcon from '../components/checkCircle'
import CheckedIcon from '../components/checked'
import CircleIcon from '../components/circle'
import CloseIcon from '../components/close'
import CoffeeMachineIcon from '../components/coffeeMachine'
import CrossIcon from '../components/cross'
import DeleteIcon from '../components/delete'
import DesktopIcon from '../components/desktop'
import DownloadIcon from '../components/download'
import EditIcon from '../components/edit'
import ExclamationCircleIcon from '../components/exclamationCircle'
import FilePdfIcon from '../components/filePdf'
import FlagIcon from '../components/flag'
import FullScreenIcon from '../components/fullScreen'
import GroupIcon from '../components/group'
import ImageIcon from '../components/image'
import ListIcon from '../components/list'
import MapMarkerIcon from '../components/mapMarker'
import MenuBarsIcon from '../components/menuBars'
import MicIcon from '../components/mic'
import OctagonIcon from '../components/octagon'
import OvenIcon from '../components/oven'
import PaperPlaneIcon from '../components/paperPlane'
import PauseCircleIcon from '../components/pauseCircle'
import PlayCircleIcon from '../components/playCircle'
import PlusIcon from '../components/plus'
import ProjectorIcon from '../components/projector'
import SaveIcon from '../components/save'
import SearchIcon from '../components/search'
import StarIcon from '../components/star'
import SprinkleIcon from '../components/sprinkle'
import SquareIcon from '../components/square'
import SquareCloseIcon from '../components/squareClose'
import TriangleIcon from '../components/triangle'
import UploadIcon from '../components/upload'
import VerticalThreeDotsIcon from '../components/verticalThreeDots'
import ThermometerIcon from '../components/thermometer'
import SensorIcon from '../components/sensor'
import SmokeDetectorIcon from '../components/smokeDetector'
import SirenIcon from '../components/siren'
import MeetingRoomIcon from '../components/meetingRoom'
import TelevisionIcon from '../components/television'
import DeskIcon from '../components/desk'
import MicrowaveIcon from '../components/microwave'
import PumpIcon from '../components/pump'
import DishwasherIcon from '../components/dishwasher'
import FreezerIcon from '../components/freezer'
import FridgeIcon from '../components/fridge'
import FuseBoxIcon from '../components/fuseBox'
import WashingMachineIcon from '../components/washingMachine'

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

      <ListIcon {...props} />

      <MicIcon {...props} />
      <UploadIcon {...props} />

      <VerticalThreeDotsIcon {...props} />

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
