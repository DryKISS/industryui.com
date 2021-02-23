/**
 * Components - Icons - Lazy Icon
 */

// React
import dynamic from 'next/dynamic'

import { oneOf } from 'prop-types'
import { useEffect, useState } from 'react'
import { propTypes } from './props'

// UI

export const lazyIcons = {
  get airConditioner () {
    return dynamic(() => import('./components/airConditioner'))
  },
  get arrowDown () {
    return dynamic(() => import('./components/arrowDown'))
  },
  get bell () {
    return dynamic(() => import('./components/bell'))
  },
  get bicycle () {
    return dynamic(() => import('./components/bicycle'))
  },
  get boiler () {
    return dynamic(() => import('./components/boiler').then(_ => _.BoilerIcon))
  },
  get checkCircle () {
    return dynamic(() => import('./components/checkCircle').then(_ => _.CheckCircleIcon))
  },
  get checked () {
    return dynamic(() => import('./components/checked').then(_ => _.CheckedIcon))
  },
  get chevron () {
    return dynamic(() => import('./components/chevron').then(_ => _.ChevronIcon))
  },
  get chevronCircleDown () {
    return dynamic(() =>
      import('./components/chevronCircleDown').then(_ => _.ChevronCircleDownIcon)
    )
  },
  get chevronCircleLeft () {
    return dynamic(() =>
      import('./components/chevronCircleLeft').then(_ => _.ChevronCircleLeftIcon)
    )
  },
  get chevronCircleRight () {
    return dynamic(() =>
      import('./components/chevronCircleRight').then(_ => _.ChevronCircleRightIcon)
    )
  },
  get chevronCircleUp () {
    return dynamic(() =>
      import('./components/chevronCircleUp').then(_ => _.ChevronCircleUpIcon)
    )
  },
  get chevronDown () {
    return dynamic(() => import('./components/chevronDown').then(_ => _.ChevronDownIcon))
  },
  get chevronLeft () {
    return dynamic(() => import('./components/chevronLeft').then(_ => _.ChevronLeftIcon))
  },
  get chevronRight () {
    return dynamic(() => import('./components/chevronRight').then(_ => _.ChevronRightIcon))
  },
  get chevronUp () {
    return dynamic(() => import('./components/chevronUp').then(_ => _.ChevronUpIcon))
  },
  get circle () {
    return dynamic(() => import('./components/circle').then(_ => _.CircleIcon))
  },
  get close () {
    return dynamic(() => import('./components/close').then(_ => _.CloseIcon))
  },
  get coffeeMachine () {
    return dynamic(() => import('./components/coffeeMachine').then(_ => _.CoffeeMachineIcon))
  },
  get cross () {
    return dynamic(() => import('./components/cross').then(_ => _.CrossIcon))
  },
  get delete () {
    return dynamic(() => import('./components/delete').then(_ => _.DeleteIcon))
  },
  get desk () {
    return dynamic(() => import('./components/desk').then(_ => _.DeskIcon))
  },
  get desktop () {
    return dynamic(() => import('./components/desktop').then(_ => _.DesktopIcon))
  },
  get dishwasher () {
    return dynamic(() => import('./components/dishwasher').then(_ => _.DishwasherIcon))
  },
  get download () {
    return dynamic(() => import('./components/download').then(_ => _.DownloadIcon))
  },
  get edit () {
    return dynamic(() => import('./components/edit').then(_ => _.EditIcon))
  },
  get exclamationCircle () {
    return dynamic(() =>
      import('./components/exclamationCircle').then(_ => _.ExclamationCircleIcon)
    )
  },
  get filePdf () {
    return dynamic(() => import('./components/filePdf').then(_ => _.FilePdfIcon))
  },
  get flag () {
    return dynamic(() => import('./components/flag').then(_ => _.FlagIcon))
  },
  get freezer () {
    return dynamic(() => import('./components/freezer').then(_ => _.FreezerIcon))
  },
  get fridge () {
    return dynamic(() => import('./components/fridge').then(_ => _.FridgeIcon))
  },
  get fullScreen () {
    return dynamic(() => import('./components/fullScreen').then(_ => _.FullScreenIcon))
  },
  get fuseBox () {
    return dynamic(() => import('./components/fuseBox').then(_ => _.FuseBoxIcon))
  },
  get group () {
    return dynamic(() => import('./components/group').then(_ => _.GroupIcon))
  },
  get image () {
    return dynamic(() => import('./components/image').then(_ => _.ImageIcon))
  },
  get list () {
    return dynamic(() => import('./components/list').then(_ => _.ListIcon))
  },
  get mapMarker () {
    return dynamic(() => import('./components/mapMarker').then(_ => _.MapMarkerIcon))
  },
  get meetingRoom () {
    return dynamic(() => import('./components/meetingRoom').then(_ => _.MeetingRoomIcon))
  },
  get menuBars () {
    return dynamic(() => import('./components/menuBars').then(_ => _.MenuBarsIcon))
  },
  get mic () {
    return dynamic(() => import('./components/mic').then(_ => _.MicIcon))
  },
  get microwave () {
    return dynamic(() => import('./components/microwave').then(_ => _.MicrowaveIcon))
  },
  get octagon () {
    return dynamic(() => import('./components/octagon').then(_ => _.OctagonIcon))
  },
  get oven () {
    return dynamic(() => import('./components/oven').then(_ => _.OvenIcon))
  },
  get paperPlane () {
    return dynamic(() => import('./components/paperPlane').then(_ => _.PaperPlaneIcon))
  },
  get pauseCircle () {
    return dynamic(() => import('./components/pauseCircle').then(_ => _.PauseCircleIcon))
  },
  get playCircle () {
    return dynamic(() => import('./components/playCircle').then(_ => _.PlayCircleIcon))
  },
  get plus () {
    return dynamic(() => import('./components/plus').then(_ => _.PlusIcon))
  },
  get projector () {
    return dynamic(() => import('./components/projector').then(_ => _.ProjectorIcon))
  },
  get pump () {
    return dynamic(() => import('./components/pump').then(_ => _.PumpIcon))
  },
  get save () {
    return dynamic(() => import('./components/save').then(_ => _.SaveIcon))
  },
  get search () {
    return dynamic(() => import('./components/search').then(_ => _.SearchIcon))
  },
  get sensor () {
    return dynamic(() => import('./components/sensor').then(_ => _.SensorIcon))
  },
  get siren () {
    return dynamic(() => import('./components/siren').then(_ => _.SirenIcon))
  },
  get smokeDetector () {
    return dynamic(() => import('./components/smokeDetector').then(_ => _.SmokeDetectorIcon))
  },
  get sprinkle () {
    return dynamic(() => import('./components/sprinkle').then(_ => _.SprinkleIcon))
  },
  get squareClose () {
    return dynamic(() => import('./components/squareClose').then(_ => _.SquareCloseIcon))
  },
  get square () {
    return dynamic(() => import('./components/square').then(_ => _.SquareIcon))
  },
  get star () {
    return dynamic(() => import('./components/star').then(_ => _.StarIcon))
  },
  get television () {
    return dynamic(() => import('./components/television').then(_ => _.TelevisionIcon))
  },
  get thermometer () {
    return dynamic(() => import('./components/thermometer').then(_ => _.ThermometerIcon))
  },
  get triangle () {
    return dynamic(() => import('./components/triangle').then(_ => _.TriangleIcon))
  },
  get upload () {
    return dynamic(() => import('./components/upload').then(_ => _.UploadIcon))
  },
  get verticalThreeDots () {
    return dynamic(() =>
      import('./components/verticalThreeDots').then(_ => _.VerticalThreeDotsIcon)
    )
  },
  get washingMachine () {
    return dynamic(() => import('./components/washingMachine').then(_ => _.WashingMachineIcon))
  }
}
export const LazyIcon = ({ iconName, ...props }) => {
  const [LoadedIcon, setLoadedIcon] = useState(null)
  const loadModule = async () => {
    if (LoadedIcon === null) {
      const Icon = await (lazyIcons[iconName] ?? lazyIcons.circle)
      setLoadedIcon(Icon)
    }
  }

  useEffect(() => {
    loadModule()
    return () => {}
  }, [])

  return LoadedIcon ? <LoadedIcon {...props} /> : <></>
}

LazyIcon.propTypes = {
  iconName: oneOf(Object.keys(lazyIcons)),
  ...propTypes
}
