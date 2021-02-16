import { oneOf } from 'prop-types'
import { lazy, Suspense } from 'react'

export const lazyComponents = {
  get arrowDown () {
    return lazy(() => import('./arrowDownIcon').then(_ => ({ default: _.ArrowDownIcon })))
  },
  get thermometer () {
    return lazy(() => import('./thermometerIcon').then(_ => ({ default: _.ThermometerIcon })))
  },
  get bell () {
    return lazy(() => import('./bellIcon').then(_ => ({ default: _.BellIcon })))
  },
  get chevron () {
    return lazy(() => import('./chevronIcon').then(_ => ({ default: _.ChevronIcon })))
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
  get checkCircle () {
    return lazy(() => import('./checkCircleIcon').then(_ => ({ default: _.CheckCircleIcon })))
  },
  get checked () {
    return lazy(() => import('./checkedIcon').then(_ => ({ default: _.CheckedIcon })))
  },
  get circle () {
    return lazy(() => import('./circleIcon').then(_ => ({ default: _.CircleIcon })))
  },
  get close () {
    return lazy(() => import('./closeIcon').then(_ => ({ default: _.CloseIcon })))
  },
  get cross () {
    return lazy(() => import('./crossIcon').then(_ => ({ default: _.CrossIcon })))
  },
  get delete () {
    return lazy(() => import('./deleteIcon').then(_ => ({ default: _.DeleteIcon })))
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
  get fullScreen () {
    return lazy(() => import('./fullScreenIcon').then(_ => ({ default: _.FullScreenIcon })))
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
  get menuBars () {
    return lazy(() => import('./menuBarsIcon').then(_ => ({ default: _.MenuBarsIcon })))
  },
  get mic () {
    return lazy(() => import('./micIcon').then(_ => ({ default: _.MicIcon })))
  },
  get octagon () {
    return lazy(() => import('./octagonIcon').then(_ => ({ default: _.OctagonIcon })))
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
  get save () {
    return lazy(() => import('./saveIcon').then(_ => ({ default: _.SaveIcon })))
  },
  get search () {
    return lazy(() => import('./searchIcon').then(_ => ({ default: _.SearchIcon })))
  },
  get star () {
    return lazy(() => import('./starIcon').then(_ => ({ default: _.StarIcon })))
  },
  get square () {
    return lazy(() => import('./squareIcon').then(_ => ({ default: _.SquareIcon })))
  },
  get squareClose () {
    return lazy(() => import('./squareCloseIcon').then(_ => ({ default: _.SquareCloseIcon })))
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
  get bicycle () {
    return lazy(() => import('./bicycle').then(_ => ({ default: _.BicycleIcon })))
  },
  get dishwasher () {
    return lazy(() => import('./dishwasher').then(_ => ({ default: _.DishwasherIcon })))
  },
  get freezer () {
    return lazy(() => import('./freezer').then(_ => ({ default: _.FreezerIcon })))
  },
  get fridge () {
    return lazy(() => import('./fridge').then(_ => ({ default: _.FridgeIcon })))
  },
  get fuseBox () {
    return lazy(() => import('./fuseBox').then(_ => ({ default: _.FuseBoxIcon })))
  },
  get sprinkle () {
    return lazy(() => import('./sprinkle').then(_ => ({ default: _.SprinkleIcon })))
  },
  get washingMachine () {
    return lazy(() => import('./washingMachine').then(_ => ({ default: _.WashingMachineIcon })))
  }
}
const NotFound = () => <div>icon not found !</div>
export const LazyIcon = ({ iconName, ...props }) => {
  const Icon = lazyComponents[iconName] || NotFound

  return (
    <Suspense fallback={<></>}>
      <Icon {...props} />
    </Suspense>
  )
}

LazyIcon.propTypes = {
  iconName: oneOf(Object.keys(lazyComponents))
}
