/**
 * Components - Icons - Lazy Icon
 */

// React
import React, { lazy, Suspense } from 'react'
import { oneOf } from 'prop-types'

// UI
import { propTypes } from './props'

export const lazyIcons = {
  get airConditioner() {
    return lazy(() =>
      import('./components/airConditionerIcon').then((_) => ({
        default: _.AirConditionerIcon
      }))
    )
  },
  get arrowDown() {
    return lazy(() =>
      import('./components/arrowDownIcon').then((_) => ({
        default: _.ArrowDownIcon
      }))
    )
  },
  get bell() {
    return lazy(() =>
      import('./components/bellIcon').then((_) => ({ default: _.BellIcon }))
    )
  },
  get bicycle() {
    return lazy(() =>
      import('./components/bicycleIcon').then((_) => ({
        default: _.BicycleIcon
      }))
    )
  },
  get boiler() {
    return lazy(() =>
      import('./components/boilerIcon').then((_) => ({ default: _.BoilerIcon }))
    )
  },
  get checkCircle() {
    return lazy(() =>
      import('./components/checkCircleIcon').then((_) => ({
        default: _.CheckCircleIcon
      }))
    )
  },
  get checked() {
    return lazy(() =>
      import('./components/checkedIcon').then((_) => ({
        default: _.CheckedIcon
      }))
    )
  },
  get chevron() {
    return lazy(() =>
      import('./components/chevronIcon').then((_) => ({
        default: _.ChevronIcon
      }))
    )
  },
  get chevronCircleDown() {
    return lazy(() =>
      import('./components/chevronCircleDownIcon').then((_) => ({
        default: _.ChevronCircleDownIcon
      }))
    )
  },
  get chevronCircleLeft() {
    return lazy(() =>
      import('./components/chevronCircleLeftIcon').then((_) => ({
        default: _.ChevronCircleLeftIcon
      }))
    )
  },
  get chevronCircleRight() {
    return lazy(() =>
      import('./components/chevronCircleRightIcon').then((_) => ({
        default: _.ChevronCircleRightIcon
      }))
    )
  },
  get chevronCircleUp() {
    return lazy(() =>
      import('./components/chevronCircleUpIcon').then((_) => ({
        default: _.ChevronCircleUpIcon
      }))
    )
  },
  get chevronDown() {
    return lazy(() =>
      import('./components/chevronDownIcon').then((_) => ({
        default: _.ChevronDownIcon
      }))
    )
  },
  get chevronLeft() {
    return lazy(() =>
      import('./components/chevronLeftIcon').then((_) => ({
        default: _.ChevronLeftIcon
      }))
    )
  },
  get chevronRight() {
    return lazy(() =>
      import('./components/chevronRightIcon').then((_) => ({
        default: _.ChevronRightIcon
      }))
    )
  },
  get chevronUp() {
    return lazy(() =>
      import('./components/chevronUpIcon').then((_) => ({
        default: _.ChevronUpIcon
      }))
    )
  },
  get circle() {
    return lazy(() =>
      import('./components/circleIcon').then((_) => ({ default: _.CircleIcon }))
    )
  },
  get close() {
    return lazy(() =>
      import('./components/closeIcon').then((_) => ({ default: _.CloseIcon }))
    )
  },
  get coffeeMachine() {
    return lazy(() =>
      import('./components/coffeeMachineIcon').then((_) => ({
        default: _.CoffeeMachineIcon
      }))
    )
  },
  get cross() {
    return lazy(() =>
      import('./components/crossIcon').then((_) => ({ default: _.CrossIcon }))
    )
  },
  get delete() {
    return lazy(() =>
      import('./components/deleteIcon').then((_) => ({ default: _.DeleteIcon }))
    )
  },
  get desk() {
    return lazy(() =>
      import('./components/deskIcon').then((_) => ({ default: _.DeskIcon }))
    )
  },
  get desktop() {
    return lazy(() =>
      import('./components/desktopIcon').then((_) => ({
        default: _.DesktopIcon
      }))
    )
  },
  get dishwasher() {
    return lazy(() =>
      import('./components/dishwasherIcon').then((_) => ({
        default: _.DishwasherIcon
      }))
    )
  },
  get download() {
    return lazy(() =>
      import('./components/downloadIcon').then((_) => ({
        default: _.DownloadIcon
      }))
    )
  },
  get edit() {
    return lazy(() =>
      import('./components/editIcon').then((_) => ({ default: _.EditIcon }))
    )
  },
  get exclamationCircle() {
    return lazy(() =>
      import('./components/exclamationCircleIcon').then((_) => ({
        default: _.ExclamationCircleIcon
      }))
    )
  },
  get filePdf() {
    return lazy(() =>
      import('./components/filePdfIcon').then((_) => ({
        default: _.FilePdfIcon
      }))
    )
  },
  get flag() {
    return lazy(() =>
      import('./components/flagIcon').then((_) => ({ default: _.FlagIcon }))
    )
  },
  get freezer() {
    return lazy(() =>
      import('./components/freezerIcon').then((_) => ({
        default: _.FreezerIcon
      }))
    )
  },
  get fridge() {
    return lazy(() =>
      import('./components/fridgeIcon').then((_) => ({ default: _.FridgeIcon }))
    )
  },
  get fullScreen() {
    return lazy(() =>
      import('./components/fullScreenIcon').then((_) => ({
        default: _.FullScreenIcon
      }))
    )
  },
  get fuseBox() {
    return lazy(() =>
      import('./components/fuseBoxIcon').then((_) => ({
        default: _.FuseBoxIcon
      }))
    )
  },
  get group() {
    return lazy(() =>
      import('./components/groupIcon').then((_) => ({ default: _.GroupIcon }))
    )
  },
  get image() {
    return lazy(() =>
      import('./components/imageIcon').then((_) => ({ default: _.ImageIcon }))
    )
  },
  get list() {
    return lazy(() =>
      import('./components/listIcon').then((_) => ({ default: _.ListIcon }))
    )
  },
  get mapMarker() {
    return lazy(() =>
      import('./components/mapMarkerIcon').then((_) => ({
        default: _.MapMarkerIcon
      }))
    )
  },
  get meetingRoom() {
    return lazy(() =>
      import('./components/meetingRoomIcon').then((_) => ({
        default: _.MeetingRoomIcon
      }))
    )
  },
  get menuBars() {
    return lazy(() =>
      import('./components/menuBarsIcon').then((_) => ({
        default: _.MenuBarsIcon
      }))
    )
  },
  get mic() {
    return lazy(() =>
      import('./components/micIcon').then((_) => ({ default: _.MicIcon }))
    )
  },
  get microwave() {
    return lazy(() =>
      import('./components/microwaveIcon').then((_) => ({
        default: _.MicrowaveIcon
      }))
    )
  },
  get octagon() {
    return lazy(() =>
      import('./components/octagonIcon').then((_) => ({
        default: _.OctagonIcon
      }))
    )
  },
  get oven() {
    return lazy(() =>
      import('./components/ovenIcon').then((_) => ({ default: _.OvenIcon }))
    )
  },
  get paperPlane() {
    return lazy(() =>
      import('./components/paperPlaneIcon').then((_) => ({
        default: _.PaperPlaneIcon
      }))
    )
  },
  get pauseCircle() {
    return lazy(() =>
      import('./components/pauseCircleIcon').then((_) => ({
        default: _.PauseCircleIcon
      }))
    )
  },
  get playCircle() {
    return lazy(() =>
      import('./components/playCircleIcon').then((_) => ({
        default: _.PlayCircleIcon
      }))
    )
  },
  get plus() {
    return lazy(() =>
      import('./components/plusIcon').then((_) => ({ default: _.PlusIcon }))
    )
  },
  get projector() {
    return lazy(() =>
      import('./components/projectorIcon').then((_) => ({
        default: _.ProjectorIcon
      }))
    )
  },
  get pump() {
    return lazy(() =>
      import('./components/pumpIcon').then((_) => ({ default: _.PumpIcon }))
    )
  },
  get save() {
    return lazy(() =>
      import('./components/saveIcon').then((_) => ({ default: _.SaveIcon }))
    )
  },
  get search() {
    return lazy(() =>
      import('./components/searchIcon').then((_) => ({ default: _.SearchIcon }))
    )
  },
  get sensor() {
    return lazy(() =>
      import('./components/sensorIcon').then((_) => ({ default: _.SensorIcon }))
    )
  },
  get siren() {
    return lazy(() =>
      import('./components/sirenIcon').then((_) => ({ default: _.SirenIcon }))
    )
  },
  get smokeDetector() {
    return lazy(() =>
      import('./components/smokeDetectorIcon').then((_) => ({
        default: _.SmokeDetectorIcon
      }))
    )
  },
  get sprinkle() {
    return lazy(() =>
      import('./components/sprinkleIcon').then((_) => ({
        default: _.SprinkleIcon
      }))
    )
  },
  get squareClose() {
    return lazy(() =>
      import('./components/squareCloseIcon').then((_) => ({
        default: _.SquareCloseIcon
      }))
    )
  },
  get square() {
    return lazy(() =>
      import('./components/squareIcon').then((_) => ({ default: _.SquareIcon }))
    )
  },
  get star() {
    return lazy(() =>
      import('./components/starIcon').then((_) => ({ default: _.StarIcon }))
    )
  },
  get television() {
    return lazy(() =>
      import('./components/televisionIcon').then((_) => ({
        default: _.TelevisionIcon
      }))
    )
  },
  get thermometer() {
    return lazy(() =>
      import('./components/thermometerIcon').then((_) => ({
        default: _.ThermometerIcon
      }))
    )
  },
  get triangle() {
    return lazy(() =>
      import('./components/triangleIcon').then((_) => ({
        default: _.TriangleIcon
      }))
    )
  },
  get upload() {
    return lazy(() =>
      import('./components/uploadIcon').then((_) => ({ default: _.UploadIcon }))
    )
  },
  get verticalThreeDots() {
    return lazy(() =>
      import('./components/verticalThreeDotsIcon').then((_) => ({
        default: _.VerticalThreeDotsIcon
      }))
    )
  },
  get washingMachine() {
    return lazy(() =>
      import('./components/washingMachineIcon').then((_) => ({
        default: _.WashingMachineIcon
      }))
    )
  }
}
export const LazyIcon = ({ iconName, ...props }) => {
  const Icon = lazyIcons[iconName] || lazyIcons.circle

  return (
    <Suspense fallback={<></>}>
      <Icon {...props} />
    </Suspense>
  )
}

LazyIcon.propTypes = {
  iconName: oneOf(Object.keys(lazyIcons)),
  ...propTypes
}
