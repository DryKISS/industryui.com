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
    return dynamic(() =>
      import('./components/airConditionerIcon').then(_ => ( _.AirConditionerIcon
      ))
    )
  },
  get arrowDown () {
    return dynamic(() =>
      import('./components/arrowDownIcon').then(_ => ( _.ArrowDownIcon
      ))
    )
  },
  get bell () {
    return dynamic(() => import('./components/bellIcon').then(_ => ( _.BellIcon )))
  },
  get bicycle () {
    return dynamic(() =>
      import('./components/bicycleIcon').then(_ => ( _.BicycleIcon
      ))
    )
  },
  get boiler () {
    return dynamic(() => import('./components/boilerIcon').then(_ => ( _.BoilerIcon )))
  },
  get checkCircle () {
    return dynamic(() =>
      import('./components/checkCircleIcon').then(_ => ( _.CheckCircleIcon
      ))
    )
  },
  get checked () {
    return dynamic(() =>
      import('./components/checkedIcon').then(_ => ( _.CheckedIcon
      ))
    )
  },
  get chevron () {
    return dynamic(() =>
      import('./components/chevronIcon').then(_ => ( _.ChevronIcon
      ))
    )
  },
  get chevronCircleDown () {
    return dynamic(() =>
      import('./components/chevronCircleDownIcon').then(_ => ( _.ChevronCircleDownIcon
      ))
    )
  },
  get chevronCircleLeft () {
    return dynamic(() =>
      import('./components/chevronCircleLeftIcon').then(_ => ( _.ChevronCircleLeftIcon
      ))
    )
  },
  get chevronCircleRight () {
    return dynamic(() =>
      import('./components/chevronCircleRightIcon').then(_ => ( _.ChevronCircleRightIcon
      ))
    )
  },
  get chevronCircleUp () {
    return dynamic(() =>
      import('./components/chevronCircleUpIcon').then(_ => ( _.ChevronCircleUpIcon
      ))
    )
  },
  get chevronDown () {
    return dynamic(() =>
      import('./components/chevronDownIcon').then(_ => ( _.ChevronDownIcon
      ))
    )
  },
  get chevronLeft () {
    return dynamic(() =>
      import('./components/chevronLeftIcon').then(_ => ( _.ChevronLeftIcon
      ))
    )
  },
  get chevronRight () {
    return dynamic(() =>
      import('./components/chevronRightIcon').then(_ => ( _.ChevronRightIcon
      ))
    )
  },
  get chevronUp () {
    return dynamic(() =>
      import('./components/chevronUpIcon').then(_ => ( _.ChevronUpIcon
      ))
    )
  },
  get circle () {
    return dynamic(() => import('./components/circleIcon').then(_ => ( _.CircleIcon )))
  },
  get close () {
    return dynamic(() => import('./components/closeIcon').then(_ => ( _.CloseIcon )))
  },
  get coffeeMachine () {
    return dynamic(() =>
      import('./components/coffeeMachineIcon').then(_ => ( _.CoffeeMachineIcon
      ))
    )
  },
  get cross () {
    return dynamic(() => import('./components/crossIcon').then(_ => ( _.CrossIcon )))
  },
  get delete () {
    return dynamic(() => import('./components/deleteIcon').then(_ => ( _.DeleteIcon )))
  },
  get desk () {
    return dynamic(() => import('./components/deskIcon').then(_ => ( _.DeskIcon )))
  },
  get desktop () {
    return dynamic(() =>
      import('./components/desktopIcon').then(_ => ( _.DesktopIcon
      ))
    )
  },
  get dishwasher () {
    return dynamic(() =>
      import('./components/dishwasherIcon').then(_ => ( _.DishwasherIcon
      ))
    )
  },
  get download () {
    return dynamic(() =>
      import('./components/downloadIcon').then(_ => ( _.DownloadIcon
      ))
    )
  },
  get edit () {
    return dynamic(() => import('./components/editIcon').then(_ => ( _.EditIcon )))
  },
  get exclamationCircle () {
    return dynamic(() =>
      import('./components/exclamationCircleIcon').then(_ => ( _.ExclamationCircleIcon
      ))
    )
  },
  get filePdf () {
    return dynamic(() =>
      import('./components/filePdfIcon').then(_ => ( _.FilePdfIcon
      ))
    )
  },
  get flag () {
    return dynamic(() => import('./components/flagIcon').then(_ => ( _.FlagIcon )))
  },
  get freezer () {
    return dynamic(() =>
      import('./components/freezerIcon').then(_ => ( _.FreezerIcon
      ))
    )
  },
  get fridge () {
    return dynamic(() => import('./components/fridgeIcon').then(_ => ( _.FridgeIcon )))
  },
  get fullScreen () {
    return dynamic(() =>
      import('./components/fullScreenIcon').then(_ => ( _.FullScreenIcon
      ))
    )
  },
  get fuseBox () {
    return dynamic(() =>
      import('./components/fuseBoxIcon').then(_ => ( _.FuseBoxIcon
      ))
    )
  },
  get group () {
    return dynamic(() => import('./components/groupIcon').then(_ => ( _.GroupIcon )))
  },
  get image () {
    return dynamic(() => import('./components/imageIcon').then(_ => ( _.ImageIcon )))
  },
  get list () {
    return dynamic(() => import('./components/listIcon').then(_ => ( _.ListIcon )))
  },
  get mapMarker () {
    return dynamic(() =>
      import('./components/mapMarkerIcon').then(_ => ( _.MapMarkerIcon
      ))
    )
  },
  get meetingRoom () {
    return dynamic(() =>
      import('./components/meetingRoomIcon').then(_ => ( _.MeetingRoomIcon
      ))
    )
  },
  get menuBars () {
    return dynamic(() =>
      import('./components/menuBarsIcon').then(_ => ( _.MenuBarsIcon
      ))
    )
  },
  get mic () {
    return dynamic(() => import('./components/micIcon').then(_ => ( _.MicIcon )))
  },
  get microwave () {
    return dynamic(() =>
      import('./components/microwaveIcon').then(_ => ( _.MicrowaveIcon
      ))
    )
  },
  get octagon () {
    return dynamic(() =>
      import('./components/octagonIcon').then(_ => ( _.OctagonIcon
      ))
    )
  },
  get oven () {
    return dynamic(() => import('./components/ovenIcon').then(_ => ( _.OvenIcon )))
  },
  get paperPlane () {
    return dynamic(() =>
      import('./components/paperPlaneIcon').then(_ => ( _.PaperPlaneIcon
      ))
    )
  },
  get pauseCircle () {
    return dynamic(() =>
      import('./components/pauseCircleIcon').then(_ => ( _.PauseCircleIcon
      ))
    )
  },
  get playCircle () {
    return dynamic(() =>
      import('./components/playCircleIcon').then(_ => ( _.PlayCircleIcon
      ))
    )
  },
  get plus () {
    return dynamic(() => import('./components/plusIcon').then(_ => ( _.PlusIcon )))
  },
  get projector () {
    return dynamic(() =>
      import('./components/projectorIcon').then(_ => ( _.ProjectorIcon
      ))
    )
  },
  get pump () {
    return dynamic(() => import('./components/pumpIcon').then(_ => ( _.PumpIcon )))
  },
  get save () {
    return dynamic(() => import('./components/saveIcon').then(_ => ( _.SaveIcon )))
  },
  get search () {
    return dynamic(() => import('./components/searchIcon').then(_ => ( _.SearchIcon )))
  },
  get sensor () {
    return dynamic(() => import('./components/sensorIcon').then(_ => ( _.SensorIcon )))
  },
  get siren () {
    return dynamic(() => import('./components/sirenIcon').then(_ => ( _.SirenIcon )))
  },
  get smokeDetector () {
    return dynamic(() =>
      import('./components/smokeDetectorIcon').then(_ => ( _.SmokeDetectorIcon
      ))
    )
  },
  get sprinkle () {
    return dynamic(() =>
      import('./components/sprinkleIcon').then(_ => ( _.SprinkleIcon
      ))
    )
  },
  get squareClose () {
    return dynamic(() =>
      import('./components/squareCloseIcon').then(_ => ( _.SquareCloseIcon
      ))
    )
  },
  get square () {
    return dynamic(() => import('./components/squareIcon').then(_ => ( _.SquareIcon )))
  },
  get star () {
    return dynamic(() => import('./components/starIcon').then(_ => ( _.StarIcon )))
  },
  get television () {
    return dynamic(() =>
      import('./components/televisionIcon').then(_ => ( _.TelevisionIcon
      ))
    )
  },
  get thermometer () {
    return dynamic(() =>
      import('./components/thermometerIcon').then(_ => ( _.ThermometerIcon
      ))
    )
  },
  get triangle () {
    return dynamic(() =>
      import('./components/triangleIcon').then(_ => ( _.TriangleIcon
      ))
    )
  },
  get upload () {
    return dynamic(() => import('./components/uploadIcon').then(_ => ( _.UploadIcon )))
  },
  get verticalThreeDots () {
    return dynamic(() =>
      import('./components/verticalThreeDotsIcon').then(_ => ( _.VerticalThreeDotsIcon
      ))
    )
  },
  get washingMachine () {
    return dynamic(() =>
      import('./components/washingMachineIcon').then(_ => ( _.WashingMachineIcon
      ))
    )
  }
}
export const LazyIcon = ({ iconName, ...props }) => {
  const [LoadedIcon, setLoadedIcon] = useState(null)
  const loadModule = async () => {
    if (LoadedIcon === null) {
      const Icon = (await (lazyIcons[iconName] ?? lazyIcons.circle))
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
