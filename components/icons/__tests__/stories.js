/**
 * IUI Icons Story
 */

// Style
import styled from 'styled-components'

// UI
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
  VerticalThreeDotsIcon
} from 'components'

import Readme from '../README.md'

export default {
  args: {
    colour: '#999999',
    disabled: false,
    onClick: false,
    size: '22',
    hoverColour: 'false'
  },
  title: 'Icons/AllIcons',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const main = props => {
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1rem;
`
