/**
 * Storybook Configuration
 */

// React
import React from 'react'

// Storybook
import { addDecorator, addParameters, configure } from '@storybook/react'

import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
// import { withOptions } from '@storybook/addon-options'
import { addReadme } from 'storybook-readme'

// import { configureViewport } from '@storybook/addon-viewport';

import { Container } from './Container'
import { ThemeWrapper } from './'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faDogLeashed,
  faEdit,
  faHomeHeart,
  faImages,
  faMars,
  faStethoscope,
  faTimesCircle,
  faTrash
} from '@fortawesome/pro-regular-svg-icons'

// Icons
library.add(
  faCheckCircle,
  faDogLeashed,
  faEdit,
  faHomeHeart,
  faImages,
  faMars,
  faStethoscope,
  faTimesCircle,
  faTrash
)

addDecorator(withInfo({
  header: true,
  inline: false,
  styles: { infoBody: { overflow: 'overlay'} },
  source: true
}))

addDecorator(story => <Container story={story} />)

addDecorator(withA11y)
addDecorator(story => <ThemeWrapper story={story} />)

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    // theme: basicTheme,
    // theme: themes.dark,
  },
  readme: {
    // You can set the global code theme here.
    codeTheme: 'github',

    // You can exclude prop tables globally here.
    excludePropTables: []
  }
})

// // Info addon options
// // @see https://github.com/storybooks/storybook/tree/master/addons/info
// // @see https://github.com/storybooks/storybook/blob/master/addons/info/src/components/Story.js#L19
// withOptions({
//   theme: {
//     brandTitle: 'Industry UI',
//     brandUrl: 'https://industryui.com/'
//   },

//   // The options { goFullScreen, showStoriesPanel, showAddonPanel, addonPanelInRight }
//   // are deprecated -- use  { isFullscreen, showNav, showPanel, panelPosition } instead.

//   /**
//    * show story component as full screen
//    * @type {Boolean}
//    */
//   isFullscreen: false,

//   /**
//    * display panel that shows a list of stories
//    * @type {Boolean}
//    */
//   showPanel: true,

//   /**
//    * display panel that shows addon configurations
//    * @type {Boolean}
//    */
//   showAddonPanel: true,

//   /**
//    * display floating search box to search through stories
//    * @type {Boolean}
//    */
//   showSearchBox: false,

//   /**
//    * show addon panel as a vertical panel on the right
//    * @type {Boolean}
//    */
//   addonPanelInRight: true,

//   /**
//    * sorts stories
//    * @type {Boolean}
//    */
//   sortStoriesByKind: true,

//   /**
//    * regex for finding the hierarchy separator
//    * @example:
//    *   null - turn off hierarchy
//    *   /\// - split by `/`
//    *   /\./ - split by `.`
//    *   /\/|\./ - split by `/` or `.`
//    * @type {Regex}
//    */
//   hierarchySeparator: /\//,

//   /**
//    * regex for finding the hierarchy root separator
//    * @example:
//    *   null - turn off mulitple hierarchy roots
//    *   /\|/ - split by `|`
//    * @type {Regex}
//    */
//   hierarchyRootSeparator: null,

//   /**
//    * sidebar tree animations
//    * @type {Boolean}
//    */
//   sidebarAnimations: true,

//   /**
//    * id to select an addon panel
//    * The order of addons in the "Addon panel" is the same as you import them
//    * in 'addons.js'. The first panel will be opened by default as you run
//    * Storybook
//    *
//    * @type {String}
//    */
//   selectedAddonPanel: undefined,
// })

addDecorator(addReadme)

/**
 * Load stories
 * @see https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
 */
const req = require.context('../components', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

// function loadStories() {
//   require('../components/atoms/address/__tests__/stories/')
// }

configure(loadStories, module)
