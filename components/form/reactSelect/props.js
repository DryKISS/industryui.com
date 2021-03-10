/**
 * Components - Form - React Select - Props
 */

// React
import { array, bool, func, string, number, object, oneOf, oneOfType } from 'prop-types'

export const propTypes = {
  // Whether select is async or not
  async: bool,

  // Focus the control when it is mounted
  autoFocus: bool,

  // Remove the currently focused option when the user presses backspace
  backspaceRemovesValue: bool,

  // Remove focus from the input when the user selects an option (handy for dismissing the keyboard
  // on touch devices)
  blurInputOnSelect: bool,

  // When the user reaches the top/bottom of the menu, prevent scroll on the scroll-parent
  captureMenuScroll: bool,

  // Close the select menu when the user selects an option
  closeMenuOnSelect: bool,

  // If `true`, close the select menu when the user scrolls the document/body. If a function, takes
  // a standard javascript `ScrollEvent` you return a boolean: `true` => The menu closes
  // `false` => The menu stays open This is useful when you have a scrollable modal and want to
  // portal the menu out, but want to avoid graphical issues.
  closeMenuOnScroll: oneOfType([bool, func]),

  // This complex object includes all the compositional components that are used in `react-select`.
  // If you wish to overwrite a component, pass in an object with the appropriate namespace. If you
  // only wish to restyle a component, we recommend using the `styles` prop instead. For a list of
  // the components that can be passed in, and the shape that will be passed to them, see
  // [the components docs](/components)
  components: object,

  // Whether the value of the select, e.g. SingleValue, should be displayed in the control.
  controlShouldRenderValue: bool,
  defaultValue: oneOfType([array, object]),

  // Delimiter used to join multiple values into a single HTML Input value
  delimiter: string,

  // Clear all values when the user presses escape AND the menu is closed
  escapeClearsValue: bool,

  // Hide the selected option from the menu
  hideSelectedOptions: bool,

  // The id to set on the SelectContainer component
  id: string,

  // The id of the search input
  inputId: string,

  // Define an id prefix for the select components e.g. {your-id}-value
  instanceId: oneOfType([number, string]),

  // Is the select value clearable
  isClearable: bool,

  // Is the select disabled
  isDisabled: bool,

  // Is the select in a state of loading (async)
  isLoading: bool,

  // Support multiple selected options
  isMulti: bool,

  // Is the select direction right-to-left
  isRtl: bool,

  // Whether to enable search functionality
  isSearchable: bool,

  // Label text
  label: string,

  // Async: Text to display when loading options
  loadingMessage: func,

  // Minimum height of the menu before flipping
  minMenuHeight: number,

  // Maximum height of the menu before scrolling
  maxMenuHeight: number,

  // Whether the menu is open
  menuIsOpen: bool,

  // Default placement of the menu in relation to the control. 'auto' will flip when there isn't
  // enough space below the control.
  menuPlacement: oneOf(['auto', 'bottom', 'top']),

  // The CSS position value of the menu, when "fixed" extra layout management is required
  menuPosition: oneOf(['absolute', 'fixed']),

  // Whether to block scroll events when the menu is open
  menuShouldBlockScroll: bool,

  // Whether the menu should be scrolled into view when it opens
  menuShouldScrollIntoView: bool,

  // Text to display when there are no options
  noOptionsMessage: func,

  // Handle blur events on the control
  onBlur: func,

  // Handle focus events on the control
  onFocus: func,

  // Handle key down events on the select
  onKeyDown: func,

  // Handle the menu opening
  onMenuOpen: func,

  // Handle the menu closing
  onMenuClose: func,

  // Fired when the user scrolls to the top of the menu
  onMenuScrollToTop: func,

  // Fired when the user scrolls to the bottom of the menu
  onMenuScrollToBottom: func,

  // Allows control of whether the menu is opened when the Select is focused
  openMenuOnFocus: bool,

  // Allows control of whether the menu is opened when the Select is clicked
  openMenuOnClick: bool,

  // Array of options that populate the select menu
  options: array.isRequired,

  // Number of options to jump in menu when page{up|down} keys are used
  pageSize: number,

  // Placeholder for the select value
  placeholder: string,

  // Status to relay to screen readers
  screenReaderStatus: func,

  // The value of the select; reflected by the selected option
  selectedOption: oneOfType([array, object]),

  // Sets the tabIndex attribute on the input
  tabIndex: string,

  // Select the currently focused option when the user presses tab
  tabSelectsValue: bool,
}

export const defaultProps = (defaultStyles) => ({
  backspaceRemovesValue: true,
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  defaultValue: undefined,
  error: '',
  errors: {},
  escapeClearsValue: false,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  loadingMessage: () => 'Loading...',
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  noOptionsMessage: () => 'No options',
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: ({ count }) => `${count} result${count !== 1 ? 's' : ''} available`,
  styles: defaultStyles,
  tabIndex: '0',
  tabSelectsValue: true,
})
