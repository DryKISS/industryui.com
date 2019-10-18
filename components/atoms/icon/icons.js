/**
 * Font Awesome Icons
 *
 * Want to do a selective import of fontawesome Icons, theory was to produce a
 * dynamic import of these. Commented out stuff below:
 *
 * Read this stack post that offered the below - need to check the bundle to see
 * if all the icons are brough back - log shows all are imported back
 * @see https://stackoverflow.com/questions/52625741/react-fontawesome-importing-all-icons
 *
 * Ok so filtered out what I need and the UseEffect works nice so not refiltered
 * on each app pass
 *
 * However does import * as ProIcons mean I am still importing the whole library
 *
 * @see https://fontawesome.com
 */

// import { useEffect } from 'react'

// import * as ProDuo from '@fortawesome/pro-duotone-svg-icons'
// import * as ProIcons from '@fortawesome/pro-regular-svg-icons'
// import * as BrandIcons from '@fortawesome/free-brands-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'

// export const Icons = ({ icons }) => {
//   useEffect(() => {
//     let proDuo = []
//     let proIcons = []
//     let brandIcons = []

//     if (icons && icons.proDuotone) {
//       proDuo = Object
//         .keys(ProDuo)
//         .filter(key => key !== 'fad' && key !== 'prefix' && icons.proDuotone.includes(key))
//         .map(icon => ProDuo[icon])
//     }

//     if (icons && icons.proRegular) {
//       proIcons = Object
//         .keys(ProIcons)
//         .filter(key => key !== 'far' && key !== 'prefix' && icons.proRegular.includes(key))
//         .map(icon => ProIcons[icon])
//     }

//     if (icons && icons.brands) {
//       brandIcons = Object
//         .keys(BrandIcons)
//         .filter(key => key !== 'fab' && key !== 'prefix' && icons.brands.includes(key))
//         .map(icon => BrandIcons[icon])
//     }

//     library.add(...proDuo, ...proIcons, ...brandIcons)
//   }, [])

//   return <></>
// }
