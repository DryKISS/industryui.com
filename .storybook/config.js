/**
 * Storybook Configuration
 */

// React
import React from "react";

// Storybook
import { addDecorator, addParameters, configure } from "@storybook/react";

import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { addReadme } from "storybook-readme";

import { Container } from "./container";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";

// Font awesome
import { faEdit, faTachometerAltAverage, faTrash } from "@fortawesome/pro-duotone-svg-icons";

import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faBell,
  faCaretDown,
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faDogLeashed,
  faHomeHeart,
  faImages,
  faMars,
  faStethoscope,
  faTimes,
  faTimesCircle,
  faUser,
  faVenus
} from "@fortawesome/pro-regular-svg-icons";

// Icons
library.add(
  faArrowLeft,
  faArrowRight,
  faBars,
  faBell,
  faCaretDown,
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faDogLeashed,
  faEdit,
  faHomeHeart,
  faImages,
  faMars,
  faStethoscope,
  faTachometerAltAverage,
  faTimes,
  faTimesCircle,
  faTrash,
  faUser,
  faVenus
);

addDecorator(
  withInfo({
    header: true,
    inline: false,
    styles: { infoBody: { overflow: "overlay" } },
    source: true
  })
);

addDecorator(story => <Container story={story} />);
addDecorator(withA11y);

addParameters({
  options: {
    showPanel: true,
    panelPosition: "right"
  },
  readme: {
    codeTheme: "github",
    excludePropTables: []
  }
});

addDecorator(addReadme);

/**
 * Load stories
 * @see https://storybook.js.org/basics/writing-stories/#loading-stories-dynamically
 */
// const req = require.context('../components', true, /stories\.js$/)

// function loadStories() {
//   req.keys().forEach((filename) => req(filename))
// }

// configure(loadStories, module)
configure(require.context("../components", true, /stories\.js$/), module);
