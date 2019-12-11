/**
 * Date Picker - Calendar
 */

// React
import {
  array,
  bool,
  element,
  func,
  instanceOf,
  node,
  number,
  object,
  oneOf,
  oneOfType,
  shape,
  string
} from 'prop-types'

// Date Picker
import ReactDatePicker from 'react-datepicker'
import { placements } from 'react-popper'

// UI
import { StyledInput } from '../../../'

// Style
import 'react-datepicker/dist/react-datepicker.css'

export const DatePickerCalendar = props => {
  return <ReactDatePicker {...props} customInput={props.customInput || <StyledInput />} />
}

DatePickerCalendar.propTypes = {
  adjustDateOnChange: bool,
  allowSameDay: bool,
  ariaLabelledBy: string,
  autoComplete: string,
  autoFocus: bool,
  calendarClassName: string,
  calendarContainer: func,
  children: node,
  className: string,
  customInput: element,
  customInputRef: string,
  // eslint-disable-next-line react/no-unused-prop-types
  dateFormat: oneOfType([string, array]),
  dateFormatCalendar: string,
  dayClassName: func,
  disabled: bool,
  disabledKeyboardNavigation: bool,
  dropdownMode: oneOf(['scroll', 'select']),
  endDate: instanceOf(Date),
  excludeDates: array,
  filterDate: func,
  fixedHeight: bool,
  formatWeekNumber: func,
  highlightDates: array,
  id: string,
  includeDates: array,
  includeTimes: array,
  injectTimes: array,
  inline: bool,
  isClearable: bool,
  locale: oneOfType([string, shape({ locale: object })]),
  maxDate: instanceOf(Date),
  minDate: instanceOf(Date),
  monthsShown: number,
  name: string,
  onBlur: func,
  onChange: func.isRequired,
  onSelect: func,
  onWeekSelect: func,
  onClickOutside: func,
  onChangeRaw: func,
  onFocus: func,
  onInputClick: func,
  onKeyDown: func,
  onMonthChange: func,
  onYearChange: func,
  onInputError: func,
  open: bool,
  onCalendarOpen: func,
  onCalendarClose: func,
  openToDate: instanceOf(Date),
  peekNextMonth: bool,
  placeholderText: string,
  popperContainer: func,
  popperClassName: string, // <PopperComponent/> props
  popperModifiers: object, // <PopperComponent/> props
  popperPlacement: oneOf(placements), // <PopperComponent/> props
  popperProps: object,
  preventOpenOnFocus: bool,
  readOnly: bool,
  required: bool,
  scrollableYearDropdown: bool,
  scrollableMonthYearDropdown: bool,
  selected: instanceOf(Date),
  selectsEnd: bool,
  selectsStart: bool,
  showMonthDropdown: bool,
  showPreviousMonths: bool,
  showMonthYearDropdown: bool,
  showWeekNumbers: bool,
  showYearDropdown: bool,
  strictParsing: bool,
  forceShowMonthNavigation: bool,
  showDisabledMonthNavigation: bool,
  startDate: instanceOf(Date),
  startOpen: bool,
  tabIndex: number,
  timeCaption: string,
  title: string,
  todayButton: node,
  useWeekdaysShort: bool,
  formatWeekDay: func,
  value: string,
  weekLabel: string,
  withPortal: bool,
  yearDropdownItemNumber: number,
  shouldCloseOnSelect: bool,
  showTimeInput: bool,
  showMonthYearPicker: bool,
  showQuarterYearPicker: bool,
  showTimeSelect: bool,
  showTimeSelectOnly: bool,
  timeFormat: string,
  timeIntervals: number,
  minTime: instanceOf(Date),
  maxTime: instanceOf(Date),
  excludeTimes: array,
  useShortMonthInDropdown: bool,
  clearButtonTitle: string,
  previousMonthButtonLabel: string,
  nextMonthButtonLabel: string,
  previousYearButtonLabel: string,
  nextYearButtonLabel: string,
  timeInputLabel: string,
  renderCustomHeader: func,
  renderDayContents: func,
  wrapperClassName: string,
  inlineFocusSelectedMonth: bool,
  onDayMouseEnter: func,
  onMonthMouseLeave: func,
  showPopperArrow: bool
}

DatePickerCalendar.defaultProps = {
  dateFormat: 'd MMM yyyy HH:mm',
  dropdownMode: 'scroll',
  isClearable: true,
  placeholderText: 'Click to select time',
  showTimeSelect: true,
  timeIntervals: 30
}
