import { oneOf } from 'prop-types'
import { lazy, Suspense } from 'react'
import { commonIconPropTypes } from './propTypes'

export const lazyIcons = {
  get airConditioner () {
    return lazy(() => import('./airConditionerIcon').then(_ => ({ default: _.AirConditionerIcon })))
  },
  get arrowDown () {
    return lazy(() => import('./arrowDownIcon').then(_ => ({ default: _.ArrowDownIcon })))
  },
  get bell () {
    return lazy(() => import('./bellIcon').then(_ => ({ default: _.BellIcon })))
  },
  get bicycle () {
    return lazy(() => import('./bicycleIcon').then(_ => ({ default: _.BicycleIcon })))
  },
  get boiler () {
    return lazy(() => import('./boilerIcon').then(_ => ({ default: _.BoilerIcon })))
  },
  get checkCircle () {
    return lazy(() => import('./checkCircleIcon').then(_ => ({ default: _.CheckCircleIcon })))
  },
  get checked () {
    return lazy(() => import('./checkedIcon').then(_ => ({ default: _.CheckedIcon })))
  },
  get chevron () {
    return lazy(() => import('./chevronIcon').then(_ => ({ default: _.ChevronIcon })))
  },
  get chevronCircleDown () {
    return lazy(() =>
      import('./chevronCircleDownIcon').then(_ => ({ default: _.ChevronCircleDownIcon }))
    )
  },
  get chevronCircleLeft () {
    return lazy(() =>
      import('./chevronCircleLeftIcon').then(_ => ({ default: _.ChevronCircleLeftIcon }))
    )
  },
  get chevronCircleRight () {
    return lazy(() =>
      import('./chevronCircleRightIcon').then(_ => ({ default: _.ChevronCircleRightIcon }))
    )
  },
  get chevronCircleUp () {
    return lazy(() =>
      import('./chevronCircleUpIcon').then(_ => ({ default: _.ChevronCircleUpIcon }))
    )
  },
  get chevronDown () {
    return lazy(() => import('./chevronDownIcon').then(_ => ({ default: _.ChevronDownIcon })))
  },
  get chevronLeft () {
    return lazy(() => import('./chevronLeftIcon').then(_ => ({ default: _.ChevronLeftIcon })))
  },
  get chevronRight () {
    return lazy(() => import('./chevronRightIcon').then(_ => ({ default: _.ChevronRightIcon })))
  },
  get chevronUp () {
    return lazy(() => import('./chevronUpIcon').then(_ => ({ default: _.ChevronUpIcon })))
  },
  get circle () {
    return lazy(() => import('./circleIcon').then(_ => ({ default: _.CircleIcon })))
  },
  get close () {
    return lazy(() => import('./closeIcon').then(_ => ({ default: _.CloseIcon })))
  },
  get coffeeMachine () {
    return lazy(() => import('./coffeeMachineIcon').then(_ => ({ default: _.CoffeeMachineIcon })))
  },
  get cross () {
    return lazy(() => import('./crossIcon').then(_ => ({ default: _.CrossIcon })))
  },
  get delete () {
    return lazy(() => import('./deleteIcon').then(_ => ({ default: _.DeleteIcon })))
  },
  get desk () {
    return lazy(() => import('./deskIcon').then(_ => ({ default: _.DeskIcon })))
  },
  get desktop () {
    return lazy(() => import('./desktopIcon').then(_ => ({ default: _.DesktopIcon })))
  },
  get dishwasher () {
    return lazy(() => import('./dishwasherIcon').then(_ => ({ default: _.DishwasherIcon })))
  },
  get download () {
    return lazy(() => import('./downloadIcon').then(_ => ({ default: _.DownloadIcon })))
  },
  get edit () {
    return lazy(() => import('./editIcon').then(_ => ({ default: _.EditIcon })))
  },
  get exclamationCircle () {
    return lazy(() =>
      import('./exclamationCircleIcon').then(_ => ({ default: _.ExclamationCircleIcon }))
    )
  },
  get filePdf () {
    return lazy(() => import('./filePdfIcon').then(_ => ({ default: _.FilePdfIcon })))
  },
  get flag () {
    return lazy(() => import('./flagIcon').then(_ => ({ default: _.FlagIcon })))
  },
  get freezer () {
    return lazy(() => import('./freezerIcon').then(_ => ({ default: _.FreezerIcon })))
  },
  get fridge () {
    return lazy(() => import('./fridgeIcon').then(_ => ({ default: _.FridgeIcon })))
  },
  get fullScreen () {
    return lazy(() => import('./fullScreenIcon').then(_ => ({ default: _.FullScreenIcon })))
  },
  get fuseBox () {
    return lazy(() => import('./fuseBoxIcon').then(_ => ({ default: _.FuseBoxIcon })))
  },
  get group () {
    return lazy(() => import('./groupIcon').then(_ => ({ default: _.GroupIcon })))
  },
  get image () {
    return lazy(() => import('./imageIcon').then(_ => ({ default: _.ImageIcon })))
  },
  get list () {
    return lazy(() => import('./listIcon').then(_ => ({ default: _.ListIcon })))
  },
  get mapMarker () {
    return lazy(() => import('./mapMarkerIcon').then(_ => ({ default: _.MapMarkerIcon })))
  },
  get meetingRoom () {
    return lazy(() => import('./meetingRoomIcon').then(_ => ({ default: _.MeetingRoomIcon })))
  },
  get menuBars () {
    return lazy(() => import('./menuBarsIcon').then(_ => ({ default: _.MenuBarsIcon })))
  },
  get mic () {
    return lazy(() => import('./micIcon').then(_ => ({ default: _.MicIcon })))
  },
  get microwave () {
    return lazy(() => import('./microwaveIcon').then(_ => ({ default: _.MicrowaveIcon })))
  },
  get octagon () {
    return lazy(() => import('./octagonIcon').then(_ => ({ default: _.OctagonIcon })))
  },
  get oven () {
    return lazy(() => import('./ovenIcon').then(_ => ({ default: _.OvenIcon })))
  },
  get paperPlane () {
    return lazy(() => import('./paperPlaneIcon').then(_ => ({ default: _.PaperPlaneIcon })))
  },
  get pauseCircle () {
    return lazy(() => import('./pauseCircleIcon').then(_ => ({ default: _.PauseCircleIcon })))
  },
  get playCircle () {
    return lazy(() => import('./playCircleIcon').then(_ => ({ default: _.PlayCircleIcon })))
  },
  get plus () {
    return lazy(() => import('./plusIcon').then(_ => ({ default: _.PlusIcon })))
  },
  get projector () {
    return lazy(() => import('./projectorIcon').then(_ => ({ default: _.ProjectorIcon })))
  },
  get pump () {
    return lazy(() => import('./pumpIcon').then(_ => ({ default: _.PumpIcon })))
  },
  get save () {
    return lazy(() => import('./saveIcon').then(_ => ({ default: _.SaveIcon })))
  },
  get search () {
    return lazy(() => import('./searchIcon').then(_ => ({ default: _.SearchIcon })))
  },
  get sensor () {
    return lazy(() => import('./sensorIcon').then(_ => ({ default: _.SensorIcon })))
  },
  get siren () {
    return lazy(() => import('./sirenIcon').then(_ => ({ default: _.SirenIcon })))
  },
  get smokeDetector () {
    return lazy(() => import('./smokeDetectorIcon').then(_ => ({ default: _.SmokeDetectorIcon })))
  },
  get sprinkle () {
    return lazy(() => import('./sprinkleIcon').then(_ => ({ default: _.SprinkleIcon })))
  },
  get squareClose () {
    return lazy(() => import('./squareCloseIcon').then(_ => ({ default: _.SquareCloseIcon })))
  },
  get square () {
    return lazy(() => import('./squareIcon').then(_ => ({ default: _.SquareIcon })))
  },
  get star () {
    return lazy(() => import('./starIcon').then(_ => ({ default: _.StarIcon })))
  },
  get television () {
    return lazy(() => import('./televisionIcon').then(_ => ({ default: _.TelevisionIcon })))
  },
  get thermometer () {
    return lazy(() => import('./thermometerIcon').then(_ => ({ default: _.ThermometerIcon })))
  },
  get triangle () {
    return lazy(() => import('./triangleIcon').then(_ => ({ default: _.TriangleIcon })))
  },
  get upload () {
    return lazy(() => import('./uploadIcon').then(_ => ({ default: _.UploadIcon })))
  },
  get verticalThreeDots () {
    return lazy(() =>
      import('./verticalThreeDotsIcon').then(_ => ({ default: _.VerticalThreeDotsIcon }))
    )
  },
  get washingMachine () {
    return lazy(() => import('./washingMachineIcon').then(_ => ({ default: _.WashingMachineIcon })))
  }
}
const NotFound = () => <div>icon not found !</div>
export const LazyIcon = ({ iconName, ...props }) => {
  const Icon = lazyIcons[iconName] || NotFound

  return (
    <Suspense fallback={<></>}>
      <Icon {...props} />
    </Suspense>
  )
}

LazyIcon.propTypes = {
  iconName: oneOf(Object.keys(lazyIcons)),
  ...commonIconPropTypes
}
